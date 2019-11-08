import { Component, OnInit } from '@angular/core';
import { keys } from '../../shared/const';
import * as utilities from '../../shared/utilities'
@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  frame;

  keywords = [20,30,55];

  constructor(){}

  ngOnInit():void {
    this.keywords = keys;
  }

  setFrame(event){
    this.frame = event;
    console.log('uti', utilities.makeTime(event));
  }
}