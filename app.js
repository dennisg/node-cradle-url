

var cradle = require('./lib/main.js');

var URL = process.argv[2];

var db = cradle.connect(URL);
db.info(function(err, res){
	console.log(JSON.stringify(res));
});