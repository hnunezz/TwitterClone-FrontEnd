import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterHeaderComponent } from './twitter-header.component';

@NgModule({
  declarations: [
    TwitterHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterHeaderComponent
  ]
})
export class TwitterHeaderModule { }
