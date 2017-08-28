import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InputFileModule} from '../DopplerEffectModules/module-input-file/input-file.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputFileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
