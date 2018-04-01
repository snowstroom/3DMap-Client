import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Graph3dService } from './services/graph3d.service'

import { AppComponent } from './app.component';
import { Card3DComponent } from './card3-d/card3-d.component';

@NgModule({
  declarations: [
    AppComponent,
    Card3DComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Graph3dService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
