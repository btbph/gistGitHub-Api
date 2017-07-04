import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent{
  nickname:string;

  constructor(private router:Router){}

  goToList(){
    this.router.navigate(['list',this.nickname]);
  }
}
