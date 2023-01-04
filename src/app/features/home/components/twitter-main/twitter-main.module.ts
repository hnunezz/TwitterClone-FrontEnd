import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterHeaderComponent } from '../twitter-header/twitter-header.component';
import { TwitterMainComponent } from './twitter-main.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    TwitterMainComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterMainComponent
  ]
})
export class TwitterMainModule { }
