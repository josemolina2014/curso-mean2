import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.service';
import {ArtistService} from '../services/artist.service';
import {AlbumService} from '../services/album.service';
import {Artist} from '../models/artist';
import {Album} from '../models/album';

@Component ({
		selector: 'artist-detail',
		templateUrl: '../views/artist-detail.html',
		providers: [UserService,ArtistService,AlbumService]
	}) 

export class ArtistDetailComponent implements OnInit
{

	
	public artist: Artist;
	public albums: Album[];
	public identity;
	public token;
	public url;
	public alertMessage;
	

	constructor (
		private _route: ActivatedRoute,
		private _router : Router,
		private _userService: UserService,
		private _artistService: ArtistService,
		private _albumService: AlbumService
		
	){
		
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		
		

	}

	ngOnInit()
	{
		console.log('artist-detail.component.ts cargado');
		//llamar al metodo del api para sacar un artista en base a su id getArtist
		this.getArtist();

	}

	getArtist()
	{
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

		//this._artistService.getArtist();
	}

	

}
