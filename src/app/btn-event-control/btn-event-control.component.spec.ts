import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEventControlComponent } from './btn-event-control.component';

describe('BtnEventControlComponent', () => {
  let component: BtnEventControlComponent;
  let fixture: ComponentFixture<BtnEventControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnEventControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEventControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
