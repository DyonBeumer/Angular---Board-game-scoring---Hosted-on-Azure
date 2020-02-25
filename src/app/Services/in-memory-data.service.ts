import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../Models/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let games = Array<Game>();
    games = [
      { gameid: 0, name: '', minallowedplayercount: 0, maxallowedplayercount: 0, scoringtemplate: ''}
    ];
    return {games};
  }
}
