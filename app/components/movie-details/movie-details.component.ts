import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from '../../movie-module';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public movie: IMovie,
    private matDialogRef: MatDialogRef<MovieDetailsComponent>
    ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.matDialogRef.close()
  }
}
