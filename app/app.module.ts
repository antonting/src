import { NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphyComponent } from './graphy/graphy.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    GraphyComponent,
  ],
  entryComponents: [
    MovieDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
