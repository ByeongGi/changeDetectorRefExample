import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventPropagationService {

  eventPropagation:Subject<any> = new Subject<any>();

  public eventEmit(event){
    // console.log(event);
    this.eventPropagation.next(event);
  }

  public getEventPropagation(): Subject<any> {
    return this.eventPropagation;
  }

  constructor() { }

}
