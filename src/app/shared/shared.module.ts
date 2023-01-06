import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterButtonModule } from './components/twitter-button/twitter-button.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TwitterButtonModule
  ],
  exports: [
    TwitterButtonModule
  ]
})
export class SharedModule { }
