import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-command',
  templateUrl: './hello-command.component.html',
  styleUrls: ['./hello-command.component.scss']
})
export class HelloCommandComponent implements OnInit {
  citys = ["北京", "上海", "成都", "曹县"];
  people = [
    {id:1, name:"man"},
    {id:2, name:"luoQiang"},
    {id:3, name:"Vincent"}
  ];
  charScore = "A";

  constructor() { }

  ngOnInit(): void {
  }

}
