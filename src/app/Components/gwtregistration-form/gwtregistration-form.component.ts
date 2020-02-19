import { GeneralGameInfo } from './../../Models/general-game-info';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gwtregistration-form',
  templateUrl: './gwtregistration-form.component.html',
  styleUrls: ['./gwtregistration-form.component.css']
})
export class GWTRegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  @Input() generalGameInfo: GeneralGameInfo;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      goldpoints: [''],
      buildingspoints: [''],
      deliveriespoints: [''],
      trainstationspoints: [''],
      hazardspoints: [''],
      cowspoints: [''],
      goalspoints: [''],
      stationmastertilespoints: [''],
      hiredpeoplepoints: [''],
      playerboardunlockpoints: [false], // 3 points if unlocked.
      gamefinisherpoints: [false], // 2 points if player triggered game end.
      totalpoints: ['']
    });
  }
}
