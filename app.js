const path = require('path');
const express = require('express');

const SocketIO = require('socket.io');



const app = express();


//configuracion
app.set('port', process.env.PORT || 3000);

//Routers
app.use(require('./src/routes/apirestserver'));


//static files
app.use(express.static(path.join(__dirname,'public'))); 


const server = app.listen(app.get('port'),()=>{
    console.log('server ON ...',app.get('port'));
    console.log(path.join(__dirname,'public'))
});

const io = SocketIO(server);
var numConnet = 0;
io.on('connection',(socket)=>{
    console.log(socket.id)
    numConnet++;
    socket.on('noti',(data)=>{
        io.sockets.emit('mensaje',data);
    });

    io.sockets.emit('usuariosConectados', numConnet);


    socket.on('disconnect',()=>{
        numConnet--;
        io.sockets.emit('usuariosConectados',numConnet);
    });
});