import { Component } from '@angular/core';
import { Option } from './wheelpicker/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options = [
    { value: 'tacos-1', viewValue: 'Tacos1' },
    { value: 'tacos-2', viewValue: 'Tacos2' },
    { value: 'tacos-3', viewValue: 'Tacos3' },
    { value: 'tacos-4', viewValue: 'Tacos4' },
    { value: 'tacos-5', viewValue: 'Tacos5' },
  ];
  unit = 'day';
  title = 'wheel-picker';
  windowLength = 5;

  selectedChanged(selected: Option) {
    console.log(selected);
  }
}
