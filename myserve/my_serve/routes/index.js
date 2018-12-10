var express = require('express');
var router = express.Router();
var Usesql = require('../modules/usesql');
var db = require('../modules/database');

/*
var mysql = require('mysql');
var database = require('../modules/mysql');
var usesql = require('../modules/usesql');
*/


//var pool = mysql.createPool(database.mysql);
var use = new Usesql();
var responseJSON = function(res,ret){
	if(typeof ret === 'undefine'){
		res.json({
			code:'-200',
			msg:'操作失败'
		});
	}else{
		res.json(ret);	
	}
	
}
/* GET home page. */
router.get('/reg', function(req, res, next) {
  	res.header('Access-Control-Allow-Origin', '*');
  	//res.header('Content-Type', 'text/plain; charset="utf-8"');
  	db.getConnection(function(err,connection){
		var param = req.query || req.params;
		var Username = param.id;
		var Password = param.name;
		var _res=res;
  		connection.query('SELECT * FROM User',(err,result)=>{
			var isTrue=false;
			if(!err){
				for(var i=0;i<result.length;i++){
                  console.log(result[i]);
					if(result[i].Id === Username && result[i].Username ===Password){isTrue=true;}
				}
			}
			var data = {};
           	 	data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            		if(isTrue) {
                		data.result = {
                    			code: 1,
                    			msg: '用户已存在'
                		};//登录成功返回用户信息
            		} else {
                      connection.query('INSERT INTO  User VALUES(?,?)',[Username,Password],function (err, result) {
                    			if(result) {
                        			data.result = {
                            			code: 200,
                            			msg: '注册成功'
                        			};
                    			} else {
                        			data.result = {
                            			code: -1,
                            			msg: '注册失败'
                        			};
                    			}
                		});
			}
			if(err) data.err=err;
                responseJSON(_res, data);
	});
      connection.release();
});
})
module.exports = router;
