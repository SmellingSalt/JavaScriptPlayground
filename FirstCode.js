var http=require("http")

http.createServer(
    function(req,res)
{
    res.writeHead(200,{"Content-type":"HTML"})
    res.write("Hello")
    res.end()
}   
).listen(8080)