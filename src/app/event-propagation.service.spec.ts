import { TestBed, inject } from '@angular/core/testing';

import { EventPropagationService } from './event-propagation.service';

describe('EventPropagationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventPropagationService]
    });
  });

  it('should be created', inject([EventPropagationService], (service: EventPropagationService) => {
    expect(service).toBeTruthy();
  }));
});
