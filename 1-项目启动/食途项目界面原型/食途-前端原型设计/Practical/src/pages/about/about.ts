import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';
import { AddPage } from '../add/add';
import { Http } from '@angular/http';
import { SerachPage } from '../serach/serach';


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
       var obj=JSON.parse(data["_body"]);
       this.vido=obj[0];
       this.article=obj[1];
      })
  }
  ionViewDidLoad() {
    
  }
  goVideo(x){
    this.navCtrl.push(VideoPage,{id:x});
  }
  goArticle(x){
    this.navCtrl.push(ArticlePage,{id:x});
  }
  goAdd(){
    this.navCtrl.push(AddPage);
  }
  goSearch(){
    this.navCtrl.push(SerachPage);
  }
}
