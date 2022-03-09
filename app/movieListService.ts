import { IMovie } from './movie';
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MovieListService {
  list: IMovie[] = [];


  addToList(movie: IMovie) {
    this.list.push(movie);
  }

  getList() {
    return this.list;
  }


}