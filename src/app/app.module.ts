import { Injectable, NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheelpickerComponent } from './wheelpicker/wheelpicker.component';
import { WheelpickerOptionComponent } from './wheelpicker-option/wheelpicker-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HammerModule } from '../../node_modules/@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 100 },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
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
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
