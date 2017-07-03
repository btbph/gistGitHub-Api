import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {DetailGist} from './detail-gist.component';
import {GistList} from './gist-list.component'

import {gitHubService} from './gitHub.service';

import {AppRoutingModule} from './app-routing.module'

import {KeysPipe} from './KeysPipe'

@NgModule({
  declarations: [
    AppComponent,
    DetailGist,
    GistList,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [gitHubService, KeysPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
