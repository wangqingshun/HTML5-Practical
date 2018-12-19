var express = require('express');
var router = express.Router();
var Shipin = (function(){
	function Shipin(id,src,p){
    	this.id=id;
      	this.src=src;
      	this.p=p;
    };
  	return Shipin;
}());
var Wenzhang = (function(){
	function Wenzhang(id,src,p){
    	this.id=id;
      	this.src=src;
      	this.p=p;
    };
  	return Wenzhang;
}());
var shipin = [
  new Shipin(1,'http://39.96.21.142:3000/images/beef.jpg','beef'),
  new Shipin(2,'http://39.96.21.142:3000/images/beef2.jpg','beef2'),
  new Shipin(3,'http://39.96.21.142:3000/images/chicken.jpg','chicken'),
  new Shipin(4,'http://39.96.21.142:3000/images/cook.jpg','cook'),
  new Shipin(5,'http://39.96.21.142:3000/images/snack.jpg','snack'),
  new Shipin(6,'http://39.96.21.142:3000/images/snack2.jpg','snack2'),
]
var wenzhang = [
   new Shipin(1,'http://39.96.21.142.3000/images/beef.jpg',
             {
    		  name:'小吊梨汤',
              jianjie:'冬季要多吃一些水果，如果觉得直接吃太冰凉，可以煮成糖水。重点推荐梨，它可以清心润肺、止咳消痰、清喉降火。龙宝喜欢用梨来煮小吊梨汤，煮一锅全家人都可以喝。梨煮成汤后寒性降低，清火润肺的效果更好',
              shicai:'主料：梨 500克 干银耳 20克 话梅 3颗 水 1000克 冰糖 50克 辅料：枸杞 适量',
    		  buzhou:['1准备好食材和份量。','2干银耳用热水泡软，剪掉根部黄色的部分，撕成小朵。','3梨用盐反复搓洗干净外皮，把梨皮小心的削下来。','4梨对半切开，去掉中间的果核，再切成大拇指大小的方块','5砂锅里放2斤的水，大火煮开后，依次放入梨皮、梨块、银耳、话梅和冰糖一起煮开，冰糖有润肺去火、化痰止咳的效果，加了冰糖的热饮，风味上更醇厚一些。推荐这款梨汁冰糖，土法熬制的冰糖比较大块，每次用2-3块就可以了。','6煮十分钟左右撒适量的枸杞。','7一直煮到砂锅里的水下降三分之一，就可以关火了。'],
              qiaomen:['1.梨削皮之前要用盐反复搓洗干净外皮。','2.小吊梨汤一定要加话梅和梨皮。']
  			}
            ),
  new Shipin(2,'http://39.96.21.142.3000/images/beef2.jpg','beef'),
  new Shipin(3,'http://39.96.21.142.3000/images/chicken.jpg','beef'),
  new Shipin(4,'http://39.96.21.142.3000/images/cook.jpg','beef'),
  new Shipin(5,'http://39.96.21.142.3000/images/duck.jpg','beef'),
  new Shipin(6,'http://39.96.21.142.3000/images/duck2.jpg','beef'),
  new Shipin(7,'http://39.96.21.142.3000/images/fry.jpg','beef'),
  new Shipin(8,'http://39.96.21.142.3000/images/sandwich.jpg','beef'),
  new Shipin(9,'http://39.96.21.142.3000/images/snack.jpg','beef'),
  new Shipin(10,'http://39.96.21.142.3000/images/snack2.jpg','beef'),
  new Shipin(11,'http://39.96.21.142.3000/images/straberry.jpg','beef'),
  new Shipin(12,'http://39.96.21.142.3000/images/western.jpg','beef')
]
var guanzhu = [
  new Shipin(1,'http://39.96.21.142.3000/images/beef.jpg',
             {
    		  name:'小吊梨汤',
              jianjie:'冬季要多吃一些水果，如果觉得直接吃太冰凉，可以煮成糖水。重点推荐梨，它可以清心润肺、止咳消痰、清喉降火。龙宝喜欢用梨来煮小吊梨汤，煮一锅全家人都可以喝。梨煮成汤后寒性降低，清火润肺的效果更好',
              shicai:'主料：梨 500克 干银耳 20克 话梅 3颗 水 1000克 冰糖 50克 辅料：枸杞 适量',
    		  buzhou:['1准备好食材和份量。','2干银耳用热水泡软，剪掉根部黄色的部分，撕成小朵。','3梨用盐反复搓洗干净外皮，把梨皮小心的削下来。','4梨对半切开，去掉中间的果核，再切成大拇指大小的方块','5砂锅里放2斤的水，大火煮开后，依次放入梨皮、梨块、银耳、话梅和冰糖一起煮开，冰糖有润肺去火、化痰止咳的效果，加了冰糖的热饮，风味上更醇厚一些。推荐这款梨汁冰糖，土法熬制的冰糖比较大块，每次用2-3块就可以了。','6煮十分钟左右撒适量的枸杞。','7一直煮到砂锅里的水下降三分之一，就可以关火了。'],
              qiaomen:['1.梨削皮之前要用盐反复搓洗干净外皮。','2.小吊梨汤一定要加话梅和梨皮。']
  			}
            ),
  new Shipin(2,'http://39.96.21.142.3000/images/beef2.jpg','beef'),
  new Shipin(3,'http://39.96.21.142.3000/images/chicken.jpg','beef'),
  new Shipin(4,'http://39.96.21.142.3000/images/cook.jpg','beef'),
  new Shipin(5,'http://39.96.21.142.3000/images/duck.jpg','beef'),
  new Shipin(6,'http://39.96.21.142.3000/images/duck2.jpg','beef'),
  new Shipin(7,'http://39.96.21.142.3000/images/fry.jpg','beef'),
  new Shipin(8,'http://39.96.21.142.3000/images/sandwich.jpg','beef'),
  new Shipin(9,'http://39.96.21.142.3000/images/snack.jpg','beef'),
  new Shipin(10,'http://39.96.21.142.3000/images/snack2.jpg','beef'),
  new Shipin(11,'http://39.96.21.142.3000/images/straberry.jpg','beef'),
  new Shipin(12,'http://39.96.21.142.3000/images/western.jpg','beef')
]
router.get('/',function(req,res){
  res.json(shipin);
});
module.exports = router;
