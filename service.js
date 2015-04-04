var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'PASSWORD',
    server: 'SERVERNAME',
    database: 'LeagueApplication',
    
    options: {
		instanceName: 'SQLEXPRESS',
        //encrypt: true // Use this if you're on Windows Azure 
    }
}

var express = require('express');
var app = express();
 
app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
app.get('/lol', function(req, res) {
	var connection = new sql.Connection(config, function(err) {
		console.dir(err);
		// Query 
		var request = new sql.Request(connection); // or: var request = connection.request(); 
		request.query('SELECT * FROM Champions', function(err, recordset) {
			console.dir(recordset);
			res.send(recordset);
		});    
	});
});

app.listen(3000);