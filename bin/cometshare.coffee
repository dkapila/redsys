http = require('http');
faye = require('faye');
express = require('express');
app = express();


bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

server = http.createServer(app);
app.use(express.static('../public'));

bayeux.attach(server);
#server.listen(8002);
