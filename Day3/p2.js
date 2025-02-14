const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="background-color: blue; color: white; font-size: 36px; text-align: center;">Hello World</h1>');
});

server.listen(9000, (err)=>{
    if(err) console.log(err);
    else
    console.log('Server running on port 9000');
});