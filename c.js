var express = require('express');
var zip = require('express-zip')

var app = express();


app.get('/', function(req, res){
    res.zip([{
        path : "Mursalin.png",
        name : "Mursalin.png"
    }
    ])
  });



app.listen(8010,function(){
    console.log("Server run successfully");
})