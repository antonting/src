import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment'
import { Observable } from 'rxjs';
import {  IMovie, Movie } from '../movie-module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {
  movieList: IMovie[] = [];
  
  constructor(private http : HttpClient) { }

  getMovie(
    apiKey : string,
    search : string
  ) : Observable<Movie> {
    let params = new HttpParams().set('apikey', apiKey).set('t', search);

    return this.http.get<Movie>(`${env.BASE_URL}`, {params: params});
  }

  updateMoviesList(movie: IMovie) {
    this.movieList.push(movie);
  }

  getMoviesList() {
    return this.movieList;
  }
}
