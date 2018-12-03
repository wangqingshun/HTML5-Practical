import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage } from '../my/my';
import { CommentPage } from '../comment/comment';
import { GoodPage } from '../good/good';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  isActive=0;
isClick(i){
  this.isActive=i;
}
arr=["消息","通知"];
  constructor(public navCtrl: NavController) {

  }
  goMy(){
    this.navCtrl.push(MyPage);
  }
  goComment(){
    this.navCtrl.push(CommentPage);
  }
  goGood(){
    this.navCtrl.push(GoodPage);
  }
}
