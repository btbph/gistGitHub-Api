import { Component, OnInit } from '@angular/core';
import {Gist} from './gist'
import {gitHubService} from './gitHub.service'

@Component({
  selector: 'gist-list',
  templateUrl: './gist-list.component.html',
  styleUrls: ['./app.component.css']
})

export class GistList implements OnInit{

  arrayOfGists:Gist[];

  constructor(private GHService:gitHubService){}

  ngOnInit():void{
    this.GHService.getListofGists().then(res => this.arrayOfGists = res);
  }



}
