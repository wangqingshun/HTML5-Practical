import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';
import { Http } from '@angular/http';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  arr=[];
  array=[];
  x_id;
  pinglun;
  length;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
     var id=window.localStorage.getItem('id');
    this.http.get('/api/pinglun/'+id).subscribe((data)=>{
      this.pinglun=JSON.parse(data['_body']);
      this.length=JSON.parse(data['_body']).length;
      for(var i=0;i<this.length-1;i++){
        if(this.pinglun[i].id==id){
          this.array.push(this.pinglun[i].neirong);
        }
      }
    });
    this.http.get('/api/share/').subscribe((data)=>{
      var obj=JSON.parse(data['_body'])[1];
      console.log(obj[1].id);
      for(var i=0;i<obj.length-1;i++){
        if(id==obj[i].id){
          this.arr.push(obj[i])
          console.log(obj[i]);
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  goVideo(x){
    this.navCtrl.push(VideoPage,{id:x});
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
}
