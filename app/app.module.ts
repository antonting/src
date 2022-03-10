import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatList, MatListModule} from '@angular/material/list';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieDisplayComponent,
    MovieDetailsComponent,
  ],
  entryComponents: [
    MovieDisplayComponent
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
