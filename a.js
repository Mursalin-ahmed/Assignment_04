var express = require('express');
app = express();




//Post function
//query
app.post('/one',function(req,res){
       let firstName = req.query.firstName;
       let secondName = req.query.secondName;
       res.send(firstName + " " + secondName); 

})
//body
app.post('/two',function(req,res){
    
    res.end("This is simple post request")
  })

  //header
app.post('/three',function(req,res){
  let userName = req.header("userName");
  let password = req.header("password");
  res.end("User name: " + userName + "password:"+password)
})

app.listen(8000,function(){
    console.log("Server run successfully");
})