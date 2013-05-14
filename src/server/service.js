var http = require('http');


exports.start = function (req, res) {
	var file = req.query['file'];
	var project = req.query['project'];

	if (req.query['permissions'] === 'accept') {
		var options = {
		    host: 'localhost',
		    port: 3000,
		    path: '/hello?port=8002&permissions=accept&host=localhost&projectid='+project+'&file='+file,
		    method: 'GET',
		    headers: {
		    }
		};
	}
	else {
		var options = {
		    host: 'localhost',
		    port: 3000,
		    path: '/hello?port=8002&host=localhost&projectid='+project+'&file='+file,
		    method: 'GET',
		    headers: {
		    }
		};
	}
	console.log("Start");
	var x = http.get(options,function(response){
		var data = "";
	    console.log("Connected");
	    response.on('data',function(chunk){
	    	data += chunk;
	    });
	    response.on('end',function(){
	        console.log(data);
        	res.send(data);
	    });
	});
	x.end();
}

exports.stop = function (req, res) {
	res.end();
}