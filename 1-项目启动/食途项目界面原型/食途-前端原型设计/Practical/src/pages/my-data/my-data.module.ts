import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { MyDataPage } from './my-data';
import { ImgService} from "../../services/ImgService.service";
import { NoticeService } from '../../services/NoticeService.service';
@NgModule({
  declarations: [
    MyDataPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDataPage),
  ],
  providers:[ImgService,NoticeService]
})
export class MyDataPageModule {
  constructor(public navCtrl: NavController, private imgService: ImgService,private noticeService: NoticeService) {
  }

}
