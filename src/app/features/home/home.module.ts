import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { TwitterHeaderModule } from './components/twitter-header/twitter-header.module';
import { TwitterMainModule } from './components/twitter-main/twitter-main.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TwitterMainModule,
    TwitterHeaderModule,
  ],
  exports: [
    TwitterMainModule,
    TwitterHeaderModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
