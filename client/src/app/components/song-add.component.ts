import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.service';

import {Song} from '../models/song';

@Component ({
		selector: 'song-add',
		templateUrl: '../views/song-add.html',
		providers: [UserService]
	}) 

export class SongAddComponent implements OnInit{

	public titulo: string;
	public song: Song;
	public identity;
	public token;
	public url;
	public alertMessage;

	constructor (
		private _route: ActivatedRoute,
		private _router : Router,
		private _userService: UserService
		
	){
		this.titulo = 'Crear nueva canción';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.song = new Song(1,'','','','');

	}

	ngOnInit()
	{
		console.log('song-add.component.ts cargado');
	}

	onSubmit()
	{	
		
	

	

	this._route.params.forEach((params: Params) => {		
		let album_id = params['album'];
		this.song.album = album_id;

		console.log(this.song);
	});
/*
	this._albumService.addAlbum(this.token, this.album).subscribe(
			response => {				

				if(!response.album){
					this.alertMessage = 'Error en el servidor';
				}else {
					this.album = response.album;
					this.alertMessage = 'El album se ha creado correctamente!';
					this._router.navigate(['/editar-album', response.album._id]);
				}


			},
			error => {
				var errorMessage = <any> error;
		        if(errorMessage !=null)
		        {
		        	var body = JSON.parse(error._body);
		        	this.alertMessage = body.message;
		        	console.log(error);
		        }
			}
		);*/
	}

}
