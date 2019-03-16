const express = require('express');

const app =  express();

const SokectIO = require('socket.io');

app.set('port', process.env.PORT || 3000);


const server = app.listen(app.get('port'),()=>{
    console.log('Server is Running...', app.get('port'))
});


const io = SokectIO(server);


io.on('connection',()=>{
    console.log('conexion ON')
});