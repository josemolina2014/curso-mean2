import { Injectable } from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { User } from '../models/user';
import { GLOBAL} from './global';

@Injectable()
export class UserService {
	public url: string;

	constructor(
		//public http: HttpClient
		public _http: Http
		)
	{
		this.url = GLOBAL.url;
	}

	/*signup(user_to_login, gethash=null) : Observable<any>{

		if(gethash!=null){
			user_to_login.gethash = gethash;
		}

		let json = JSON.stringify(user_to_login);	
		//El backend recogerá un parametro json
       let params = "json="+json;
        
		//let headers = new Headers({'Content-Type':'application/json'});
		//let headers = new HttpHeaders().set('Content-Type','application/json');	
 		
 		//Establecemos cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		console.log(this.url+'login');
		return this.http.post(this.url+'login', params, {headers: headers});
					//.map(res => res.json());
		//return this.http.post(this.url+'productos', params, {headers: headers});
		
	}*/
signup2(userToLogin, getHash = null) 
{
    if (getHash != null) {
      userToLogin.gethash = getHash;
    } else {
      userToLogin.gethash = false;
    }

    console.log('userToLogin '+userToLogin);
    let json = JSON.stringify(userToLogin);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url + 'login', params, { headers: headers })
    	.map(res => res.json());
  }

}
