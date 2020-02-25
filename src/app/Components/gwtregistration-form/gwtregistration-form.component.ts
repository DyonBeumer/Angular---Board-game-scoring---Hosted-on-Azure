import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { FormTemplate } from './../../Models/gwtscoring_template';

@Component({
  selector: 'app-gwtregistration-form',
  templateUrl: './gwtregistration-form.component.html',
  styleUrls: ['./gwtregistration-form.component.css']
})
export class GWTRegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  formTemplate: any = FormTemplate;
  formArray: FormArray;
  // array: Array<number>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    let group = {};
    this.formTemplate.array.forEach(element => {
      group[element.label] = new FormControl('');
    });
    this.registrationForm = new FormGroup(group);


  }

  onSubmit() {
    // this.array = new Array(this.generalGameInfo.playercount).fill(this.generalGameInfo.playercount);
    console.warn('Form submitted: \n' + JSON.stringify(this.registrationForm.value));
  }
}
