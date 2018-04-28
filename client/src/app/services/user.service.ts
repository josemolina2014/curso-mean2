import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL} from './global';

@Injectable()
export class UserService {
	public url: string;
	public identity;
	public token;

	constructor(		
		public _http: Http
		)
	{
		this.url = GLOBAL.url;
	}

	
	signup(userToLogin, getHash = null) 
	{
	    if (getHash != null) {
	      userToLogin.gethash = getHash;
	    } else {
	      userToLogin.gethash = false;
	    }    
	    let json = JSON.stringify(userToLogin);
	    let params = json;

	    let headers = new Headers({'Content-Type':'application/json'});
	    return this._http.post(this.url + 'login', params, { headers: headers })
	    	.map(res => res.json());
	}

	getIdentity()
	{		
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity != 'undefined'){
			this.identity = identity;
		}else{
			this.identity = null;
		}
		return this.identity;
	}

	getToken()
	{
		let token = JSON.parse(localStorage.getItem('token'));

		if(token != 'undefined')
		{
			this.token = token;
		}else{
			this.token = null;
		}
		return this.token;
	}

}
