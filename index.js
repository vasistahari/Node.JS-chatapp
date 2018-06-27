var express=require('express');

var socket=require("socket.io");
var app=express();


const path=require('path');
const publicPath=path.join(__dirname,'/../public');
const PORT=process.env.PORT || 8080;


var server=app.listen(PORT,function(){
    console.log("the server is listening on the port "+PORT);
});

app.use(express.static('public'));


var io=socket(server);
io.on('connection',function(socket){

socket.on("chat",function(data){

    io.sockets.emit("chat",data);

});

socket.on("typing",function(data){
socket.broadcast.emit("typing",data)

});




console.log(socket.id);

});

