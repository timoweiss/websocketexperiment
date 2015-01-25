var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    port: 3000
});

var io = require("socket.io")(server.listener);


var onconnection = function(socket) {
    console.log(socket);

    socket.on('newclient', function(data) {
        socket.emit('newclient', data);
    });
};

io.on("connection", onconnection);

/*
    serve our static files
*/

server.route({
    path: "/{static*}",
    method: "GET",
    handler: {
        directory: {
            path: "./static"
        }
    }
});

server.start(function() {
    console.log("socket.io example @", server.info.uri);
});
