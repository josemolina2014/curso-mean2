import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL} from './global';
import {Artist} from '../models/artist';
import {Album} from '../models/album';

@Injectable()
export class AlbumService 
{
	public url: string;
	
	constructor(public _http: Http){
		this.url = GLOBAL.url;
	}

	

	getArtist(token, id:string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url+'artist/'+id, options)
						.map(res => res.json());
	}

	addAlbum(token, album: Album){

		let params = JSON.stringify(album);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		return this._http.post(this.url+'album', params, {headers:  headers})
					.map(res => res.json());
	}

	editArtist(token, id:string, artist: Artist){

		let params = JSON.stringify(artist);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		return this._http.put(this.url+'artist/'+id, params, {headers:  headers})
					.map(res => res.json());
	}

	deleteArtist(token, id:string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.delete(this.url+'artist/'+id, options)
						.map(res => res.json());
	}
}