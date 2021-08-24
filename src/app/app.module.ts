import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 在模块中引入组件
import { HelloWorldComponent } from './helloworld.component';
import { HelloCommandComponent } from './hello-command/hello-command.component';
@NgModule({
  // 使用组件时必须先声明
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
