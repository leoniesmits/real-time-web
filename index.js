var express = require("express");
var path = require("path");


var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);


// use this line to tell node everything in the public folder is used
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", function(socket){
    socket.on("chat message", function(msg){
        io.emit("chat message", msg);
      });
  });


http.listen(3000, function(){
  console.log("listening on:3000");
});

// io.on("connection", function(socket) {

// })

// http.listen(3000, function(){
//     console.log("You"re listening to *:3000, listener supported radio");
//   });

// app.get("/", function(req,res){
//     res.send("hello")
// })

// app.listen(port, console.log("listen on port:" + port))