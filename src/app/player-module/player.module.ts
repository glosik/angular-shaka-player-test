import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { ZoomTimelineComponent } from './zoom-timeline/zoom-timeline.component';
import { RawcasePipe } from '../shared/rawcase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ PlayerComponent, TimelineComponent, PlayerContainerComponent, ZoomTimelineComponent ],
  declarations: [PlayerComponent, TimelineComponent, PlayerContainerComponent, ZoomTimelineComponent, RawcasePipe ]
})

export class PlayerModule { }