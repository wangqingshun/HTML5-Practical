import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';
import { AddPage } from '../add/add';
import { Http } from '@angular/http';
import { SerachPage } from '../serach/serach';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  vido;
  article;
  name;
  constructor(public navCtrl: NavController,public http:Http) {
    this.http.get('/api/share').subscribe((data)=>{
       var obj=JSON.parse(data["_body"]);
       this.vido=obj[0];
       this.article=obj[1];
      })
      this.name=JSON.parse(localStorage.getItem('history'));
      console.log(this.name)
      this.http.post('/api/data',{
        name:this.name
      }).subscribe((data)=>{
        var obj=JSON.parse(data['_body']);
        if(obj.code==200){
          console.log("查询成功");
        }else{
          console.log("没有相关内容");
        }
      })
  }
  ionViewDidLoad() {
  }
  goVideo(x_id,id){
    this.navCtrl.push(VideoPage,{x_id:x_id,id:id});
  }
  goArticle(x_id,id){
    this.navCtrl.push(ArticlePage,{x_id:x_id,id:id});
  }

}
