import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';
import { AddPage } from '../add/add';
import { Http } from '@angular/http';


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
  constructor(public navCtrl: NavController,public http:Http) {
    this.http.get('/api/share').subscribe((data)=>{
        //console.log(data);
        this.vido=JSON.parse(data["_body"]);
      })
  }
  ionViewDidLoad() {
    
  }
  goVideo(x){
    this.navCtrl.push(VideoPage,{id:x});
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
  goAdd(){
    this.navCtrl.push(AddPage);
  }
}
