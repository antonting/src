import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';

import { DATA } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj sida.';
  data = DATA;

  constructor(public matDialog: MatDialog){

  }


}
