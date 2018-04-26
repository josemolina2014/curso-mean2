'use strict'

var express = require ('express');
var SongController = require('../controllers/song');
var api = express.Router();
var md_auth = require('../middelwares/authenticate');

var multipart = require('connect-multiparty');

var md_upload = multipart({ uploadDir : './uploads/songs'});

api.get('/song/:id', md_auth.ensureAuth, SongController.getSong);
api.post('/song', md_auth.ensureAuth, SongController.saveSong);
api.get('/songs/:album?', md_auth.ensureAuth, SongController.getSongs);
/*api.put('/album/:id', md_auth.ensureAuth, AlbumController.updateAlbum);
api.delete('/album/:id',md_auth.ensureAuth, AlbumController.deleteAlbum);
api.post('/upload-image-album/:id',[md_auth.ensureAuth, md_upload], AlbumController.uploadImage);
api.get('/get-image-album/:imageFile',AlbumController.getImageFile);
*/
module.exports = api;

