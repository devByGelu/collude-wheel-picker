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

  goUp(n: number) {
    for (let i = 0; i < n; i++) {
      const removed = this.options.pop();
      this.options = [removed as Option, ...this.options];
    }
  }
  goDown(n: number) {
    for (let i = 0; i < n; i++) {
      const removed = this.options.shift();
      this.options = [...this.options, removed as Option];
    }
  }

  // When user clicks an option, he intends to skip to that option
  handleSkip(to: number) {
    const validSkip = to !== this.selected;
    if (validSkip) {
      const skippingDown = to > this.selected;
      if (skippingDown) {
        this.goDown(to - this.selected);
      } else {
        this.goUp(this.selected - to);
      }
    }
    this.handleNewSelectedEvent.emit(this.options[this.selected]);
  }

  handleClickUpBtn() {
    this.goUp(1);
    this.handleNewSelectedEvent.emit(this.options[this.selected]);
  }

  handleClickDownBtn() {
    this.goDown(1);
    this.handleNewSelectedEvent.emit(this.options[this.selected]);
  }

  handleWheel(event: WheelEvent) {
    const scrolledUp = event.deltaY < 0;
    if (scrolledUp) this.handleClickDownBtn();
    else this.handleClickUpBtn();
  }
}
