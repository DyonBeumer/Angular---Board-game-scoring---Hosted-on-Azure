import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../Models/game';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 1, name: 'Great Western Trail' },
      { id: 2, name: 'Kingdomino' },
      { id: 3, name: 'Terraforming Mars' },
      { id: 4, name: 'Trails of Tucana' },
      { id: 5, name: 'Welcome To...' },
      { id: 6, name: '7 Wonders: Duel' },
      { id: 7, name: 'Race for the Galaxy' },
      { id: 8, name: 'Terra Mystica' },
    ];
    return {games};
  }
}
