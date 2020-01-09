
//FrontEnd

var socket=io();//"io" es el mismo objeto que tenemos en el server.

var params= new URLSearchParams(window.location.search);

if(!params.has('nombre') || !params.has('sala')){

    window.location='index.html';
    throw new Error ('El nombre y Sala son necesarios');
}

var usuario= {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};




socket.on('connect',function(){

    console.log('Conectado al servidor'); //Nuestro Front va a estar pendiente de cualquier cambio que suceda en el Back.
    socket.emit('entrarChat',usuario,function(resp){
    console.log('Usuarios conectados',resp);

    });
});


//'on' son para escuchar.
socket.on('disconnect',function(){

console.log('Perdimos conexion con el servidor');
});

//'emit', son para emitir.
//  socket.emit('enviarMensaje',{
//      usuario:'Javier',
//      mensaje:'Hola Mundo'
//  },function(resp){//Recibo la respuesta desde el Servidor.
//      console.log('Respuesta Servidor:',resp);
//  });

 //Escuchar informacion.
 socket.on('crearMensaje',function(mensaje){
    
    console.log('Info de servidor',mensaje);
   
    
});

//Esuchar cuando un usuario entra o sale del chat.

socket.on('listaPersona',function(personas){
    
    console.log(personas);
   
    
});


//Mensajes Privados
socket.on('mensajePrivado',function(mensaje){
    
    console.log('Mensaje Privado:',mensaje);
   
    
});
