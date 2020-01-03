const express = require('express');
const socketIO=require('socket.io');
const http=require('http');

const path = require('path');

const app = express(); //Express esta basado en la libreria base de Node "http".
let server= http.createServer(app);//La configuracion es similar, por eso mismo podemos poner "app" directamente en el parametro
//de server.

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO= Esta es la comunicacion del backend.
module.exports.io= socketIO(server);//Modificaciones para INTEGRARLO con express. Exporto io a 'socket.j'
require('./sockets/socket');




server.listen(port, (err) => { //Cambio realizado por estar usando SocketIO.

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});