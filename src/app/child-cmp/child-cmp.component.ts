import { Component, OnInit, ChangeDetectorRef, NgZone, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildCmpComponent implements OnInit, AfterViewChecked {

  constructor(
      private changeDetectorRef:ChangeDetectorRef
    , private ngZone:NgZone) {

    }

  ngOnInit() { 
    // 이 컴포넌트부터 변화감지기를 분리하라. 
    // 이 컴포넌트를 기준으로 tree 에서 하위 이벤트 전파가 안됨
    this.changeDetectorRef.detach();
    // this.changeDetectorRef.reattach();
  }


  ngAfterViewChecked(): void {
    console.log("[2] ChildCmpComponent: 이벤트에 대한 변화 감지 확인");
  }



}
