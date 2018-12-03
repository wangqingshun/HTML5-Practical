import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=["视频","文章","关注"];
  constructor(public navCtrl: NavController) {

  }
  goVideo(){
    this.navCtrl.push(VideoPage);
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
}
