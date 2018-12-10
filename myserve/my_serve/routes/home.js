var express = require('express');
var router = express.Router();
/* GET home page. */
var Home=(function(){
function Home(id,src,p){
        this.id=id;
        this.src=src;
        this.p=p;
}
        return Home;
}());
var tuijian1=[
        new Home(1,'http://39.96.21.142:3000/images/tuijian1.jpg','皮蛋熟肉粥'),
        new Home(2,'http://39.96.21.142:3000/images/tuijian2.jpg','可乐鸡翅'),
        new Home(3,'http://39.96.21.142:3000/images/tuijian3.jpg','可口鱼汤'),
        new Home(4,'http://39.96.21.142:3000/images/tuijian4.jpg','美味牛排'),
        new Home(5,'http://39.96.21.142:3000/images/tuijian5.jpg','美味糕点'),
        new Home(6,'http://39.96.21.142:3000/images/tuijian6.jpg','经典徽菜')
]
var lunbo1=[
        new Home(1,'http://39.96.21.142:3000/images/lunbo1.jpg','lunbo1'),
        new Home(2,'http://39.96.21.142:3000/images/lunbo2.jpg','lunbo2'),
        new Home(3,'http://39.96.21.142:3000/images/lunbo3.jpg','lunbo3'),
]
var tuijian2=[
        new Home(1,'http://39.96.21.142:3000/images/shicai1.jpg','土豆'),
        new Home(2,'http://39.96.21.142:3000/images/shicai2.jpg','菠菜'),
        new Home(3,'http://39.96.21.142:3000/images/shicai3.jpg','红薯'),
        new Home(4,'http://39.96.21.142:3000/images/shicai4.jpg','西红柿'),
        new Home(5,'http://39.96.21.142:3000/images/shicai5.jpg','茄子'),
        new Home(6,'http://39.96.21.142:3000/images/shicai6.jpg','西兰花')
]
var count=3;
 var arr1=[];
 for(var i=0;i<tuijian1.length;i++){
        arr1.push(tuijian1[(i+count)%6]);
}
var arr2=[];
 for(var i=0;i<tuijian2.length;i++){
        arr2.push(tuijian2[(i+count)%6]);
}

var homearr=[tuijian1,lunbo1,tuijian2];
router.get('/',function(req,res){
        res.json(homearr);
})

router.get('/1',function(req,res){
  	
        res.json(arr1);
})

router.get('/2',function(req,res){
  	/*	var count=3;
  		var arr2=[];
  		for(var i=0;i<tuijia1.length;i++){
        	arr2.push(tuijan[i+count%6]);
        }
  		count=(count++)%6;*/
        res.json(arr2);
})

module.exports = router;
