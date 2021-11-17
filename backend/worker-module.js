var fs = require('fs');
var formidable = require('formidable');
var db = require('../db');

module.exports = function (app) {

    app.get('/allClients', function (req, res) {
        //lettura dei clients dal db

        res.writeHead(200);

        db.getClients().then(res => {
            console.log(res);

            for(let i in res) {
                console.log(res[i].name);
            }

            //res.write();
        });

	});

};
