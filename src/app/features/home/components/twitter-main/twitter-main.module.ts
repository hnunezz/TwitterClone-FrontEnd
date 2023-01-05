import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterHeaderComponent } from '../twitter-header/twitter-header.component';
import { TwitterMainComponent } from './twitter-main.component';
import { TrendingComponent } from './trending/trending.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

@NgModule({
  declarations: [
    TwitterMainComponent,
    TrendingComponent,
    TwitterTimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterMainComponent
  ]
})
export class TwitterMainModule { }
