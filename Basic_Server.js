const http = require('http');


function datacontrol(req,resp){
    resp.write("<h1> Hello Programmers \n Welcome in Node js</h1>")
    resp.end();
}

http.createServer(datacontrol).listen(4500);