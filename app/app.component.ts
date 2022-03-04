import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';

  constructor(private matDialog: MatDialog){

  }

  onOpenDialogClick(){
    this.matDialog.open(MovieDialogComponent,
      {
        data: {"Title":"A Clockwork Orange","Year":"1971","Rated":"X","Released":"02 Feb 1972","Runtime":"136 min","Genre":"Crime, Sci-Fi","Director":"Stanley Kubrick","Writer":"Stanley Kubrick, Anthony Burgess","Actors":"Malcolm McDowell, Patrick Magee, Michael Bates","Plot":"In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.","Language":"English","Country":"United Kingdom, United States","Awards":"Nominated for 4 Oscars. 12 wins & 24 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"8.3","imdbVotes":"802,103","imdbID":"tt0066921","Type":"movie","DVD":"23 Oct 2007","BoxOffice":"$26,589,355","Production":"N/A","Website":"N/A","Response":"True"}
      }
    );
  }
}


