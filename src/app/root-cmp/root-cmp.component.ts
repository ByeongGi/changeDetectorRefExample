import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root-cmp',
  templateUrl: './root-cmp.component.html',
  styleUrls: ['./root-cmp.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RootCmpComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    console.log("[1] RootCmpComponent : 이벤트에 대한 변화 감지 확인");
  }
}
