import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRegistrationFormComponent } from './game-registration-form.component';

describe('GameRegistrationFormComponent', () => {
  let component: GameRegistrationFormComponent;
  let fixture: ComponentFixture<GameRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
