import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TrendingComponent } from './trending/trending.component';
import { TwitterMainComponent } from './twitter-main.component';
import { TweetComponent } from './twitter-timeline/tweet/tweet.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

@NgModule({
  declarations: [
    TwitterMainComponent,
    TrendingComponent,
    TwitterTimelineComponent,
    TweetComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TwitterMainComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwitterMainModule { }
