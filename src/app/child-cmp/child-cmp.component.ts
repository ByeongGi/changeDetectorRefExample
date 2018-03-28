import { Component, OnInit, ChangeDetectorRef, NgZone, AfterViewChecked, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
import { EventPropagationService } from '../event-propagation.service';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildCmpComponent implements OnInit, AfterViewChecked {

  constructor(
      private changeDetectorRef:ChangeDetectorRef
    , private ngZone:NgZone
    , private viewContainerRef : ViewContainerRef
    , private colorChangeService: ColorChangeService
    , private eventPropagationService: EventPropagationService
    ) {

    }

  ngOnInit() {
    // 이 컴포넌트부터 변화감지기를 분리하라. 
    // 이 컴포넌트를 기준으로 tree 에서 하위 이벤트 전파가 안됨

    this.eventPropagationService
      .getEventPropagation()
      .subscribe((event) => {
          // console.log('dsdasdsadasds' + event);
          this.ngZone.run(() => {
            
            console.log( '이벤트 명 : '+ event);

            if (event === 'detech') { 
              this.changeDetectorRef.detach(); // 이 컴포넌트 기준으로 변화 감지자 해체
            } else if (event === 'reattech') {  
              this.changeDetectorRef.reattach(); // 이 컴포넌트 기준으로 변화 감지가 복구
            } else if (event === 'markForCheck') {
              this.changeDetectorRef.markForCheck(); // 자신 기준으로 트리에서 위로 방향으로 체크
            } else if (event === 'detectChanges') {
              this.changeDetectorRef.detectChanges(); // 자신 기준으로 트리에서 아래 방향으로 체크
            }
            
          });
      }); 

  }

  ngAfterViewChecked() {
    console.log("[2] ChildCmpComponent: 이벤트에 대한 변화 감지 확인");
    this.colorChangeService.changeColorForComponent(this.viewContainerRef, this.ngZone);
  }



}
