const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connect');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome'
    });

    client.on('disconnect', () => {
        console.log('User disconnect');
    });

    // Escuchar cliente
    client.on('sendMessage', (data, callback) => {
        console.log(data);
        // broadcast envia mensaje a todos 
        client.broadcast.emit('sendMessage', data);

        // if (message.user) {
        //     callback({
        //         resp: 'OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'Fail'
        //     })
        // }
    });

});