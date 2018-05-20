import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.service';
import {ArtistService} from '../services/artist.service';
import {Artist} from '../models/artist';
import {Album} from '../models/album';

@Component ({
		selector: 'album-add',
		templateUrl: '../views/album-add.html',
		providers: [UserService,ArtistService]
	}) 

export class AlbumAddComponent implements OnInit{

	public titulo: string;
	public artist: Artist;
	public album: Album;
	public identity;
	public token;
	public url;
	public alertMessage;

	constructor (
		private _route: ActivatedRoute,
		private _router : Router,
		private _userService: UserService,
		private _artistService: ArtistService
	){
		this.titulo = 'Crear nuevo Album';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.album = new Album('','',2018,'','');

	}

	ngOnInit()
	{
		console.log('album-add.component.ts cargado');


		//conseguir el listado de artistas


	}

	onSubmit()
	{	
		
	this._route.params.forEach((params: Params) => {		
		let artist_id = params['artist'];
		this.album.artist = artist_id;
	});

	console.log(this.album);

/*
		
		this._artistService.addArtist(this.token, this.artist).subscribe(
			response => {				

				if(!response.artist){
					this.alertMessage = 'Error en el servidor';
				}else {
					this.artist = response.artist;
					this.alertMessage = 'El artista se ha creado correctamente!';
					this._router.navigate(['/editar-artista', response.artist._id]);
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
			);
			*/
	}

}
