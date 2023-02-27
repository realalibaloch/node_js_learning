const http =require('http')
//first
http.createServer((req,resp)=>{
    resp.write("hello server");
    resp.end()

}).listen(1000)


//with function

function fserver(req,resp)
{
    resp.write("hello server from function");
    resp.end()
}

http.createServer(fserver).listen(1100)