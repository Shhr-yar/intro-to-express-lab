const express = require('express');
const app = express();
const path = require('path');



app.get('/',function(req,res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/views/homepage.html'))
 })

 app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname + '/views/about.html'))
 })

app.get('/test', function(req, res){
    res,send('<p>Success!</p>');
});



app.listen(3000,function(){
    console.log('App is working')
})

