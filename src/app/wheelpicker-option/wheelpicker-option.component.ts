import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../wheelpicker/index';

@Component({
  selector: 'app-wheelpicker-option',
  templateUrl: './wheelpicker-option.component.html',
  styleUrls: ['./wheelpicker-option.component.scss'],
})
export class WheelpickerOptionComponent implements OnInit {
  @Input() value: any = '';
  @Input() isSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

}
