import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCmpComponent } from './child-cmp.component';

describe('ChildCmpComponent', () => {
  let component: ChildCmpComponent;
  let fixture: ComponentFixture<ChildCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
