import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'th-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  rating: number;

  constructor() { }

  ngOnInit() {
  }

  
  counter(length){
    return new Array(length);
  }

}
