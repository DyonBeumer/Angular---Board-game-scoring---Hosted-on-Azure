import { Observable } from 'rxjs';
import { HttpGameDataService } from './../Services/http-game-data-service.service';
import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../Services/in-memory-data.service';
import { Game } from '../Models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private gameService: HttpGameDataService) { }

  games: Observable<Game[]>;

  ngOnInit() {
    this.games = this.gameService.getGames();
  }
}
