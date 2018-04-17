'use strict'

var express = require ('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middelwares/authenticate');

var multipart = require('connect-multiparty');

var md_upload = multipart({ uploadDir : './uploads/users '});

api.get('/probando-controlador', md_auth.ensureAuth,UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/loginUser', UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth,UserController.updateUser);
module.exports = api;