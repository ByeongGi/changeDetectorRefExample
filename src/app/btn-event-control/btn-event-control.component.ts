import { Component, OnInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { EventPropagationService } from '../event-propagation.service';

@Component({
  selector: 'app-btn-event-control',
  templateUrl: './btn-event-control.component.html',
  styleUrls: ['./btn-event-control.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BtnEventControlComponent implements OnInit , AfterViewChecked {

  msg :string;

  ngAfterViewChecked(): void {
    // console.log("전파 받으면 안됨 ");
  }
  constructor(
    private eventPropagationService: EventPropagationService
  ) {}

  onClick(event){
    this.eventPropagationService.eventEmit(event);
    if (event === 'detech') { 
      this.msg = `chlid 컴포넌트  기준으로 변화 감지자 해체`;
    } else if (event === 'reattech') {  
      this.msg = `chlid 컴포넌트 기준으로 변화 감지가 복구`;
    } else if (event === 'markForCheck') {
      this.msg = `chlid 컴포넌트 기준으로 트리에서 위로 방향으로 체크`;
    } else if (event === 'detectChanges') {
      this.msg = `chlid 컴포넌트 기준으로 트리에서 아래 방향으로 체크`;
    }
  }

  ngOnInit() {
  }

}
