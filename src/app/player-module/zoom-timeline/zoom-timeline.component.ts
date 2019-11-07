import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-zoom-timeline",
  templateUrl: "./zoom-timeline.component.html",
  styleUrls: ["./zoom-timeline.component.scss"]
})
export class ZoomTimelineComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const ctx = this.canvas.nativeElement.getContext("2d");
    ctx.fillStyle = "#fffddd";
    ctx.fillRect(10, 10, 300, 100);
  }
}
