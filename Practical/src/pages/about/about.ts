import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';
import { AddPage } from '../add/add';
// import { Http } from '@angular/http/src/http';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=0;
  vido;
  article;
  isClick(i){
    this.isActive=i;
  }
  arr=["视频","文章","关注"];
  constructor(public navCtrl: NavController) {
    // this.http.get('/api//1').subscribe((data)=>{
    //     this.vido=data;
    //   })
  }
  ionViewDidLoad() {
    
  }
  goVideo(){
    this.navCtrl.push(VideoPage);
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
  goAdd(){
    this.navCtrl.push(AddPage);
  }
}
