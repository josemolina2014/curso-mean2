'use strict'

var express = require ('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../midelwares/authenticate');
api.get('/probando-controlador', md_auth.ensureAuth,UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/loginUser', UserController.loginUser);

module.exports = api;