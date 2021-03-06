import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.service';
import {UploadService} from '../services/upload.service';
import {AlbumService} from '../services/album.service';

import {Artist} from '../models/artist';
import {Album} from '../models/album';


@Component ({
		selector: 'album-edit',
		templateUrl: '../views/album-add.html',
		providers: [UserService,AlbumService, UploadService]
	}) 

export class AlbumEditComponent implements OnInit{

	public titulo: string;
	public album: Album;
	public identity;
	public token;
	public url;
	public alertMessage;
	public is_edit;
	public filesToUpload: Array<File>;

	constructor (
		private _route: ActivatedRoute,
		private _router : Router,
		private _userService: UserService,		
		private _albumService: AlbumService,
		private _uploadService: UploadService
		
	){
		this.titulo = 'Editar Album';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.album = new Album('','',2018,'','');
		this.is_edit=true;
	}

	ngOnInit()
	{
		console.log('album-add.component.ts cargado');

		//conseguir el album
		this.getAlbum();
	}
	getAlbum(){

		this._route.params.forEach((params: Params) => {		
			let id = params['id'];
			this._albumService.getAlbum(this.token, id).subscribe(
				response => {
					if(!response.album){
						this._router.navigate(['/']);
					}else {
						this.album = response.album;	
					}
				},
				error => {
					var errorMessage = <any> error;
			        if(errorMessage !=null)
			        {
			        	var body = JSON.parse(error._body);			        	
			        	console.log(error);
			        }
				}
			);
		});
	}

	onSubmit()
	{	
		
		this._route.params.forEach((params: Params) => {				
		let id = params['id'];			
		
		this._albumService.editAlbum(this.token, id, this.album).subscribe(
				response => {				

					if(!response.album){
						this.alertMessage = 'Error en el servidor';
					}else {
						
						this.alertMessage = 'El album se ha actualizado correctamente!';

						if(!this.filesToUpload){							
							this._router.navigate(['/artista',response.album.artist]);
						} else {
							//subir la imagen del album						
							this._uploadService.makeFileRequest(this.url+'upload-image-album/'+id, [], this.filesToUpload, this.token, 'image')
								.then(
									(result) =>{
										console.log(this.album);
										this._router.navigate(['/artista',response.album.artist]);
									},
									(error) => {
										console.log(error);
									}

								);
						}
						
						

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

		});

	}


	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;


	}

}
