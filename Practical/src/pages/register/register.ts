import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  phone;
  psw;
  rpsw;
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage');
  }
  goLogin(phone:HTMLInputElement,password:HTMLInputElement){
    // this.app.getRootNavs()[0].setRoot(LoginPage);
    //this.http.post('/reg',{phone:})
    console.log(phone.value);
    console.log(password.value);
  }
}
