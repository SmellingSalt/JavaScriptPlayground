var http=require("http") //Importing the http module
/*http.createServer is a function that creates the server.
It needs a function as the argument*/
http.createServer(
    function(req,res)//This function gets a request and responds with res
{
    res.writeHead(200,{"Content-type":"HTML"}) //Header for the data. 200 is the header code
    res.write("Hello") //Message
    res.end() // End the session for the client it has sent what it needs to send.
}   
).listen(8080) //listen on port 8080.