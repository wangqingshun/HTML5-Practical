var express=require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router=express.Router();
var fs   = require('fs');
var qs   = require('querystring');
var bodyParser = require('../node_modules/body-parser');
var formidable = require('../node_modules/formidable');

router.post('/:neirong',function(req,res){
	res.append('Access-Control-Allow-Origin', "*");
  	res.header('Access-Control-Allow-Origin', '*');
  	res.setHeader("Access-Control-Allow-Origin", "*");
  	var neirong=req.params['neirong'];
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
	db.getConnection(function(err,connection){
      	connection.query('SELECT neirong from z_xiangqing' ,(err,result)=>{
        	if(!err){//存在相应的内容
            	var data={code:200,msg:"查询成功"};
              	res.json(data);
            }else{
              var data={code:1,err:err,msg:"没有相关内容"};
              res.json(err)
            };
            connection.release();
        })
})


module.exports = router;var express=require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router=express.Router();
var fs   = require('fs');
var qs   = require('querystring');
var bodyParser = require('../node_modules/body-parser');
var formidable = require('../node_modules/formidable');

router.post('/:neirong',function(req,res){
	res.append('Access-Control-Allow-Origin', "*");
  	res.header('Access-Control-Allow-Origin', '*');
  	res.setHeader("Access-Control-Allow-Origin", "*");
  	var neirong=req.params['neirong'];
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
	db.getConnection(function(err,connection){
      	connection.query('SELECT neirong from z_xiangqing' ,(err,result)=>{
        	if(!err){//存在相应的内容
            	var data={code:200,msg:"查询成功"};
              	res.json(data);
            }else{
              var data={code:1,err:err,msg:"没有相关内容"};
              res.json(err)
            };
            connection.release();
        })
})
module.exports = router;var express=require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router=express.Router();
var fs   = require('fs');
var qs   = require('querystring');
var bodyParser = require('../node_modules/body-parser');
var formidable = require('../node_modules/formidable');

router.post('/:neirong',function(req,res){
	res.append('Access-Control-Allow-Origin', "*");
  	res.header('Access-Control-Allow-Origin', '*');
  	res.setHeader("Access-Control-Allow-Origin", "*");
  	var neirong=req.params['neirong'];
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
	db.getConnection(function(err,connection){
      	connection.query('SELECT neirong from z_xiangqing' ,(err,result)=>{
        	if(!err){//存在相应的内容
            	var data={code:200,msg:"查询成功"};
              	res.json(data);
            }else{
              var data={code:1,err:err,msg:"没有相关内容"};
              res.json(err)
            };
            connection.release();
        })
})


module.exports = router;v