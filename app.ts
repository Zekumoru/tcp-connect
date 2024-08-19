// TCP Server
import net from 'node:net';

const serverName = '192.168.1.23';
const serverPort = 12000;

// Create a welcoming socket which the clients will use
// to establish a TCP connection.
const serverSocket = net.createServer();

// Handle connection sockets, this is different from the welcoming
// socket. The sockets here are specific to the connection established
// by a client and this server.
serverSocket.on('connection', (socket) => {
  const clientHostname = `${socket.remoteAddress}:${socket.remotePort}`;
  console.log(`Server has established connection with ${clientHostname}`);

  socket.on('data', (data) => {
    const modifiedMessage = data.toString().toUpperCase();
    socket.write(Buffer.from(modifiedMessage));
  });

  socket.on('close', () => {
    console.log(`Server has closed connection with ${clientHostname}`);
  });
});

// Bind server port and server name then
//  start listening to TCP connection requests.
serverSocket.listen(serverPort, serverName, () => {
  console.log(`Server has started at port ${serverName}:${serverPort}`);
});
