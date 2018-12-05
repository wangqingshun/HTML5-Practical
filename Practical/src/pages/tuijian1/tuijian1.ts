import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerachPage } from '../serach/serach';

/**
 * Generated class for the Tuijian1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuijian1',
  templateUrl: 'tuijian1.html',
})
export class Tuijian1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tuijian1Page');
  }
  search(){
    this.navCtrl.push(SerachPage);
  }
}
