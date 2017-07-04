import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import {Gist} from './gist';
import {gitHubService} from './gitHub.service';

@Component({
  selector: 'gist-list',
  templateUrl: './gist-list.component.html',
  styleUrls: ['./gist-list.component.scss']
})

export class GistList implements OnInit{

  arrayOfGists:Gist[];

  constructor(private GHService:gitHubService,private route:ActivatedRoute, private location:Location){}

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.GHService.getListofGists(params['nickname']))
      .subscribe(res => this.arrayOfGists = res);
  }

  goBack():void{
    this.location.back();
  }


}
