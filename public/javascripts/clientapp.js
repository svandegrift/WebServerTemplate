var socket = io.connect();
  socket.on('server', function(data){
    console.log('connected to server');
  });
  socket.emit('client');