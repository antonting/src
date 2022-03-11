import { IMovie } from "./movie";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MovieListService {
  list: IMovie[] = [];

  addToList(movie: IMovie) {
    console.log(movie.Title);
    if (this.containsTitle(movie.Title) && movie.Title != undefined) {
      this.list.push(movie);
    }
    console.log(this.list);
  }

  getList() {
    return this.list;
  }

  private containsTitle(title: string) {
    for (var movie of this.list) {
      if (movie.Title == title) {
        return false;
      }
    }
    return true;
  }
}