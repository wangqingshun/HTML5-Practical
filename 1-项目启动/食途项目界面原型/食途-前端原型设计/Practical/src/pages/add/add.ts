import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { FileTransfer , FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
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

  takePhoto(){
    this.initImgSer();
    //this.imgSer.startCamera();
    // const options: CameraOptions = {
    //   quality: 100,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    // this.camera.getPicture(options).then((imageData) => {
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   alert("版本不兼容，请从相册选取");
    // });
  }
  choosePicture(){
    this.initImgSer();
    //this.imgSer.openImgPicker();
  }
  
    
}
