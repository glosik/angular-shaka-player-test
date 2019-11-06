import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PlayerContainerComponent } from './player-container/player-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ PlayerComponent, TimelineComponent, PlayerContainerComponent ],
  declarations: [PlayerComponent, TimelineComponent, PlayerContainerComponent ]
})
export class PlayerdModule { }