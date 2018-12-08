import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  count=0;
  count1=123;
  changeImg(like:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      like.src="../assets/imgs/star.png";
    }else{
      like.src="../assets/imgs/xing.png";
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
  }
  changeGood(good:HTMLInputElement,num:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      good.src="../assets/imgs/like.png";
      this.count1++;
      document.getElementsByClassName("num").innerHTML=this.count1;
    }else{
      good.src="../assets/imgs/heart.png";
      this.count1--;
    }
  }
  share(){
    alert("转发该消息");
  }
}
