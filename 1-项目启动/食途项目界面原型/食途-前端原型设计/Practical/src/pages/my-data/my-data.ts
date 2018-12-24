import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
import { ImgService } from '../../services/ImgService.service';
import { NoticeService } from '../../services/NoticeService.service'
import { Http } from '@angular/http';
import { ReviceServeProvider } from '../../providers/revice-serve/revice-serve';
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
export class MyDataPage {
  listData = [];
  username:string;
  phone;
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
  countryside=["北京市","天津市","上海市","重庆市","河北省","山西省","辽宁省","吉林省","黑龙江省",
  "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省",
  "四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区",
  "西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
  occupation=["学生","教师","医生","个体商人","其他"];
  gender=["女","男"];
  put(Newname:HTMLInputElement){
    console.log(this.side);
    this.name=Newname.value==''? this.name:Newname.value;
    this.http.post('/api/data',{phone:this.phone,name:this.name,year:this.item,month:this.some,zhiye:this.occ,dizhi:this.side,changju:this.sides,sex:this.sex}).subscribe((data)=>{
      var obj=JSON.parse(data['_body']);
      if(obj.code==200){
        console.log("修改成功");
      }else{
        console.log("操作错误");
      }
    })
  }
  ionViewWillEnter(){
  }
  constructor(public navCtrl: NavController, public http :Http,public navParams: NavParams,private reviceServe: ReviceServeProvider,
     private notiSer: NoticeService,private imgSer: ImgService
    ) {
      this.name=this.navParams.get('name');
      this.headsrc=this.navParams.get('headsrc');
      this.phone=this.navParams.get('phone');
      this.http.get('/api/data',{params:{phone:this.phone}}).subscribe((data)=>{
        var obj=JSON.parse(data['_body'])[0];
        this.name=obj.name;
        this.item=obj.year;
        this.some=obj.month;
        this.occ=obj.zhiye;
        this.side=obj.dizhi;
        this.sides=obj.changju;
        this.sex=obj.sex;
      })
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