import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerachPage } from '../serach/serach';

/**
 * Generated class for the Tuijian2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuijian2',
  templateUrl: 'tuijian2.html',
})
export class Tuijian2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){
    this.navCtrl.push(SerachPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tuijian2Page');
  }

}
