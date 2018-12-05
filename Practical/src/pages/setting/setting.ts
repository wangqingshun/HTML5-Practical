import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MyDataPage } from '../my-data/my-data';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SettingPage');
  }
  logout() {
    window.localStorage.clear();
    //this.navCtrl.setRoot(LoginPage);
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  goData(){
    this.navCtrl.push(MyDataPage);
  }
}
