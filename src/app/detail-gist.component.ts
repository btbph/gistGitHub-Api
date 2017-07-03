import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,} from '@angular/router'
import {Location} from '@angular/common'


import {Gist} from './gist'
import {gitHubService} from './gitHub.service'

import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'detail',
  templateUrl: './detail-gist.component.html',
  styleUrls: ['./detail-gist.component.scss']
})

export class DetailGist implements OnInit{
  exampleOfGist:Gist;

  constructor(private GHService:gitHubService,private route:ActivatedRoute,private location:Location){}

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.GHService.getDetailGist(params['id']))
      .subscribe(res => this.exampleOfGist = res);
  }

  goBack():void{
    this.location.back();
  }


}
