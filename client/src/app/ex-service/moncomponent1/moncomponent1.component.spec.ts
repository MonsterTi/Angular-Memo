import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moncomponent1Component } from './moncomponent1.component';

describe('Moncomponent1Component', () => {
  let component: Moncomponent1Component;
  let fixture: ComponentFixture<Moncomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moncomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moncomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
