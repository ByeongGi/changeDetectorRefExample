import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappingBtnComponent } from './wrapping-btn.component';

describe('WrappingBtnComponent', () => {
  let component: WrappingBtnComponent;
  let fixture: ComponentFixture<WrappingBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappingBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
