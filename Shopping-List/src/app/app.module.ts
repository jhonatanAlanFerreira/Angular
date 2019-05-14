import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    ForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
