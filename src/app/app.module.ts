import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheelpickerComponent } from './wheelpicker/wheelpicker.component';
import { WheelpickerOptionComponent } from './wheelpicker-option/wheelpicker-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HammerModule } from '../../node_modules/@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: { direction: Hammer.DIRECTION_VERTICAL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    WheelpickerComponent,
    WheelpickerOptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
