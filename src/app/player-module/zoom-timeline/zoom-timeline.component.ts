import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, NgZone } from "@angular/core";
import { Subject, fromEvent, Subscription } from "rxjs";
import * as utilities from '../../shared/utilities';

@Component({
  selector: "app-zoom-timeline",
  templateUrl: "./zoom-timeline.component.html",
  styleUrls: ["./zoom-timeline.component.scss"]
})
export class ZoomTimelineComponent implements OnDestroy, AfterViewInit {
  @Output() jumpToFrame = new EventEmitter<number>();
  @ViewChild("canvas") canvas: ElementRef;
  hovering = new Subject();
  sub: Subscription;
  hov = null;
  private ctxEl;
  private ctx: CanvasRenderingContext2D;
  private ctxWidth = 500;
  private ctxHeight = 100;
  private ctxBgr = 'rgba(0, 0, 200, 0.1)';
  private ctxFgr = 'rgba(0, 0, 200, 0.4)';
  private duration = 60; // seconds // make as @Input
  private canvasLeftOffset;

  constructor() { } 

  ngAfterViewInit() {
    // Capture canvas
    this.ctxEl = this.canvas.nativeElement;
    this.canvasLeftOffset = this.ctxEl.getBoundingClientRect().x;
    this.ctx = this.ctxEl.getContext("2d");

    // Render all hover elements here
    this.sub = fromEvent(this.ctxEl, 'mousemove'
    ).subscribe((e: MouseEvent) => {
      let hoverPosition = Math.round(e.pageX - this.canvasLeftOffset);              
              this.clearCanvas();
              this.moveMarkerLine(hoverPosition); 

    });
    // Draw elements
    this.drawCanvas();
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

   private moveMarkerLine(hoverPosition){
     let sec = Math.round(hoverPosition / (this.ctxWidth / this.duration));
        this.ctx.fillStyle = this.ctxFgr;
        this.ctx.fillRect(hoverPosition, 2, 1, this.ctxHeight);
        this.ctx.fillStyle = this.ctxBgr;
        this.ctx.fillRect(hoverPosition - 18, 0, 40, 15);
        this.ctx.fillStyle = '#000';        
        this.ctx.fillText(utilities.makeTime(sec), hoverPosition - 18, 10);
    }

  private clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctxWidth, this.ctxHeight);
    this.drawCanvas();
  }

  private drawCanvas() {
    this.drawBackdrop();
    this.drawGrid(5);
  }
  // Tracking hovering states
  private hover(event) {
    this.hovering.next(true);
    this.hov = true;
    // console.log('hover', event.x);
  }
  // Tracking hovering states
  private nothover() {
    this.clearCanvas();
    this.hovering.next(false);
    this.hov = false;
  }
  // Tracking hovering states
  private ova(event) {
    // console.log('ova', event.x);
  }


  private moveToFrame(event: MouseEvent): void {
    let canvasMouseX = event.x - this.canvasLeftOffset;
    let scaledSeconds = Math.round(canvasMouseX / (this.ctxWidth / this.duration));
    console.log('click', Math.round(scaledSeconds));
    this.jumpToFrame.emit(scaledSeconds);
  }

  private drawBackdrop(): void {
    this.ctx.fillStyle = this.ctxBgr;
    this.ctx.fillRect(0, 0, this.ctxWidth, this.ctxHeight);
  }

  private drawGrid(num: number): void {
    this.ctx.lineWidth = .5;
    for (var i = 0; i < num; i++) {
      this.ctx.strokeStyle = this.ctxFgr;
      this.ctx.beginPath();
      this.ctx.moveTo(0 + i * (this.ctxWidth / 4), 0);
      this.ctx.lineTo(0 + i * (this.ctxWidth / 4), this.ctxHeight);
      this.ctx.stroke();
    }
  }

  scaleToWidth(sec) {
    // return parseInt(this.ctxWidth/this.props.time_markers.length_seconds*sec,10);
  }

  scaleToWidthChapterZoom(sec, ch_start, ch_end) {
    // return parseInt(this.ctxWidth/(ch_end-ch_start)*(sec-ch_start),10);
  }



}
