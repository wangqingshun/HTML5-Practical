import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NextPage } from '../next/next';
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
  phone;
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FindPasswordPage');
  }
  goNext(phone:HTMLInputElement){
    this.phone=phone.value;
    this.navCtrl.push(NextPage,{phone:this.phone});
  }
  goLogin(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
}
