import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy, ViewContainerRef, NgZone } from '@angular/core';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-root-cmp',
  templateUrl: './root-cmp.component.html',
  styleUrls: ['./root-cmp.component.css'],
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class RootCmpComponent implements OnInit, AfterViewChecked {

  constructor(private colorChangeService: ColorChangeService
    , private viewContainerRef : ViewContainerRef
    , private ngZone:NgZone) {

  }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    console.log("[1] RootCmpComponent : 이벤트에 대한 변화 감지 확인");
    this.colorChangeService.changeColorForComponent(this.viewContainerRef, this.ngZone)
  }


}
