import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    Title:string,
    Year:string,
    Released:string,
    Runtime:string,
    Genre:string,
    Director:string,
    Plot:string,
    Poster:string,
    imdbRating:string
  },
  private matDialogRef: MatDialogRef<MovieDialogComponent> ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.matDialogRef.close();
  }

}



