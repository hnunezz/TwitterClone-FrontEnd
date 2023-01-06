import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterButtonComponent } from './twitter-button.component';



@NgModule({
  declarations: [
    TwitterButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwitterButtonModule { }
