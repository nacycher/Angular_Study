// 引用angular核心包的compent
import { Component } from '@angular/core';

/**
 * 定义组件模板有两个方式：
 * 1.templatelateUrl引用一个html文件
 * 2.使用template+Es6的模板字符串
 */

/**
 * 定义组件样式有两种方式：
 * 1.使用styleUrls应用css文件
 * 2.使用styles+ES6的模板字符串
 */

// angular的注解 在es7中是装饰器
@Component({
  selector: 'app-root', // 当前组件的引用地址，渲染到相应的html
  templateUrl: './app.component.html',// 组件模板
  // template:  `Hello Es6的模板字符串`,
  // template: `<h1>Hello Es6的模板字符串 {{title}}</h1>`,
  // styleUrls: ['./app.component.scss']// 组件的样式文件
  styles: [
    `h1 {
      color : blue
    }
    `
  ]
})
export class AppComponent {// 对外导入的组件名称
  title = 'hello world angular app !!!!!';
}
