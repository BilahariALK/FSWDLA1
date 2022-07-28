let http  = require('http');
let port = 3000;
let url = "127.0.0.1";

let server  = http.createServer(
    (req,res) => {
        res.statusCode = 200;
        // res.setHeader('Content-Type','text/plain');
        // res.end("Hello Node JS!!!");

        res.setHeader('Content-Type','text/html');
        res.end("<html><body><h1>May the Force be with you!!!</h1></body></html>")
    }
);

//server listening
server.listen(port,url,() => {
    console.log(`Server is listening at ${port} and at this IP - ${url}`);
});