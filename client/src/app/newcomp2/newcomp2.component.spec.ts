import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomp2Component } from './newcomp2.component';

describe('Newcomp2Component', () => {
  let component: Newcomp2Component;
  let fixture: ComponentFixture<Newcomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newcomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
