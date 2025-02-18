const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Fixed syntax

    if (req.url === '/home') {
        res.end('Welcome to Home Page');
    } else if (req.url === '/about') {
        res.end('Welcome to About Page');
    } else {
        res.end('Page not found');
    }
});

server.listen(9000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on port 9000");
    }
});
