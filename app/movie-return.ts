import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IMovie} from './movie';
import {Observable} from 'rxjs';


@Injectable()
export class ReturnMovie{
    
    private _url: string = "http://www.omdbapi.com/?t=die+hard";

    constructor(private http: HttpClient){}

    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this._url);
    }
}