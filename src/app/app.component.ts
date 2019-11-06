import { Component } from '@angular/core';
import { keys } from './const';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  frame;

  keywords = [20,30,55];

  setFrame(event){
    console.log('Frame in parent', event);
    this.frame = event;
  }
}
