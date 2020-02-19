import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-registration-form',
  templateUrl: './game-registration-form.component.html',
  styleUrls: ['./game-registration-form.component.css']
})
export class GameRegistrationFormComponent implements OnInit {
  gameRegistrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.gameRegistrationForm = this.formBuilder.group({
      playDate: ['', Validators.required],
      playerCount: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter to send data
    console.warn('Form submitted: \n' + JSON.stringify(this.gameRegistrationForm.value));
  }

}
