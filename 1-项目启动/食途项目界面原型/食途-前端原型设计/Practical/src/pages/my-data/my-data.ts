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
  city;
  sex;
  name;
  headsrc;
  month=[1,2,3,4,5,6,7,8,9,10,11,12];
  year=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004];
  occupation=["学生","教师","医生","个体商人","其他"];
  gender=["女","男"];
  fileSelected(){
    var id=window.localStorage.getItem('id');
    var iMaxFilesize = 2097152;
    var iMinFilesize = 10240;
    var imageFile = document.getElementById('imageFile') as HTMLFormElement;    //读取文件
    var oFile =imageFile.files[0]
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (!rFilter.test(oFile.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (oFile.size > iMaxFilesize || oFile.size<iMinFilesize) {
        alert("图片大小不能超过2M,且要大于100k");
        return;
    }
    var uploadFrom =document.getElementById('uploadForm') as HTMLFormElement;
    var vFD = new FormData(uploadFrom);    //建立请求和数据
    vFD.append("userfile", oFile);
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange=function(){
      if(oXHR.readyState==4 && oXHR.status==200){
        var obj=JSON.parse(oXHR.response);
        window['src']=obj.head;
      }
    }
    oXHR.open('POST', 'http://39.96.21.142:3000/api/touxiang/'+id);
    oXHR.send(vFD);
  }
 
  put(Newname:HTMLInputElement){
    this.name=Newname.value==''? this.name:Newname.value;
    this.http.post('/api/data',{
      phone:this.phone,
      name:this.name,
      year:this.item,
      month:this.some,
      zhiye:this.occ,
      dizhi: this.cityFliter(this.side),
      sex:this.sex
    }).subscribe((data)=>{
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
  constructor(public navCtrl: NavController, public http :Http,public navParams: NavParams,
    private reviceServe: ReviceServeProvider,private notiSer: NoticeService,private imgSer: ImgService
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
        this.city=obj.dizhi;
        this.sex=obj.sex;
      })
      this.getRequestContact();
    }
    getRequestContact() { 
      this.reviceServe.getRequestContact().subscribe(res => { 
        this.listData = res.json(); 
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
  //将对应城市码转为文字
  cityFliter(val) {
    if (typeof this.side == 'undefined') {
      return this.city;
    } else {
      this.city = '';
      var province = val.substring(0, 6);
      var shi = val.substring(7, 13);
      var xian = val.substring(14);
      this.city += this.listData[0].options.find(function (e) {
        return e.value === province;
      }).text;
      this.city += this.listData[1].options.find(function (e) {
        return e.value === shi;
      }).text;
      this.city += this.listData[2].options.find(function (e) {
        return e.value === xian;
      }).text;
      return this.city;
    }

}
}