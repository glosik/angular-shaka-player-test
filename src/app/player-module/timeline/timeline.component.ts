import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Keyframeinstance } from '../shared/keyframeinstance';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Output() frameEmitter = new EventEmitter<number>();
  @Input()keyframeInstances:Array<Keyframeinstance>;

  svgHeight = 30;
  svgWidth = 60;

  constructor() { }

  ngOnInit() {
  }

  getFrame(frame: number) {
    this.frameEmitter.emit(frame);
  }

}