var express = require('express');
var multer = require('multer');
var app = express();

var storage=multer.diskStorage({
    destination:function(req,file,callBack){
        callBack(null,'./uploads')
    },
    filename:function(req,file,callBack){
        callBack(null, file.originalname)
    },
})

var upload = multer({storage:storage}).single('myfile')

app.post('/',function(req,res){
    upload(req,res,function(error){
        if(req.files.image.mimetype !== "jpg/png"){
            throw new Error("Only supports jpg file format");
        }
        else{
            console.log("File upload successfull")
        }
    })
    res.end("File upload successfull");
});

app.listen(8010,function(){
    console.log("Server run successfully");
})