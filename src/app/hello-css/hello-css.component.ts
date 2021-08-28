import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-css',
  templateUrl: './hello-css.component.html',
  styleUrls: ['./hello-css.component.scss']
})
export class HelloCssComponent implements OnInit {
  cssObject = {'color': 'red','font-size':'30px'};


  constructor() { }

  ngOnInit(): void {
  }

}
