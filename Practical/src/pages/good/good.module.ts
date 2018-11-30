import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodPage } from './good';

@NgModule({
  declarations: [
    GoodPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodPage),
  ],
})
export class GoodPageModule {}
