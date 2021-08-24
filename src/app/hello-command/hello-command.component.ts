import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-command',
  templateUrl: './hello-command.component.html',
  styleUrls: ['./hello-command.component.scss']
})
export class HelloCommandComponent implements OnInit {
  citys = ["北京","上海","成都","曹县"];

  constructor() { }

  ngOnInit(): void {
  }

}
