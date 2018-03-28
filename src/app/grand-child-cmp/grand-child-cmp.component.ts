import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grand-child-cmp',
  templateUrl: './grand-child-cmp.component.html',
  styleUrls: ['./grand-child-cmp.component.css'] ,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class GrandChildCmpComponent implements OnInit , AfterViewChecked {

  constructor() {}
  ngOnInit() {
  } 

  ngAfterViewChecked(): void {
    console.log("[3] GrandChildCmpComponent : 이벤트에 대한 변화 감지 확인");
  }


}
