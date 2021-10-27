import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Films } from './films';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private _http: HttpClient) { }


  public getFilms (): Observable<Films[]> {

    return this._http.get<Films[]>('https://dev.webjs.fr/films.json').pipe(
      tap(
        (responseHttp: any) => {
          console.log(`le service renvoie ${responseHttp}`)
        }
      )
    )
  }
}
