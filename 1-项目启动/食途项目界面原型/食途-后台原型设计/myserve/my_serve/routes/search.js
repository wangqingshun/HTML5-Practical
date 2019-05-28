var express=require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router=express.Router();

router.post('/',function(req,res){
	db.getConnection(function(err,connection){
      console.log(req.body);
      	var name=req.body['name'];
      	connection.query('SELECT name from z_xiangqing WHERE name=?',[name],function(err,res){
        	if(!err){
            	var data={code:200,msg:"查询成功"};
              res.json(data);
            }else{
              var data={code:1,err:err,msg:"没有相关内容"};
              res.json(err)
            };
        })
      connection.release();
    })
})
router.get('/',function(req,res){
	db.getConnection(function(err,connection){
      var phone =req.query['name'];
    	connection.query('SELECT name from z_xiangqing WHERE name=?',[name],function(err,result){
        	if(!err){
            	res.json(result);
            }
        })
      connection.release();
    })
})

module.exports = router;