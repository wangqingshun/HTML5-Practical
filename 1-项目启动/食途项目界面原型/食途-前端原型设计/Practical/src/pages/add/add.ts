import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImgService } from '../../services/ImgService.service';
import { NoticeService } from '../../services/NoticeService.service'
import { ReviceServeProvider } from '../../providers/revice-serve/revice-serve';
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

  takePhoto(){
    this.initImgSer();
    this.imgSer.startCamera();
  }
  choosePicture(){
    this.initImgSer();
    this.imgSer.openImgPicker();
  }
  
    
}
