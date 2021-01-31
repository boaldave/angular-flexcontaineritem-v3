import { Component, Input } from '@angular/core';
import { FlexDirection } from './flex-container/flex-container.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']

})
export class HelloComponent  {
  @Input() name: string;

  flexDirection = FlexDirection;
}