import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {item } from '../item';
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
  
  
  constructor(private _movieList: MovieListService, private http: HttpClient){

  }

  
  data(f:NgForm){
     let movie: IMovie;
     this.http.get<IMovie>(this.getUrl(f.value.title)).subscribe(data => {
       movie = data;
       this._movieList.addToList(movie);
     })
     console.log(this._movieList);
          
  }

  public getUrl(title: string){
    let startString = new String("http://www.omdbapi.com/?t=");
    let endString = new String("&apikey=e0581845");
    let url = startString.concat(title.toString()).concat(endString.toString());
    return url;
  }

  
}


