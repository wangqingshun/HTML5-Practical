var express = require("express");
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var Fun=require('../modules/fun');
var f=new Fun();
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
			};
			if(!isTrue){//不存在该用户
              var name=f.getname();
              var src="http://39.96.21.142:3000/images/morentouxiang.png"
				connection.query('INSERT INTO User(phone,psw,name,head) VALUE(?,?,?,?)',[phone,psw,name,src],function(err,result){
					if(typeof result !="undefine"){
						data={
							code:200,
							msg:"注册成功，正在跳转到首页"	
						};
                      res.json(data);
					}else{
						data={code:-1,msg:"注册失败"};
                      	res.json(data);
					}
				})
              
			}else{
				data={code:1,msg:"用户已存在。请登录"};
                res.json(data)
			}
			if(err){data.err=err;res.json(data);}
		});
		connection.release();
	});
})




module.exports = router;
