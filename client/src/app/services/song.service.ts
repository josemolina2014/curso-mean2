import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL} from './global';

import {Song} from '../models/song';

@Injectable()
export class SongService 
{
	public url: string;
	
	constructor(public _http: Http){
		this.url = GLOBAL.url;
	}

	/*getAlbums(token, artistId=null){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		let options = new RequestOptions({headers: headers});

		if(artistId == null){
			return this._http.get(this.url+'albums', options)
						.map(res => res.json());
		}
		else{
			return this._http.get(this.url+'albums/'+artistId, options)
						.map(res => res.json());
		}


		
	}
*/
	getSong(token, id:string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url+'song/'+id, options)
						.map(res => res.json());
	}

	addSong(token, song: Song){

		let params = JSON.stringify(song);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		return this._http.post(this.url+'song', params, {headers:  headers})
					.map(res => res.json());
	}

	editSong(token, id:string, song: Song){

		let params = JSON.stringify(song);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		return this._http.put(this.url+'song/'+id, params, {headers:  headers})
					.map(res => res.json());
	}

/*	deleteAlbum(token, id:string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization' : token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.delete(this.url+'album/'+id, options)
						.map(res => res.json());
	}
	*/
}