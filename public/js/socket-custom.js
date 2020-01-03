
//FrontEnd

var socket=io();//"io" es el mismo objeto que tenemos en el server.
socket.on('connect',function(){

    console.log('Conectado al servidor'); //Nuestro Front va a estar pendiente de cualquier cambio que suceda en el Back.
});


//'on' son para escuchar.
socket.on('disconnect',function(){

console.log('Perdimos conexion con el servidor');
});

//'emit', son para emitir.
 socket.emit('enviarMensaje',{
     usuario:'Javier',
     mensaje:'Hola Mundo'
 },function(resp){//Recibo la respuesta desde el Servidor.
     console.log('Respuesta Servidor:',resp);
 });

 //Escuchar informacion.
 socket.on('enviarMensaje',function(mensaje){
    
    console.log('Info de servidor',mensaje);

});