import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import { PlayerComponent } from './player/player.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { RawcasePipe } from './shared/keyword.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PlayerComponent, TimelineComponent, PlayerContainerComponent, RawcasePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
