import { HttpMovieService } from './../../Service/http-movie.service';
import { IMovie } from './../../movie-module';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  public movies: IMovie[] = [];
  private matDialog: MatDialog;

  constructor(private moviesList: HttpMovieService) {
    this.movies = this.moviesList.getMoviesList();
   }

  ngOnInit(): void {
  }

  public viewDetails(index : number) {
    let movie = this.movies.splice(index, 1);
    //this.matDialog.open(MovieDetailsComponent, movie);
  }

  public removeMovie(index : number) {
    this.movies.splice(index, 1);
    console.log(this.movies);
  }
}
