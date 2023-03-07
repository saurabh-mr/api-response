import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './service/httpService';
import { StateTableComponent } from './utility-component/state-table/state-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StateTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
