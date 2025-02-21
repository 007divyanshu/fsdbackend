const http = require('http');

const server=http.createServer(async(req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    const data=await fetch ("https://fakestoreapi.com/products");
    const products=await data.json();
    const myhtml=`<html>
    <head>
    <title>Product</title>
   <style>
    .container {
        border: 1px solid black;
        background-color: aqua;
        padding: 10px;
        margin: 10px;
        width: fit-content;
         }
    </style>
    </head>
    <body>
    <h1>Products</h1>
    ${
        products.map((product)=>{
            return `<div classname="container">
            <h2>Title: ${product.title}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src "${product.image}" width="200" height="250" alt="${product.title}">
            </div>`
        })
    }
    </body>
    </html>`;
    res.end(myhtml);
})

server.listen(9000,(err)=>{
    if(err) 
        console.log(err);
    else
        console.log('server is running on port 9000');
})