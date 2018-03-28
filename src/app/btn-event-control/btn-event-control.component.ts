import { Component, OnInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-btn-event-control',
  templateUrl: './btn-event-control.component.html',
  styleUrls: ['./btn-event-control.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BtnEventControlComponent implements OnInit , AfterViewChecked {

  ngAfterViewChecked(): void {
    console.log("전파 받으면 안됨 ");
  }
  constructor() { }

  ngOnInit() {
  }

}
