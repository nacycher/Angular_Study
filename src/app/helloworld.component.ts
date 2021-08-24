import { Component } from '@angular/core';

@Component({
    selector: 'helloworld',// 组件引用名
    template:`<h3>{{text}}</h3>`
})
export class HelloWorldComponent {// 当前组件名称
    constructor() { }
    text = "the first component";
}
