import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage} from '../search/search';
import { Http } from '@angular/http';
import * as $ from 'jquery';

/**
 * Generated class for the SerachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serach',
  templateUrl: 'serach.html',
})
export class SerachPage {
  txt:string;
  arr:string[]=[];
  menu=["鱼香肉丝",'毛血旺',"辣炒鱿鱼丝","宫爆鸡丁","辣子鸡","泡凤爪","土豆烧排骨","辣子鸡丁","灯影牛肉","干煸牛肉丝","冬菜扣肉",
  "开水白菜","东坡肘子","干烧鱼","宫保鸡丁","川辣黄瓜","麻婆豆腐","夫妻肺片","子姜鸭","锅巴肉片","香干回锅肉","嫩蛋虾仁","麻辣水煮鱼",
    "火锅鸡","红烧猪蹄","红辣椒爆炒鳝片","麻婆豆腐鱼","麻香耗儿鱼","黄瓜皮蛋汤","酥烤大方","水煮牛肉","炸珍珠虾",
    "姜汁热窝鸡蛋","辣椒炒大肠","干煸鳝鱼","小煎鸡","担担面","泡菜鱼","白油肝片","麻辣香水鱼","腊肉","回锅鱼片",
    "麻辣豆腐","蒜蓉蒸扇贝","鱼香肉丝－川菜","川北凉粉","香酥鸭","鱼香排骨","陈麻婆豆腐","羊肉火锅",'蒜香鲶鱼',
    '姜葱基围虾',"四川凉面","粉蒸牛肉","野生菌汤","辣子脆肠","脆皮肠头","泡菜炒肉末","麻辣牛肉干","蒜蓉蒸扇贝","川味猪肝",]
  search(){
    if(this.txt==''){
      this.txt='重庆鸡公煲'
      this.arr.push(this.txt);
      localStorage.setItem("history",JSON.stringify(this.arr));
      this.txt=""
    }else{
    this.arr.push(this.txt);
    localStorage.setItem("history",JSON.stringify(this.arr));
    this.txt=""
    }
    var $text = $('.search'),text=$text.val();
    var neirong=text;
    var obj={neirong:neirong};
    var obj1=JSON.stringify(obj);
    var oMyForm = new FormData();
    oMyForm.append("obj",obj1);
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange=function(){
      if(oReq.readyState==4 && oReq.status==200){
        var obj=JSON.parse(oReq.response);
        if(obj.code==200){
          Alert("没有相应内容");
          $text.val('');
        }
      }
    }
    oReq.open('POST', 'http://39.96.21.142:3000/api/search/'+neirong);
    oReq.send(oMyForm);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {

  }
  ionViewWillEnter(){
    History=JSON.parse(localStorage.getItem('history'));
    if(History!=null){
      for(var index=0;index<History.length;index++){
        this.arr.push(History[index]);
      }
    }
  }
  clear(){
    window.localStorage.removeItem("history");
    this.arr=[];
  }
  goSearch(){
    this.navCtrl.push(SearchPage);
  }
}
