var express=require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router=express.Router();
router.post('/',function(req,res){
	var phone=req.body['phone'];
  	db.getConnection(function(err,connection){
	connection.query('SELECT name,head FROM User WHERE phone=?',[phone],function(err,result){
    	if(!err){
        	res.json(result);
        }
    })
      connection.release();
})
})
module.exports = router;