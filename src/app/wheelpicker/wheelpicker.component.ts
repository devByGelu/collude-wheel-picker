import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from './index';

@Component({
  selector: 'app-wheelpicker',
  templateUrl: './wheelpicker.component.html',
  styleUrls: ['./wheelpicker.component.scss'],
})
export class WheelpickerComponent implements OnInit {
  @Input() unit: undefined | string = undefined;
  @Input() options: Option[] = [];
  @Input() windowLength: number = 1;
  @Input() btnMargin = 10;
  selected: number = 0;
  showWindow: number[] = [];
  @Output() handleNewSelectedEvent = new EventEmitter<Option>();
  upBtnMargin: number = 0;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.windowLength; i++) this.showWindow.push(i);
    this.selected = Math.round((this.showWindow.length - 1) / 2);
  }

  handleClickPrevBtn() {
    const removed = this.options.shift();
    this.options = [...this.options, removed as Option];
    this.handleNewSelectedEvent.emit(this.options[this.selected]);
  }

  handleClickNextBtn() {
    const removed = this.options.pop();
    this.options = [removed as Option, ...this.options];
    this.handleNewSelectedEvent.emit(this.options[this.selected]);
  }
}
