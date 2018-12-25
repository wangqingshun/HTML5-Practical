var express = require("express");
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router = express.Router();
/*
var Article = (function(){
	function Article(id,imgsrc,touxiang,name,zhuliao,fuliao,buzhou){
    	this.id=id;
      	this.imgsrc=imgsrc;
      this.touxiang=touxiang;
      this.name=name;
      this.zhuliao=zhuliao;
      this.fuliao=fuliao;
      this.buzhou=buzhou;
    };
  	return Article;
}());
var Article=[
	new Article(1,'http://39.96.21.142:3000/images/xilanhuaganbeigedatang.png','http://39.96.21.142:3000/images/touxiang.jpg','西兰花干贝疙瘩汤','干贝2粒 西兰花2朵', '面粉20克',
                ['1.干贝泡发1个小时，切碎碾压碎。',
      			 '2.面粉中一点点加水，搅匀再加水，直到没干粉，搅拌成小颗粒面疙瘩。tips：面疙瘩是黑色的，因为面粉是黑麦全麦粉，9个月的宝宝可以吃这种疙瘩，这时候可以加杂粮粉了，刚开始添加杂粮粉从1/5开始加起，慢慢增加粗粮比例，到2周岁可以达到精面一半粗粮粉一半。',
                 '3.西兰花入沸水焯1分钟，花穗切碎。',
                 '4.煮2分钟，西兰花穗一起煮30秒出锅。',
                 '5.锅中烧一碗水，干贝丝一起煮开，面疙瘩加入',
                 '6.鲜美补锌的干贝不需要任何调味料，宝宝也能一勺接着一勺挖一大碗~'                                                                                                                                      
     ]),
 	new Article(2,'http://39.96.21.142:3000/images/liangbanhaidaisi.png','http://39.96.21.142:3000/images/touxiang.jpg','凉拌海带丝','海带', '黄油 红椒 生抽 蒜 花生辣酱',
                ['1.把黄瓜和红椒切成丝，放入碗中，加入盐用手抓一抓腌五分钟。',
      			 '2.把海带入开水锅焯开捞出。',
                 '3.把蒜拍扁切碎。',
                 '4.放入海带，把黄瓜、红椒丝放进去拌匀。',
                 '5.放入盘中加入生抽、花生酱、蒜。'                                                                                                                                     
     ]),
    new Article(3,'http://39.96.21.142:3000/images/hongshaokaibeiheihuxia.png','http://39.96.21.142:3000/images/touxiang.jpg','红烧开背黑虎虾','黑虎虾', '酱油 醋 盐 白糖 大葱 大蒜 姜 凉水 油',
                ['1.黑虎虾背部剪开，挑去沙线，冲洗干净。',
      			 '2.大蒜拍碎剁末，大葱切末，姜切末。',
                 '3.调一个碗汁：酱油、醋、白糖、盐、适量凉水同入一碗，混合均匀后可以尝一尝，味道满意了就可以；这个口味完全随个人，多点少点都可以，成品的味道会比碗汁要重一些。',
                 '4.碗汁、葱姜蒜末，老干妈辣豆豉一并准备好，进锅后快速翻炒时就不会手忙脚乱了。',
                 '5.不粘炒锅中倒少许油，将葱姜蒜末煸炒出香味儿，将开背虾倒入锅中，大火翻炒变红色。',    
                 '6.将碗汁淋入锅中，使虾都浸在汤汁中，充分入味，两分钟后出锅，想要个样子就摆盘，着急吃就直接倒入盘中，撒少许香菜或者香葱末，红绿相间更加诱人。'
     ]),
    new Article(4,'http://39.96.21.142:3000/images/gaoguaibinggan.png','http://39.96.21.142:3000/images/touxiang.jpg','搞怪饼干','低筋面粉', '巧克力 黄油 糖粉 全蛋液',
                ['1.黄油室温软化，软化好后加入糖粉，最好用电动打蛋器将其找至发白。',
      			 '2.鸡蛋打到酷新怡量杯里，搅散，再把全蛋液分次加入打发的黄油里，每次都要上一次完全吸收再加下一次，然后筛入低筋面粉，戴一次性手套，用手将面粉抓匀，至无干粉为止。',
                 '3.将面团放入一个干净的保鲜袋里，用擀面杖将其擀成均匀的薄片，厚度在2mm左右，然后放入冰箱冷藏定型，大约2小时左右。',
                 '4.取出后，用饼干模具将其扣压出你喜欢的形状。',
                 '5.摆放在不粘的烤盘里，如果烤盘不是不粘的，那就要在下面铺上油纸。',
                 '6.烤箱预热，上下火，170度，中层烤18分钟左右，饼干表面上色就是熟了，取出放在烤网上晾凉。',
                 '7.巧克力放入裱花袋里，隔热水融化，再用煎刀煎一个小小的口，就可以在饼干上画出你想要的图案了。'
     ]),
    new Article(5,'http://39.96.21.142:3000/images/shigumizhou.png','http://39.96.21.142:3000/images/touxiang.jpg','十谷米粥','黑米 黑豆 长糯米', '冰糖 糙米 燕麦米 红米 红豆 绿豆 花生 莲子',
                ['1.取约100g的量。',
      			 '2.洗净后，加水浸泡约4小时。',
                 '3.取450ml饮用水，将食材与水放入电压力锅内。',
                 '4.煮制40分钟。',
     ]),
    new Article(6,'http://39.96.21.142:3000/images/luobohezi.png','http://39.96.21.142:3000/images/touxiang.jpg','萝卜盒子','白萝卜', '肉馅 淀粉 葱末 姜末 花生油 盐 酱油 味精 香油',
                ['1.调好肉馅，萝卜洗净去皮，切成每两片一组，不要切断。',
      			 '2.蘸上盐腌制10分钟。',
                 '3.夹上肉馅，摆到盘子里，放入蒸锅，蒸15到20分钟。',
                 '4.锅里放油，放入葱、姜末爆香，倒入蒸萝卜的原汁、加酱油、味精烧开，用淀粉勾芡。出锅前放香油调味即可。',
                 '5.浇到萝卜盒子上。'    
     ]),
];
*/
router.get('/:id',function(req,res){
  var id=req.query.id;
  var x_id=req.query.x_id;
  var arr1=[],arr2=[];
  db.getConnection(function(err,connection){
  	connection.query('SELECT * FROM z_xiangqing WHERE x_id=? ',[x_id],function(err,result){
    	if(!err){
          	for(var i=0;i<result.length;i++){
            	arr1.push(result[i]);
            }
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