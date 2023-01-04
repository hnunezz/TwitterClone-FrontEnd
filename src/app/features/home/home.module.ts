import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TwitterMainComponent } from './components/twitter-main/twitter-main.component';
import { TwitterHeaderComponent } from './components/twitter-header/twitter-header.component';
import { FormsModule } from '@angular/forms';
import { TwitterMainModule } from './components/twitter-main/twitter-main.module';
import { TwitterHeaderModule } from './components/twitter-header/twitter-header.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TwitterMainModule,
    TwitterHeaderModule
  ],
  exports: [
    TwitterMainModule,
    TwitterHeaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
