import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterHeaderComponent } from './twitter-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TwitterHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TwitterHeaderComponent
  ]
})
export class TwitterHeaderModule { }
