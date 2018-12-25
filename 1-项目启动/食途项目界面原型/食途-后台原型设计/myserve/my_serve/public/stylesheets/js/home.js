window.onload = function(){
    var wz = document.getElementById('wz');
    var express = require('express');
    var app = express();
    app.get('wenzhang');
    wz.onclick = function(req,res){
        res.send();
    }

}