import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterHeaderComponent } from './features/home/components/twitter-header/twitter-header.component';
import { TwitterMainComponent } from './features/home/components/twitter-main/twitter-main.component';
import { HomeComponent } from './features/home/home.component';
import { HomeModule } from './features/home/home.module';
import { TwitterButtonComponent } from './shared/components/twitter-button/twitter-button.component';
import { SharedModule } from './shared/shared.module';
import { ConfigComponent } from './features/config/config.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
