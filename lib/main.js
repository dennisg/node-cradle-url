

var cradle = require('cradle');
var url = require('url');


var connect = function(u) {
	var options = url.parse(u);
	
	if (options.auth) {
		var auth = options.auth.split(':'); 
		options.auth = {username: auth[0], password: auth[1] };
	}
	console.log(JSON.stringify(options));
	var connection = new(cradle.Connection)(options.protocol + '//' + options.hostname, options.port, {
	      auth: options.auth
	  });
	
	return connection.database(options.path.substring(1));
};

module.exports = {
	connect : connect
}