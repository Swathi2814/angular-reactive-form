import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]


})
export class AppModule { }