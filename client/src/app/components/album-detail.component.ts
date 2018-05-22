import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.service';

import {AlbumService} from '../services/album.service';
import {Artist} from '../models/artist';
import {Album} from '../models/album';

@Component ({
		selector: 'album-detail',
		templateUrl: '../views/album-detail.html',
		providers: [UserService,AlbumService]
	}) 

export class AlbumDetailComponent implements OnInit
{
	public album : Album;
	public albums: Album[];
	public identity;
	public token;
	public url;
	public alertMessage;
	public confirmado;	

	constructor (
		private _route: ActivatedRoute,
		private _router : Router,
		private _userService: UserService,
		private _albumService: AlbumService
		
	){
		
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		
		

	}

	ngOnInit()
	{
		console.log('album-detail.component.ts cargado');
		//sacar album de la bd
		this.getAlbum();

	}

	getAlbum()
	{

		console.log("el metodo funciona");
		/*
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this._artistService.getArtist(this.token, id).subscribe (
				response=> {					

					if(!response.artist){
						this._router.navigate(['/']);						
					}
					else {
						this.artist = response.artist;	
						
						//sacar los albums de la lista	
						this._albumService.getAlbums(this.token, response.artist._id).subscribe(
							response=> {
								

								if(!response.albums){
									this.alertMessage = 'Este artista no tiene albums';
								}else {
									this.albums = response.albums;
								}

							},

							error=> {
								var errorMessage = <any> error;
						        if(errorMessage !=null)
						        {
						        	var body = JSON.parse(error._body);
						        	//this.alertMessage = body.message;
						        	console.log(error);
						        }
							}
						);		
							
					}

				},
				error=> {
					var errorMessage = <any> error;
			        if(errorMessage !=null)
			        {
			        	var body = JSON.parse(error._body);
			        	this.alertMessage = body.message;
			        	console.log(error);
			        }
				}
				);
		});	
		*/	
	}
/*
	onDeleteConfirm(id){
		this.confirmado = id;
	}

	onCancelAlbum(){
		this.confirmado = null;
	}

	onDeleteAlbum(id){
		this._albumService.deleteAlbum(this.token, id).subscribe(
			response=> {
				if(!response.album){
					alert('Error en el servidor');
				}
				this.getArtist();
			},

			error=> {
				var errorMessage = <any> error;
		        if(errorMessage !=null)
		        {
		        	var body = JSON.parse(error._body);
		        	//this.alertMessage = body.message;
		        	console.log(error);
		        }
			}
		);
	}
	*/
}
