import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieListService } from '../movieListService';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']

})
export class MovieListComponent implements OnInit{
  list: IMovie[];
  @Input() matDialog?: MatDialog;

  constructor(private _movieList: MovieListService){
     this.list = this._movieList.getList();
  }

  ngOnInit(): void{

  }

  showDialog(index: number) {
    if(this.matDialog) {
      this.matDialog.open(MovieDialogComponent,
        {
          data: this.list[index]
        }
      );
    }
  }


    public removeMovie(index: number){
        this.list.splice(index,1);
        console.log(this.list);
    }

}
