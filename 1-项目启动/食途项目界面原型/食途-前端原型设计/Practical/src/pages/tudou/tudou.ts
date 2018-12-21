import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TudouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tudou',
  templateUrl: 'tudou.html',
})
export class TudouPage {
  items=[];
  isActive=0;
  arr=['营养功效','食用宜忌','做法'];
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TudouPage');
  }

}
