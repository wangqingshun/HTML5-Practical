var express = require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database'); 
var router = express.Router();
var arr1=[],arr2=[];



router.get('/',function(req,res){
  db.getConnection(function(err,connection){
    connection.query('SELECT * FROM zuopin WHERE TYPE="video" ',function(err,result){
        if(!err){
            for(var i=0;i<result.length;i++){
                arr1.push(result[i]);
              }
          }
      });
      connection.query('SELECT * FROM zuopin WHERE TYPE="article" ',function(err,result){
        if(!err){
            for(var i=0;i<result.length;i++){
                arr2.push(result[i]);
              }
          }
      })
  });
  var shararr=[arr1,arr2]
  res.json(shararr);
});
module.exports = router;
