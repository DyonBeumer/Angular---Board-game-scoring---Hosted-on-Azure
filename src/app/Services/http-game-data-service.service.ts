import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Game } from '../Models/game.model';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class HttpGameDataService {
  gamedataUrl = 'api/games';
  constructor(private http: HttpClient) {  }
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamedataUrl).pipe(
      catchError(this.handleError)
    );
  }

  getGame(id: number) {
    return this.http.get<Game>(`${this.gamedataUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createGame(game: Game) {

  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
