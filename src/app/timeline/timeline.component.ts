import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Output() frameEmitter = new EventEmitter<number>();
  

  @Input()keyframeInstances;

  constructor() { }

  ngOnInit() {
    console.log(this.keyframeInstances);
  }

  getFrame(frame) {
    console.log('Timeframe', frame);
    this.frameEmitter.emit(frame);
  }

}