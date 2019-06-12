import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {
  item;
  img;
  arr=[['蛋炒饭',['../assets/imgs/dcf.jpg']],['酱油炒饭',['../assets/imgs/jycf.jpg']],
  ['海鲜炒饭',['../assets/imgs/hxcf.jpg']],['什锦炒饭',['../assets/imgs/sjcf.jpg']],
  ['虾球鸡粒炒饭',['../assets/imgs/dcf.jpg']],['宫保鸡丁盖饭',['../assets/imgs/dcf.jpg']],
  ['日式猪排盖饭',['../assets/imgs/dcf.jpg']],['西红柿鸡蛋盖饭',['../assets/imgs/dcf.jpg']],
  ['日式亲子盖饭',['../assets/imgs/dcf.jpg']],['蒲烧鳗鱼盖饭',['../assets/imgs/dcf.jpg']],
  ['香菇肉片盖饭',['../assets/imgs/dcf.jpg']],['鱿鱼盖饭',['../assets/imgs/dcf.jpg']],
  ['三丁盖饭',['../assets/imgs/dcf.jpg']],['韩式鸡肉盖饭',['../assets/imgs/dcf.jpg']],
  ['酱爆鸡丁盖饭',['../assets/imgs/dcf.jpg']],['鸡蛋天妇罗盖饭',['../assets/imgs/dcf.jpg']],
  ['土豆烧鸡盖饭',['../assets/imgs/dcf.jpg']],['青椒肉丝盖饭',['../assets/imgs/dcf.jpg']],
  ['扣肉盖饭',['../assets/imgs/dcf.jpg']],['西红柿土豆牛腩盖饭',['../assets/imgs/dcf.jpg']],
  ['牛丼盖饭',['../assets/imgs/dcf.jpg']],['土豆焖饭',['../assets/imgs/dcf.jpg']],
  ['红烧肉焖饭',['../assets/imgs/dcf.jpg']],['家常焖饭',['../assets/imgs/dcf.jpg']],
  ['排骨焖饭',['../assets/imgs/dcf.jpg']],['香菇鸡肉焖饭',['../assets/imgs/dcf.jpg']],
  ['土豆牛肉焖饭',['../assets/imgs/dcf.jpg']],['羊肉焖饭',['../assets/imgs/dcf.jpg']],
  ['腊肉豆角焖饭',['../assets/imgs/dcf.jpg']],['塔吉锅什锦焖饭',['../assets/imgs/dcf.jpg']],
  ['酸汤面',['../assets/imgs/dcf.jpg']],['骨汤面',['../assets/imgs/dcf.jpg']],
  ['清汤面',['../assets/imgs/dcf.jpg']],['西红柿鸡蛋汤面',['../assets/imgs/dcf.jpg']],
  ['家常汤面',['../assets/imgs/dcf.jpg']],['茄汁汤面',['../assets/imgs/dcf.jpg']],
  ['鱼汤面',['../assets/imgs/dcf.jpg']],['鲜蔬骨汤面',['../assets/imgs/dcf.jpg']],
  ['鲜虾汤面',['../assets/imgs/dcf.jpg']],['香菇鸡汤面',['../assets/imgs/dcf.jpg']],
  ['羊肉糊汤面',['../assets/imgs/dcf.jpg']],['蛋丝青菜荞麦汤面',['../assets/imgs/dcf.jpg']],
  ['老鸭汤面',['../assets/imgs/dcf.jpg']],['浑汤面',['../assets/imgs/dcf.jpg']],['菌菇汤面',['../assets/imgs/dcf.jpg']]];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  change(){
      var num = Math.floor(Math.random()*46);
      this.item=this.arr[num][0];
      this.img=this.arr[num][1];
  } 
  start(){
    var timer = setInterval(this.change.call(this), 10000);
    console.log(this)
    setTimeout(function (){clearTimeout(timer);},6000);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

}
