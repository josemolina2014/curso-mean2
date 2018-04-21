'use strict'

var express = require ('express');
var SongController = require('../controllers/song');
var api = express.Router();
var md_auth = require('../middelwares/authenticate');

var multipart = require('connect-multiparty');

var md_upload = multipart({ uploadDir : './uploads/songs'});

api.get('/song', md_auth.ensureAuth, SongController.getSong);
/*api.post('/album', md_auth.ensureAuth, AlbumController.saveAlbum);
api.get('/albums/:artist?', md_auth.ensureAuth, AlbumController.getAlbums);
api.put('/album/:id', md_auth.ensureAuth, AlbumController.updateAlbum);
api.delete('/album/:id',md_auth.ensureAuth, AlbumController.deleteAlbum);
api.post('/upload-image-album/:id',[md_auth.ensureAuth, md_upload], AlbumController.uploadImage);
api.get('/get-image-album/:imageFile',AlbumController.getImageFile);
*/
module.exports = api;

