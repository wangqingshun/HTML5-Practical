import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TudouPage } from './tudou';

@NgModule({
  declarations: [
    TudouPage,
  ],
  imports: [
    IonicPageModule.forChild(TudouPage),
  ],
})
export class TudouPageModule {}
