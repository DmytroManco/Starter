﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
