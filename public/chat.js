var socket=io.connect("https://msgsapp.herokuapp.com:5000");

var message= document.getElementById("message");
var Name= document.getElementById("Name");
var btn= document.getElementById("send");
var output= document.getElementById("output");
var feedback= document.getElementById("feedback");

btn.addEventListener("click",function(){

socket.emit("chat",{message:message.value,Name:Name.value});

});




message.addEventListener("keypress",function(){
    socket.emit("typing",Name.value);
});



socket.on("chat",function(data){

feedback.innerHTML="";
output.innerHTML +='<p><strong><u>'+data.Name +'</u>: </strong>'+data.message+'</p>'
});

socket.on("typing",function(data){

feedback.innerHTML='<p><em>' + data + ' is typing a message...</em></p>';

});
