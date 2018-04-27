import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from './global';

@Injectable()
export class UserService {
	public url: string;

	constructor(
		public http: HttpClient
		)
	{
		this.url = GLOBAL.url;
	}

	signup(user_to_login, gethash=null){

		if(gethash!=null){
			user_to_login.gethash = gethash;
		}

		let json = JSON.stringify(user_to_login);	
		let params = json;

		let headers = new HttpHeaders().set('Content-Type','application/json');	

		return this.http.post(this.url+'login', params, {headers: headers})
					.map(res => res.json());
		//return this.http.post(this.url+'productos', params, {headers: headers});
		
	}
}
