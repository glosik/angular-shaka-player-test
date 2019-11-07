import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-zoom-timeline",
  templateUrl: "./zoom-timeline.component.html",
  styleUrls: ["./zoom-timeline.component.scss"]
})
export class ZoomTimelineComponent implements OnInit, AfterViewInit {
  @Output() jumpToFrame = new EventEmitter<number>();
  @ViewChild("canvas") canvas: ElementRef;
  private ctxEl;
  private ctx: CanvasRenderingContext2D;
  private ctxWidth = 500;
  private ctxHeight = 100;
  private ctxBgr = 'rgba(0, 0, 200, 0.1)';
  private ctxFgr = 'rgba(0, 0, 200, 0.4)';
  private duration = 60; // seconds

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // Capture canvas
    this.ctxEl = this.canvas.nativeElement;
    this.ctx = this.ctxEl.getContext("2d");   

    // Draw elements
    this.drawBackdrop();
    this.drawGrid(5);
  }

  private drawStop(){
    
  }

  private moveToFrame(event: MouseEvent): void {    
    let canvasMouseX = event.x - this.ctxEl.getBoundingClientRect().x;
    let scaledSeconds  = Math.round(canvasMouseX/(this.ctxWidth/this.duration));
    console.log('click', Math.round(scaledSeconds) );
    this.jumpToFrame.emit(scaledSeconds);
  }

  private drawBackdrop():void {
    this.ctx.fillStyle = this.ctxBgr;
    this.ctx.fillRect(0, 0, this.ctxWidth, this.ctxHeight);
  }

  private drawGrid(num:number): void {
    this.ctx.lineWidth = .5;
    for (var i = 0; i < num; i++) {
      this.ctx.strokeStyle = this.ctxFgr;
      this.ctx.beginPath();
      this.ctx.moveTo(0 + i * (this.ctxWidth/4), 0);
      this.ctx.lineTo(0 + i * (this.ctxWidth/4), this.ctxHeight);
      this.ctx.stroke();
    }
  }
}
