///<reference path="../../alert/alert.d.ts"/>  
import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Http } from '@angular/http'
import { TabsPage } from '../tabs/tabs';

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
  src;
  x=Math.ceil(Math.random()*7);
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.src="../../assets/imgs/yanzhengma"+this.x+".jpg";

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage');
  }
  f(){
    this.x=Math.ceil(Math.random()*7);
    this.src="../../assets/imgs/yanzhengma"+this.x+".jpg";
  }
  goLogin(phone:HTMLInputElement,yanzheng:HTMLInputElement,password:HTMLInputElement,rpassword:HTMLInputElement){
    var arr=["9#jw","hmzu","v9am","7wob","3n3D","m8k2","dwse"];
    var yanzhengma=yanzheng.value.toLocaleLowerCase();
    if(phone.value.length!=11){
      Alert("请输入正确的手机号");
    }else if(password.value!=rpassword.value){
      Alert("两次输入的密码不一致");
    }else if(yanzhengma != arr[this.x-1]){
      Alert("验证码错误");
    }
    else{
      this.http.post('/api/reg',{phone:phone.value,psw:password.value}).subscribe((data)=>{
        console.log(data);
        //this.app.getRootNavs()[0].setRoot(LoginPage);
        var obj=JSON.parse(data['_body']);
        if(obj['code'] == 200){
          Alert(obj['msg']+"三秒钟跳转到首页");
          this.app.getRootNavs()[0].setRoot(TabsPage);
        }
        else if(obj['code'] == 1){
          Alert(obj['msg']+"三秒钟跳转到登录页");
          this.app.getRootNavs()[0].setRoot("LoginPage");
        }
        else{
          Alert(obj['msg']);
        }
      })
    }
  }
}
