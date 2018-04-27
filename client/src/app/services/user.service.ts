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

	signup(){
		return 'Hola mundo desde el servicio';
	}
}
