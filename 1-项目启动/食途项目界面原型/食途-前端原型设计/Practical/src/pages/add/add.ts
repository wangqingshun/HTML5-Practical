///<reference path="../../alert/alert.d.ts"/> 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImgService } from '../../services/ImgService.service';
import { NoticeService } from '../../services/NoticeService.service'
import { ReviceServeProvider } from '../../providers/revice-serve/revice-serve';
import * as $ from 'jquery';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  imgUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams,private reviceServe: ReviceServeProvider,
    private notiSer: NoticeService,private imgSer: ImgService) {
  }
  private initImgSer() {
    this.imgSer.upload.url = ''; 
    this.imgSer.upload.success = (data) => {
    };
    this.imgSer.upload.error = (err) => {
      this.notiSer.showToast('错误：头像上传失败！');
    };
  }
  fileSelected(){
    var imagefile=document.getElementById('imageFile') as HTMLInputElement;
    var box=document.getElementById('box1');
    var files=imagefile.files;
    var img = new Image();
    if(window.URL){
      //File API
      alert(files[0].name + "," + files[0].size + " bytes");
      img.src = window.URL.createObjectURL(files[0]); //创建一个object URL，并不是你的本地路径
      img.width=200;
      img.id="img1";
      img.onload = function(e) {
          window.URL.revokeObjectURL(this['src']); //图片加载后，释放object URL
      }
      box.appendChild(img);
    }
  }
  push(){
    var img1=document.getElementById('img1');
    var id=window.localStorage.getItem('id');
    var imagefile=document.getElementById('imageFile') as HTMLInputElement;
    var $textArea = $('#text'),textArea=$textArea.val();
    var neirong=textArea;
    var obj={id:id,neirong:neirong};
    var obj1=JSON.stringify(obj);
    var oMyForm = new FormData();
    oMyForm.append("userfile", imagefile.files[0]);
    oMyForm.append("obj",obj1);
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange=function(){
      if(oReq.readyState==4 && oReq.status==200){
        var obj=JSON.parse(oReq.response);
        if(obj.code==200){
          Alert(obj['msg'],'../../assets/imgs/dui.png');
          img1.parentNode.removeChild(img1);
          $textArea.val('');
        }
      }
    }
    oReq.open('POST', 'http://39.96.21.142:3000/api/zuopin/'+id+'/'+neirong);
    oReq.send(oMyForm);
  }
  takePhoto(){
    this.initImgSer();
    this.imgSer.startCamera();
  }
  choosePicture(){
    this.initImgSer();
    this.imgSer.openImgPicker();
  }
  
    
}
