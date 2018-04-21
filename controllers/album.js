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

module.exports = {

	getAlbum
} 
