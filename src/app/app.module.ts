import { BrowserModule } from '@angular/platform-browser';
import { ServerService } from './services/server.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ServerRowComponent } from './components/server-row/server-row.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ServerRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
