import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Gist} from './gist';



@Injectable()
export class gitHubService{

  constructor(private http:Http){}

  getListofGists(nickname:string):Promise<Gist[]>
  {
    const url:string = `https://api.github.com/users/${nickname}/gists`;
    return this.http.get(url).toPromise().then(responce => responce.json()).catch(this.handleError);
  }

  getDetailGist(id:string):Promise<Gist>
  {
    const url:string =`https://api.github.com/gists/${id}`;
    return this.http.get(url).toPromise().then(responce => responce.json()).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
