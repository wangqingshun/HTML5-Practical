import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FindPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-password',
  templateUrl: 'find-password.html',
})
export class FindPasswordPage {

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FindPasswordPage');
  }
  goLogin(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
}
