import { Component, ContentChild, OnInit } from '@angular/core';
import { FlexDirectionDirective } from '../flex-direction.directive';

export enum FlexDirection {
  Column = 'column',
  Row = 'row'
}
@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.css']
})
export class FlexContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}