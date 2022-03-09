import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieListService } from '../movieListService';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']

})
export class MovieListComponent implements OnInit{
  list: any[];

  constructor(private _movieList: MovieListService){
     this.list = this._movieList.getList();
  }

  ngOnInit(): void{
        
  }

 // typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


    public onClick(index: number){
        this.list.splice(index,1);
        console.log(this._movieList.getList());
    }
  
}

