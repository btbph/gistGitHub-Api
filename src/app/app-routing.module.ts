import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {DetailGist} from './detail-gist.component'
import {GistList} from './gist-list.component'

const routes:Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home', component: GistList},
  {path:'detail/:id', component: DetailGist}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
