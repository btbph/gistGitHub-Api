import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {DetailGist} from './detail-gist.component'
import {GistList} from './gist-list.component'
import {NavigationComponent} from './navigation.component'

const routes:Routes = [
  {path:'',redirectTo:'/navigation',pathMatch: 'full'},
  {path:'list/:nickname', component: GistList},
  {path:'detail/:id', component: DetailGist},
  {path:'navigation',component: NavigationComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
