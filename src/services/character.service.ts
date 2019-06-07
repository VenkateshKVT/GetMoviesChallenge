import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap , map, catchError} from 'rxjs/operators';
import {Character} from './../app/models/character'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) { }

  public getCharacters() {
      return this._http.get('./../assets/character.json');
  }
  public getMovies(char: Character) {
    return this._http.get(char.url);
  }
  public getMovieName(url: string) {
    return this._http.get(url);
  }
}
