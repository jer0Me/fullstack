import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  click: EventEmitter<MouseEvent>;

  constructor() {
    this.click = new EventEmitter();
  }

  ngOnInit() {
  }

}
