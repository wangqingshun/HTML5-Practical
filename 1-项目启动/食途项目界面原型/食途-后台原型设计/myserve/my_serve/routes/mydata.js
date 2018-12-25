var express = require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router = express.Router();
router.post('/',function(req,res){
	db.getConnection(function(err,connection){
      console.log(req.body);
      	var phone=req.body['phone'];
    	var name=req.body['name'];
        var year=req.body['year'];
      	var month=req.body['month'];
      	var zhiye=req.body['zhiye'];
      	var dizhi=req.body['dizhi'];
      	var changju=req.body['changju'];
      	var sex=req.body['sex'];
      	connection.query('UPDATE User SET name=?,year=?,month=?,zhiye=?,dizhi=?,changju=?,sex=? WHERE phone=?',[name,year,month,zhiye,dizhi,changju,sex,phone],function(err,result){
        	if(!err){
            	var data={code:200,msg:"修改成功"};
              res.json(data);
            }else{
              var data={code:1,err:err,msg:"操作错误"};
              res.json(err)
            };
        })
      connection.release();
    })
})
router.get('/',function(req,res){
	db.getConnection(function(err,connection){
      var phone =req.query['phone'];
    	connection.query('SELECT name,year,month,zhiye,dizhi,changju,sex FROM User WHERE phone=?',[phone],function(err,result){
        	if(!err){
            	res.json(result);
            }
        })
      connection.release();
    })
})

module.exports = router;