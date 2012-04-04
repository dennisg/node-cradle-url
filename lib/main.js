

var cradle = require('cradle');
var url = require('url');


var connect = function(u) {
	var options = url.parse(u);
	
	if (options.auth) {
		var auth = options.auth.split(':'); 
		options.auth = {username: auth[0], password: auth[1] };
	}
	if (options.protocol.indexOf('https')) {
		options.secure = true;
		options.port = options.port || 443;
	} else {
		options.secure = false;
		options.port = options.port || 80;
	}
	var connection = new(cradle.Connection)(options.protocol + '//' + options.hostname, options.port, {
	      auth: options.auth, secure : options.secure
	  });
	
	return connection.database(options.path.substring(1));
};

module.exports = {
	connect : connect
}