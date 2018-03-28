import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wrapping-btn',
  templateUrl: './wrapping-btn.component.html',
  styleUrls: ['./wrapping-btn.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WrappingBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 