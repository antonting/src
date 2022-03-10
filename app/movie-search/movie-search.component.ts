import { HttpMovieService } from './../../service/http-movie.service';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MovieListService} from '../movieListService';
import { NgForm } from '@angular/forms';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})

export class MovieSearchComponent {


  constructor(private _movieList: MovieListService, private http: HttpMovieService){

  }


  onSubmit(form: NgForm){

    let movie: IMovie;
    this.http.getMovie('e5242bd7', (form.value.title).toString()).subscribe(data => {
      movie = data;
      this._movieList.addToList(movie);
    })

  }



}
