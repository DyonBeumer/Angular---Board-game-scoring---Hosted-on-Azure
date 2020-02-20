import { GeneralGameInfo } from './../../Models/general-game-info';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpGameDataService } from '../../Services/http-game-data-service.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../Models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private gameService: HttpGameDataService, private formBuilder: FormBuilder) { }
  gameRegistrationForm: FormGroup;
  games: Observable<Game[]>;
  generalGameInfo: GeneralGameInfo;
  players: Observable<string[]>;
  gameSelected: '';

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.gameRegistrationForm = this.formBuilder.group({
      playdate: ['', Validators.required],
      playercount: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
    this.gameRegistrationForm.controls.playercount.valueChanges.subscribe(change => {
      // Tbd
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter to send data
    console.warn('Form submitted: \n' + JSON.stringify(this.gameRegistrationForm.value));
    console.warn(this.gameSelected);
    this.generalGameInfo = this.gameRegistrationForm.value;
  }
}
