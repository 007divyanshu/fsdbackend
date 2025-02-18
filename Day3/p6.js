const http = require('http');

const server = http.createServer(async (req, res) => {
    const data = await fetch("https://dummyjson.com/products");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const newproducts = await data.json();
    const myproduct = newproducts.products;
    const titles = myproduct.map(product => {
        return product.title;
    });

    res.end(JSON.stringify(titles));
});

server.listen(9000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on port 9000");
    }
});
