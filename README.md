# TCP Socket Client-Server Programs

## Running the server

```cmd
yarn start
```

## Running the client

```cmd
ts-node .\client.ts <Message here to send to server>
```

## Exposing port through Windows Firewall

If you're planning for your devices to communicate through LAN, you might want to expose the port on Windows otherwise the server won't receive any packets.

1. Go to `Start` and search for _Windows Defender Firewall_.
2. Click on `Advanced Settings`.
3. Navigate to `Inbound Rules`.
4. Create a new rule specifying the port to expose (which in the program uses port 12000), the type of connection (which is TCP in this case), and allow the connection.
