import { Component, OnInit, Input , DoCheck} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { DATA } from '../mock-data';


@Component({
  selector: 'app-graphy',
  templateUrl: './graphy.component.html',
  styleUrls: ['./graphy.component.css']
})
export class GraphyComponent implements OnInit,  DoCheck {

  data = DATA; // Should change to input
  minXValue :number = 0;
  maxXValue :number = 0;

  minYValue :number = 0;
  maxYValue :number = 0;
  @Input() matDialog?: MatDialog;
  @Input() ratingType :string = "Internet Movie Database";


  convertToPixels = (value: number, minValue: number, maxValue: number) => {
    var pos = 500*(value - minValue)/(maxValue-minValue) + 50;
    if(pos < 0) {
      pos = 0;
    }
    return pos;
  };

  logElement(ele: any) {
    if(this.matDialog) {
      this.matDialog.open(MovieDialogComponent,
        {
          data: ele
        }
      );
    }
  }

  setNewYValue(v1: any) {
    this.ratingType = v1.target.value;
  }

  //recompute when new data input?
  ngDoCheck(): void {
    this.calculateXValues();
    this.calculateYValues();
  }

  constructor() { }

  convertToInt(value: string) {
    if(this.ratingType === 'Internet Movie Database') {
      value = value.substr(0, value.indexOf('/'));
      var converted = +value;
      return converted;
    } else if (this.ratingType === 'Metacritic') {
      value = value.substr(0, value.indexOf('/'));
      var converted = +value;
      converted = converted / 10;
      return converted;
    } else if(this.ratingType === 'Rotten Tomatoes') {
      value = value.substr(0, value.length-1);
      var converted = +value;
      converted = converted / 10;
      return converted;
    }
    return -1;
  }

  selectCorrectYValue(ratings: any) {
    let value = 0;
    ratings.map( (source: any) => {
      if(source['Source'] === this.ratingType) {
        value = this.convertToInt(source['Value']);
      }
    });
    return value;
  }

  getCorrectRating(ratings: any) {
    let value = "NaN"
    ratings.map( (source: any) => {
      if(source['Source'] === this.ratingType) {
        value = source['Value'];
      }
    });
    return value;
  }

  calculateYValues(): void {
    this.minYValue = 0;
    this.maxYValue = 0;
    //Calculate Y values
    this.data.map( (ele) => {
      var ratings = ele['Ratings'];
      ratings.map( source => {
        if(source['Source'] === this.ratingType) {
          var value = this.convertToInt(source['Value']);
          if(this.minYValue === 0 || this.minYValue > value) {
            this.minYValue = value;
          }
          if(this.maxYValue === 0 || this.maxYValue < value) {
            this.maxYValue = value;
          }
          //this.yMAP[ele['Title']] = [value, source['Value']];
        }
      });
    });
  }

  calculateXValues(): void {
    this.data.map(ele =>{
      if(this.minXValue === 0 || this.minXValue > +ele.Year) {
        this.minXValue = +ele.Year;
      }
      if(this.maxXValue === 0 || this.maxXValue < +ele.Year) {
        this.maxXValue = +ele.Year;
      }
    });
  }

  ngOnInit(): void {
    this.calculateXValues();
    this.calculateYValues();
  }

}
