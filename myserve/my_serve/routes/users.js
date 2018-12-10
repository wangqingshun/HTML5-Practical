var express = require('express');
var router = express.Router();
var db =require('../modules/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.getConnection(function(err,connection){
    /*增
  	connection.query('INSERT INTO  User VALUES(?,?)',[101,'guoritian'],(err,result)=>{
    	if(err){console.log(err);res.end(" ");return;}
       res.status(200).json(result);
    });
    */
    
    connection.query('SELECT * FROM User',(err,result)=>{
      var items=[];
    	if(err){console.log(err);res.end(" ");return;}
      result.forEach((e)=>{
      	items.push(e);
      })
       res.status(200).json(items);
    });
    connection.release();
  })
  
});
module.exports = router;
