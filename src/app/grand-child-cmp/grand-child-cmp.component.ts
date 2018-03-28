import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy, ViewContainerRef, NgZone } from '@angular/core';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-grand-child-cmp',
  templateUrl: './grand-child-cmp.component.html',
  styleUrls: ['./grand-child-cmp.component.css'] ,
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class GrandChildCmpComponent implements OnInit , AfterViewChecked {

  constructor(private colorChangeService: ColorChangeService
    , private viewContainerRef : ViewContainerRef
    , private ngZone:NgZone) {

  }

  ngOnInit() {
  } 

  ngAfterViewChecked(): void {
    console.log("[3] GrandChildCmpComponent : 이벤트에 대한 변화 감지 확인");
    this.colorChangeService.changeColorForComponent(this.viewContainerRef, this.ngZone);
  }  
 

}
