import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditionPage } from './edition';

@NgModule({
  declarations: [
    EditionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditionPage),
  ],
})
export class EditionPageModule {}
