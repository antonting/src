import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj sida.';

  constructor(public matDialog: MatDialog){

  }


}
