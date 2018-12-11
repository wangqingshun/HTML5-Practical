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
  video;
  videosrc;
  touxiang;
  name;
  count=0;
  count1=123;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.id=navParams.get('id');
    this.http.get('/api/share/video/'+this.id).subscribe((data)=>{
      this.video=JSON.parse(data["_body"]);
      this.videosrc=this.video.videosrc;
      this.touxiang=this.video.touxiang;
      this.name=this.video.name;
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
  ionViewDidLoad() {
    // console.log('ionViewDidLoad VideoPage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
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
  share(){
    alert("转发该消息");
  }
}
