'use strict'

var express = require ('express');
var ALbumController = require('../controllers/album');
var api = express.Router();
var md_auth = require('../middelwares/authenticate');

var multipart = require('connect-multiparty');

var md_upload = multipart({ uploadDir : './uploads/album'});

api.get('/album/', md_auth.ensureAuth, ALbumController.getAlbum);

/*api.post('/artist', md_auth.ensureAuth, ArtistController.saveArtist);
api.get('/artists/:page?', md_auth.ensureAuth, ArtistController.getArtists);
api.put('/artist/:id', md_auth.ensureAuth, ArtistController.updateArtist);
api.delete('/artist/:id',md_auth.ensureAuth, ArtistController.deleteArtist);
api.post('/upload-image-artist/:id',[md_auth.ensureAuth, md_upload], ArtistController.uploadImage);
api.get('/get-image-artist/:imageFile',ArtistController.getImageFile);
*/

module.exports = api;

