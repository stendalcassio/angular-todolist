import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Input()
  textTitle: string = "";
  @Input()
  subtitleText: string = ""
  @Input()
  subtitleSpanText: string = "";
  @Input()
  labelText: string = ''
  @Input()
  labelFor: string = ''
  @Input()
  inputId: string = '';
  @Input()
  inputName: string = '';
  @Input()
  inputPlaceholder: string = '';
  @Input()
  inputType: string = '';
  @Input()
  buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
