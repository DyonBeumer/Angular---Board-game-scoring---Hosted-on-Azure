import { Database } from './../Models/database.model';
import { GWTFormTemplate } from './../Models/gwtscoring_template';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../Models/game.model';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      new Game(0, '', 0, 0, new Object()),
      new Game(1, 'Great Western Trail', 2, 4, GWTFormTemplate)
    ];

    const users = [
      new User(0, '', '', ''),
      new User(1, 'Dyon', 'Dyonutborne', 'Dyonunic@gmail.com')
    ];
    return {games, users};
  }
}
