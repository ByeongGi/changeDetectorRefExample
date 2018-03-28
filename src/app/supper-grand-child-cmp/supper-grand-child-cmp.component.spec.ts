import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperGrandChildCmpComponent } from './supper-grand-child-cmp.component';

describe('SupperGrandChildCmpComponent', () => {
  let component: SupperGrandChildCmpComponent;
  let fixture: ComponentFixture<SupperGrandChildCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupperGrandChildCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperGrandChildCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
