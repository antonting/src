import { IMovie, Movie } from './../../movie-module';
import { HttpMovieService } from './../../Service/http-movie.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  public movie: IMovie;

  constructor(private router: Router, private httpService: HttpMovieService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    let title = (form.value.seach).toString();

    this.httpService
      .getMovie('e5242bd7', title)
      .subscribe((data) => {
        this.movie = data;
        this.httpService.updateMoviesList(this.movie);
      })
      console.log(this.httpService.movieList);
  }
}
