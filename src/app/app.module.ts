import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlayerModule } from './player-module/player.module';

import {AppComponent } from './app.component';

import { RawcasePipe } from './shared/rawcase.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PlayerModule ],
  declarations: [ AppComponent, RawcasePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
