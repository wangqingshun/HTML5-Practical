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
       var obj=JSON.parse(data["_body"]);
       this.vido=obj[0];
       this.article=obj[1];
      })
  }
  ionViewDidLoad() {
    
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.http.get('/api/share').subscribe((data)=>{
        var obj=JSON.parse(data["_body"]);
        this.vido=obj[0];
        this.article=obj[1];
        console.log(obj[0]);   
        console.log(obj[0][0].x_id);
      })
      refresher.complete();
    }, 2000);
  }

  goVideo(x_id,id){
    this.navCtrl.push(VideoPage,{x_id:x_id,id:id});
  }
  goArticle(x_id,id){
    this.navCtrl.push(ArticlePage,{x_id:x_id,id:id});
  }
  goAdd(){
    this.navCtrl.push(AddPage);
  }
  goSearch(){
    this.navCtrl.push(SerachPage);
  }
}
