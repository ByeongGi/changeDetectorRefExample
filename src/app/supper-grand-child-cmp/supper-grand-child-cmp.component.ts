import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-supper-grand-child-cmp',
  templateUrl: './supper-grand-child-cmp.component.html',
  styleUrls: ['./supper-grand-child-cmp.component.css']
})
export class SupperGrandChildCmpComponent implements OnInit , AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    console.log("[4] SupperGrandChildCmpComponent : 이벤트에 대한 변화 감지 확인");
  }

}
