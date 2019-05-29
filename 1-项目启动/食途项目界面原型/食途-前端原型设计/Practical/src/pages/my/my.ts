import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';


@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  count=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
  changeGood(good:HTMLInputElement,num:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      good.src="../assets/imgs/like.png";
      // this.count1++;
      // document.getElementsByClassName("num").innerHTML=this.count1;
    }else{
      good.src="../assets/imgs/heart.png";
    }
  }
  perComment(){
    this.count++;
    var com=document.getElementsByClassName("com")[0] as HTMLElement;
    if(this.count%2==0){
      com.style.display='none';
    }else{
      com.style.display='block';
    }
  }
  goVideo(x){
    this.navCtrl.push(VideoPage,{id:x});
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
  share(){
    alert("转发该消息");
  }
}
