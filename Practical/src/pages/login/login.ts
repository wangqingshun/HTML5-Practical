import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { FindPasswordPage } from '../find-password/find-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {
  }
  goReg(){
    this.navCtrl.push(RegisterPage);
  }
  goPas(){
    this.navCtrl.push(FindPasswordPage);
  }
  goTabs(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
