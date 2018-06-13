import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnEventCompomentComponent } from './on-event-compoment.component';

describe('OnEventCompomentComponent', () => {
  let component: OnEventCompomentComponent;
  let fixture: ComponentFixture<OnEventCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnEventCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnEventCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
