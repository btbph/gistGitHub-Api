import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {DetailGist} from './detail-gist.component';
import {GistList} from './gist-list.component';
import {NavigationComponent} from './navigation.component';

import {gitHubService} from './gitHub.service';

import {AppRoutingModule} from './app-routing.module';

import {KeysPipe} from './KeysPipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailGist,
    GistList,
    KeysPipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [gitHubService, KeysPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
