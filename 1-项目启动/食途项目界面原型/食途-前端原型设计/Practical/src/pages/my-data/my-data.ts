import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
import { ImgService } from '../../services/ImgService.service';
import { NoticeService } from '../../services/NoticeService.service';
import { ReviceServeProvider } from '../../providers/revice-serve/revice-serve';
//import { convertEnumToColumn } from 'ion-multi-picker'
/**
 * Generated class for the MyDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
  providers: [ ReviceServeProvider]
})
// enum Fruit {
// 	Apple, Orange, Melon, Banana, Pear,
// }
export class MyDataPage {
  listData = [];
  // fruits: any[];
	// fruit: Fruit;
  // Fruit;
  username:string;
  some;
  item;
  occ;
  side;
  sides;
  sex;
  name;
  headsrc;
  month=[1,2,3,4,5,6,7,8,9,10,11,12];
  year=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004];
  // countryside=["北京市","天津市","上海市","重庆市","河北省","山西省","辽宁省","吉林省","黑龙江省",
  // "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省",
  // "四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区",
  // "西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
  occupation=["学生","教师","医生","个体商人","其他"];
  gender=["女","男"];
  
  // store(Newname: HTMLInputElement){
  //   window.localStorage.setItem('Newname',Newname.value);
  // }
  getYear(val){
    window.localStorage.setItem('year',val);
  }
  getMonth(val){
    window.localStorage.setItem('month',val);
  }
  getOcc(val){
    window.localStorage.setItem('Occ',val);
  }
  getSide(val){
    window.localStorage.setItem('side',val);
  }
  getSides(val){
    window.localStorage.setItem('sides',val);
  }
  getSex(val){
    window.localStorage.setItem('sex',val);
  }
  ionViewWillEnter(){
    this.username= window.localStorage.getItem('username');
    //this.Newname=window.localStorage.getItem('Newname');
    this.some=window.localStorage.getItem('month');
    this.item=window.localStorage.getItem('year');
    this.occ=window.localStorage.getItem('Occ');
    this.side=window.localStorage.getItem('side');
    this.sides=window.localStorage.getItem('sides');
    this.sex=window.localStorage.getItem('sex');
  }
  // clear(){
  //   window.localStorage.removeItem('month');
  //   this.some=null;
  //   window.localStorage.removeItem('year');
  //   this.item=null;
  //   window.localStorage.removeItem('Occ');
  //   this.occ=null;
  //   window.localStorage.removeItem('side');
  //   this.side=null;
  //   window.localStorage.removeItem('sides');
  //   this.sides=null;
  //   window.localStorage.removeItem('sex');
  //   this.sex=null;
  // }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private reviceServe: ReviceServeProvider,
     private notiSer: NoticeService,private imgSer: ImgService
    ) {
      this.name=this.navParams.get('name');
      this.headsrc=this.navParams.get('headsrc');
      // this.fruit = Fruit.Melon;
		  // this.Fruit = Fruit;
      // this.fruits = convertEnumToColumn(this.Fruit);
    }
    ionViewDidLoad() {
      this.getRequestContact();
    }
    getRequestContact() { 
      this.reviceServe.getRequestContact().subscribe(res => { 
        this.listData = res.json(); 
        console.log(this.listData);
      }, error => { 
        console.log(error); 
      }) 
    } 
    
    
// 初始化上传图片的服务 
private initImgSer() {
  this.imgSer.upload.url = ''; // 上传图片的url，如果同默认配置的url一致，那无须再设置
  this.imgSer.upload.success = (data) => {
    //上传成功后的回调处理
  };
  this.imgSer.upload.error = (err) => {
    this.notiSer.showToast('错误：头像上传失败！');
  };
}
go(){
    this.initImgSer();
    this.imgSer.showPicActionSheet();
  }
}