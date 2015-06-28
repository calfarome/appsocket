// Cargamos módulos Node y creamos aplicación, servidor y sockets
var express=require('express'),
app=express(),
server=require('http').createServer(app),
io=require('socket.io').listen(server);

server.listen(3000);
app.get('/', function(req, res){
	res.sendfile(__dirname +'/index.html');
});

//  Configuramos Socket.IO para estar a la escucha de
//  nuevas conexiones.
 

io.sockets.on('connection', function(socket){
	socket.on('mycoordinada', function(data){
		console.log(data);
		socket.broadcast.emit('cooruser',data);
	});
});
//  “Node Package Manager” NPM, administrador de dependencias o módulos