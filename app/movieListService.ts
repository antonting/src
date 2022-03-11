import { IMovie } from './movie';
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MovieListService {
  list: IMovie[] = [];

  private containsTitle(title: string){
    for(var movie of this.list){
      if(movie.Title == title){
        return false;
      }
    }
    return true;
  } 

  addToList(movie: IMovie) {
    if(this.containsTitle(movie.Title) && movie.Title != undefined){
      this.list.push(movie);
    }
  }

  getList() {
    return this.list;
  }


}
