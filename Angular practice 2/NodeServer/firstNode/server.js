const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('new request')

    if(req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('Hello Class gdfgdfgf')
        res.end()
    }else if(req.url === '/home'){
        fs.readFile('index.html','utf8',function(err, content){
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(content);
            res.end()
        })
    }else if(req.url === '/ninjas'){
        fs.readFile('ninjas.html','utf8',function(err, content){
            res.writeHead(200,{'Content-Type': 'text/html'})
            // res.writeHead(200,{'Content-Type': 'text/css'})
            res.write(content);
            res.end()
        })
    }else if(req.url === '/dojos'){
        fs.readFile('dojos.html','utf8',function(err, content){
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(content);
            res.end()
        })
    }else{
        res.writeHead(404)
        res.end('Not ready for production yet!')
    }


    console.log('response sent')
    }

    
)

server.listen(8000);

console.log('Running Port 8000')
