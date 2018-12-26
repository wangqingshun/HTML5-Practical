///<reference path="../../alert/alert.d.ts"/> 
import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { FindPasswordPage } from '../find-password/find-password';
import{ Http } from '@angular/http';
import { HomePage} from '../home/home';

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

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  goReg(){
    this.navCtrl.push(RegisterPage);
  }
  goPas(){
    this.navCtrl.push(FindPasswordPage);
  }
  logIn(username: HTMLInputElement, password : HTMLInputElement){
    if (username.value == "" || password.value == "") {
      Alert("账户或密码不能为空",'../../assets/imgs/cuo.png');
    } 
    else{
      this.http.post('/api/login',{phone:username.value,psw:password.value}).subscribe((data)=>{
        console.log(data);
        var obj = JSON.parse(data['_body']);
        if(obj['code'] == 200){
          console.log(obj['msg']);
          window.localStorage.setItem('username',username.value);
          window.localStorage.setItem('password',password.value);
          this.app.getRootNavs()[0].setRoot(TabsPage);
        }
        else{
          Alert(obj['msg'],'../../assets/imgs/cuo.png');
        }
      })
    }
  }

}
