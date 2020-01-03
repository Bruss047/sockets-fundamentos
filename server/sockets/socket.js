
    const{io}=require('../server');

//BackEnd

    io.on('connection',(client)=>{//se establece una comunicacion activo - activo entre ambos fronts.

    console.log('User conectado');

       client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'Bienvenido a esta app.'
    }) ;



        client.on('disconnect',()=>{
        console.log('User desconectado');
    });


    //Escuchar al cliente.

        client.on('enviarMensaje',(data,callback)=>{
        console.log(data);


        client.broadcast.emit('enviarMensaje',data);//'broadcast' envia mensaje a todos los usuarios conectados al servidor.

        // if(mensaje.usuario){
        //     callback({
        //         resp:'Todo salio Bien'//Envio la respuesta al Front.
        //     });
        // }else{
        //     callback({
        //         resp:'Todo salio Mal!!'
        //     });
        // }



    });

   
    


    

});