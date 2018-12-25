var express = require("express");
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router = express.Router();
router.post('/',function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	db.getConnection(function(err,connection){
		var phone=req.body['phone'];
		var psw=req.body['psw'];
		connection.query('SELECT * FROM User',(err,result)=>{
			var isTrue=false;
			if(!err){
				for(var i=0;i<result.length;i++){
					if(result[i].phone==phone&&result[i].psw==psw)isTrue=true;//有该用户信息
				}
			}
			 data={};
			if(!isTrue){//不存在该用户
				data={code:-1,msg:"用户名或密码错误"}
			}else{
				data={code:200,msg:"登录成功"}
			}
			if(err)data.err=err;
			if(typeof data == 'undefine'){
				res.json({code:-200,msg:"操作错误"});
			}else{res.json(data);}
		});
		connection.release();
	});
})




module.exports = router;
