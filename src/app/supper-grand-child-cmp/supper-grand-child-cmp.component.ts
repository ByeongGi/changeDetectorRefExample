import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy, ViewContainerRef, NgZone } from '@angular/core';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-supper-grand-child-cmp',
  templateUrl: './supper-grand-child-cmp.component.html',
  styleUrls: ['./supper-grand-child-cmp.component.css'] ,
  // changeDetection : ChangeDetectionStrategy.OnPush
  
})
export class SupperGrandChildCmpComponent implements OnInit , AfterViewChecked {

  constructor(private colorChangeService: ColorChangeService
    , private viewContainerRef : ViewContainerRef
    , private ngZone:NgZone) {

  }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    console.log("[4] SupperGrandChildCmpComponent : 이벤트에 대한 변화 감지 확인");
    this.colorChangeService.changeColorForComponent(this.viewContainerRef, this.ngZone);
  }

}
