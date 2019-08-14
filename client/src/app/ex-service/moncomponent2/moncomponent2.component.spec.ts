import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moncomponent2Component } from './moncomponent2.component';

describe('Moncomponent2Component', () => {
  let component: Moncomponent2Component;
  let fixture: ComponentFixture<Moncomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moncomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moncomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
