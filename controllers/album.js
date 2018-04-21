'use strict'

var path 	= require('path');
var fs 		= require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Artist 	= require('../models/artist');
var Album 	= require('../models/album');
var Song 	= require('../models/song');

function getAlbum(req, res) 
{
	/*var artistId = req.params.id;

	Artist.findById(artistId, (err, artist) => 
		{
			if (err) {
				res.status(500).send({message : 'Error en la petición'});
			} 
			else 
			{
				if (!artist) {
					res.status(400).send({message : 'El artista no existe'});
				} else {
					res.status(200).send({artist});
				}

			}

		});*/

	res.status(200).send({message : 'Método getAlbum del controlador album.js'});	
}


function saveAlbum(req,res) 
{
	var album = new Album();

	var params = req.body;
	album.title = params.tile;
	album.description = params.description;
	album.year = params.year;
	album.image = 'null';
	album.artitst = params.artist;

	album.save((err,albumStored) => 
	{

		if (err) 
			{
				res.status(500).send({message: 'Error en el servidor'});
			} else 
			{
				if (!albumStored) 
					{
						res.status(404).send({message : 'No se ha guardado el album'});
					} else {
						res.status(200).send({album: albumStored});
					}

			}
	});



}

module.exports = {

	getAlbum,
	saveAlbum
} 
