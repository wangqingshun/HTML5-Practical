var express = require("express");
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router = express.Router();
/*
var Video = (function(){
	function Video(id,videosrc,touxiang,name){
    	this.id=id;
      	this.videosrc=videosrc;
      this.touxiang=touxiang;
      this.name=name;
    };
  	return Video;
}());
var video=[
	new Video(1,"http://39.96.21.142:3000/videos/beef.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(2,"http://39.96.21.142:3000/videos/beef2.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(3,"http://39.96.21.142:3000/videos/chicken.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(4,"http://39.96.21.142:3000/videos/cook.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(5,"http://39.96.21.142:3000/videos/duck.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(6,"http://39.96.21.142:3000/videos/duck2.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(7,"http://39.96.21.142:3000/videos/fry.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(8,"http://39.96.21.142:3000/videos/sandwich.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(9,"http://39.96.21.142:3000/videos/snack.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(10,"http://39.96.21.142:3000/videos/snack2.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(11,"http://39.96.21.142:3000/videos/straberry cake.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"),
  new Video(12,"http://39.96.21.142:3000/videos/western-food.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房")
];*/
router.get('/:id',function(req,res){
  console.log(req.query);
  var id=req.query.id;
  var x_id=req.query.x_id;
  var arr1=[],arr2=[];
  db.getConnection(function(err,connection){
  	connection.query('SELECT * FROM z_xiangqing WHERE x_id=? ',[x_id],function(err,result){
    	if(!err){
          	for(var i=0;i<result.length;i++){
            	arr1.push(result[i]);
            }console.log(result);
          	connection.query('SELECT  name,head  FROM User WHERE id=?',[id],function(err,result){
            	if(!err){
                	for(var i=0;i<result.length;i++){
            			arr2.push(result[i]);}
                    arr=[arr1,arr2];
                  	res.json(arr);
                }else{
                	res.json(err);
                }
            })
        }else{
        	res.json(err);
        }
    })
    connection.release();
  })	
})
module.exports = router;