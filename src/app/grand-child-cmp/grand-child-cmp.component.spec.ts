import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildCmpComponent } from './grand-child-cmp.component';

describe('GrandChildCmpComponent', () => {
  let component: GrandChildCmpComponent;
  let fixture: ComponentFixture<GrandChildCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
