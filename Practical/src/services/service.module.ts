import {NgModule} from '@angular/core';
import {ImgService} from "./ImgService.service";
import {NoticeService} from "./NoticeService.service"
const services = [
    ImgService,
    NoticeService
];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [...services]
})
export class ServiceModule {
}