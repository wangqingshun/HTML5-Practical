var express = require("express");
var router = express.Router();
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
];
router.get('/:id',function(req,res){
	var id=req.params.id;
  	/*console.log(typeof id);
  	switch (id){
      case '1':
        res.json (video[id-1]);
        break;
      case '2':
        res.json (new Video(2,"http://39.96.21.142:3000/videos/beef2.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '3':
        res.json (new Video(3,"http://39.96.21.142:3000/videos/chicken.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '4':
        res.json (new Video(4,"http://39.96.21.142:3000/videos/cook.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '5':
        res.json (new Video(5,"http://39.96.21.142:3000/videos/duck.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '6':
        res.json (new Video(6,"http://39.96.21.142:3000/videos/duck2.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '7':
        res.json (new Video(7,"http://39.96.21.142:3000/videos/fry.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '8':
        res.json (new Video(8,"http://39.96.21.142:3000/videos/sandwich.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '9':
        res.json (new Video(9,"http://39.96.21.142:3000/videos/snack.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '10':
        res.json (new Video(10,"http://39.96.21.142:3000/videos/snack2.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '11':
        res.json (new Video(11,"http://39.96.21.142:3000/videos/straberry cake.mp4","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      case '12':
        res.json (new Video(12,"http://39.96.21.142:3000/videos/western-food.mov","http://39.96.21.142:3000/images/touxiang.jpg","我爱厨房"));
        break;
      default:
        break;*/
  res.json(video[id-1]);
    })
module.exports = router;