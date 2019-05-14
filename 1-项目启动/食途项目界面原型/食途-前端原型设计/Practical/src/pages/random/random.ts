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
  arr=['蛋炒饭','酱油炒饭','扬州炒饭','菠萝炒饭','海鲜炒饭','什锦炒饭',
  '虾球鸡粒炒饭','宫保鸡丁盖饭','日式猪排盖饭','西红柿鸡蛋盖饭',
  '日式亲子盖饭','蒲烧鳗鱼盖饭','香菇肉片盖饭','鱿鱼盖饭','三丁盖饭',
  '韩式鸡肉盖饭','酱爆鸡丁盖饭','鸡蛋天妇罗盖饭','土豆烧鸡盖饭','青椒肉丝盖饭',
  '扣肉盖饭','西红柿土豆牛腩盖饭','牛丼盖饭','土豆焖饭','红烧肉焖饭','家常焖饭',
  '排骨焖饭','香菇鸡肉焖饭','土豆牛肉焖饭','羊肉焖饭','腊肉豆角焖饭','塔吉锅什锦焖饭',
  '酸汤面','骨汤面','清汤面','西红柿鸡蛋汤面','家常汤面','茄汁汤面','鱼汤面',
  '鲜蔬骨汤面','鲜虾汤面','香菇鸡汤面','羊肉糊汤面','蛋丝青菜荞麦汤面','老鸭汤面',
  '浑汤面','菌菇汤面'];
  img=['../assets/imgs/random.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  change(){
      var num = Math.floor(Math.random()*46);
      this.item=this.arr[num];console.log(this.item)
  } 
  start(){
    var timer = setInterval(this.change.call(this), 20000);
    console.log(this)
    setTimeout(function (){clearTimeout(timer);},6000);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

}
