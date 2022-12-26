import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TwitterMainComponent } from './components/twitter-main/twitter-main.component';
import { TwitterHeaderComponent } from './components/twitter-header/twitter-header.component';


@NgModule({
  declarations: [
    TwitterMainComponent,
    TwitterHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    TwitterMainComponent,
    TwitterHeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
