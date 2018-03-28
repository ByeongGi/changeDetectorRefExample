import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wrapping',
  templateUrl: './wrapping.component.html',
  styleUrls: ['./wrapping.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WrappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 