import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';
import { Http} from '@angular/http';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  id;
  x_id;
  video;
  videosrc;
  touxiang;
  name;
  count=0;
  count1=123;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.id=navParams.get('id');
    this.x_id=navParams.get('x_id');
    this.http.get('/api/share/video/'+this.x_id,{"params":{id:this.id,x_id:this.x_id}}).subscribe((data)=>{
      this.video=JSON.parse(data["_body"])[0][0];
      this.videosrc=this.video.src;
      this.touxiang=JSON.parse(data["_body"])[1][0].head;
      this.name=JSON.parse(data["_body"])[1][0].name;
    })
  }
  changeImg(like:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      like.src="../assets/imgs/star.png";
    }else{
      like.src="../assets/imgs/xing.png";
    }
  }
  changeGood(good:HTMLInputElement,num:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      good.src="../assets/imgs/like.png";
      this.count1++;
      // document.getElementsByClassName("num").innerHTML=this.count1;
    }else{
      good.src="../assets/imgs/heart.png";
      this.count1--;
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
  ionViewDidLoad() {
    // console.log('ionViewDidLoad VideoPage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
  }
  share(){
    alert("转发该消息");
  }
  EvaluateInfo = {content: ''};
push(){
  console.log(this.EvaluateInfo.content)
  this.EvaluateInfo.content='';
}
}
