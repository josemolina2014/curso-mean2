'use strict'

function pruebas(req, res) {
	res.status(200).send({

		message : 'Probando controlador de usuario'
	});
}

module.exports = {
	pruebas 
};