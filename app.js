const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    `
    <h1> Xin chao ca the gioi! </h1> 
    `
  );
});

server.listen(8000,() => {
    console.log("Server dang khoi chay")
}
);