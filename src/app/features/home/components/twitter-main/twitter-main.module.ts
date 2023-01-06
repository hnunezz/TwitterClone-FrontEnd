import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterHeaderComponent } from '../twitter-header/twitter-header.component';
import { TwitterMainComponent } from './twitter-main.component';
import { TrendingComponent } from './trending/trending.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HomeModule } from '../../home.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TwitterMainComponent,
    TrendingComponent,
    TwitterTimelineComponent
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
