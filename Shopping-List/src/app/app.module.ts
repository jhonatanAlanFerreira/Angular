import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PrimeiroComponent } from './test/primeiro/primeiro.component';
import { SegundoComponent } from './test/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PrimeiroComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
