import { NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphyComponent } from './graphy/graphy.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatList, MatListModule} from '@angular/material/list';
import { MovieListService } from './movieListService';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    GraphyComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  entryComponents: [
    MovieDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
