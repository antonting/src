import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment'
import { Observable } from 'rxjs';
import { Movie } from '../movie-module';

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {

  constructor(private http : HttpClient) { }

  getMovie(
    apiKey : string,
    search : string
  ) : Observable<Movie> {
    let params = new HttpParams().set('apikey', apiKey).set('t', search);

    return this.http.get<Movie>(`${env.BASE_URL}`, {params: params});
  }
}
