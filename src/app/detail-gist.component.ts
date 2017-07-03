import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,} from '@angular/router'
import {Location} from '@angular/common'


import {Gist} from './gist'
import {gitHubService} from './gitHub.service'

import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'detail',
  templateUrl: './detail-gist.component.html'
  //styleUrls: ['./app.component.css']
})

export class DetailGist implements OnInit{
  exampleOfGist:Gist;
  nameOfFile: string[];

  constructor(private GHService:gitHubService,private route:ActivatedRoute,private location:Location){}

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.GHService.getDetailGist(params['id']))
      .subscribe(res => this.exampleOfGist = res);
    //this.showAllFiles();
  }

  // showAllFiles():void
  // {
  //   for(let to in this.exampleOfGist.files)
  //   {
  //     this.nameOfFile.push(to);
  //   }
  //
  // }

}
