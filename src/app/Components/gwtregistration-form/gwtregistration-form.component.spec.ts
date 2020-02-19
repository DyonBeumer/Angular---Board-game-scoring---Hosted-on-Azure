import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GWTRegistrationFormComponent } from './gwtregistration-form.component';

describe('GWTRegistrationFormComponent', () => {
  let component: GWTRegistrationFormComponent;
  let fixture: ComponentFixture<GWTRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GWTRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GWTRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
