// TCP Client
import net from 'node:net';
import { argv, exit } from 'node:process';

const serverName = 'localhost';
const serverPort = 12000;

const message = argv.splice(2).join(' ');
if (!message) {
  console.error('ClientError: Message to send is missing.');
  exit(1);
}

// Establish TCP connection then send a message
const clientSocket = net.createConnection(serverPort, serverName, () => {
  clientSocket.write(Buffer.from(message), (error) => {
    if (!error) return;

    console.error('ClientError: Could not send data to TCP server.');
    clientSocket.end();
  });
});

// Receive data back from server, print it, then close connection.
clientSocket.on('data', (data) => {
  const modifiedMessage = data.toString();
  console.log(`Received from server: ${modifiedMessage}`);

  clientSocket.end();
});
