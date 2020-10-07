let socket = io();
socket.on('connect', function() {
    console.log('Connect server');
});

// On escuchar informacion
socket.on('disconnect', function() {
    console.log('Lost connection with the server');
});

// Emit Enviar informacion
socket.emit('sendMessage', {
    user: 'Richard',
    mesagge: 'Hello'
}, function(message) {
    console.log(message);
});

socket.on('sendMessage', function(mesagge) {
    console.log(mesagge);
});