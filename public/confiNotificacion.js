var socket = io();

var button = document.getElementById('send');

button.addEventListener('click',()=>{
    console.log('funciona el click')
    socket.emit('noti',{
        message: 'notificacion'
    });
})


socket.on('mensaje',(data)=>{
    console.log(data.message)
});

