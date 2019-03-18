const path = require('path');
const express = require('express');

const SocketIO = require('socket.io');



const app = express();


//configuracion

app.set('port', process.env.PORT || 3000);


//static files
app.use(express.static(path.join(__dirname,'public')));


const server = app.listen(app.get('port'),()=>{
    console.log('server ON ...',app.get('port'));
    console.log(path.join(__dirname,'public'))
});

const io = SocketIO(server);

io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('noti',(data)=>{
        io.sockets.emit('mensaje',data);
    });
});