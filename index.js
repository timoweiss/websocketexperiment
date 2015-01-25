var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    port: 3000
});

var io = require("socket.io")(server.listener);


var onconnection = function(socket) {
    console.log("new connection");

    socket.on('newclient', function(data) {
        console.log('new client', data);
        io.emit('newmobileclient', data);
        socket.on('newchoords', function(data) {
            io.emit('test', data);
        });
    });
};
io.on('newchoords', function(data) {
    io.emit('test', data);
});
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
