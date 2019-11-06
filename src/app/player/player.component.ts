import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as shaka from 'shaka-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit, OnInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef;
  private _moment = '';

  @Input()
  set moment(frame: any) {
    this._moment = frame;
    console.log(this._moment);
    if(this._moment){
      this.jumpToFrame( this._moment);
    }    
  }

  get moment(): any { return this._moment; }
  
  videoElement: HTMLVideoElement;
  player;

  manifestUri =  'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

  ngOnInit() {
    // this.moment = 0;
  }

  ngAfterViewInit() {
    
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.videoElement = this.videoElementRef.nativeElement;
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  jumpToFrame(time: any){
    this.videoElement.currentTime = time;
    // this.videoElement.play();
  }

  private initPlayer() {
    // Create a Player instance.
    // var video = document.getElementById('video');
    this.player = new shaka.Player(this.videoElement);
    // Attach player to the window to make it easy to access in the JS console.
    // window.player = player;

    // Listen for error events.
    this.player.addEventListener('error', this.onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    this.player.load(this.manifestUri).then(() => {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    }).catch(this.onError);  // onError is executed if the asynchronous load fails.
  }

  private onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  private onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  }

}