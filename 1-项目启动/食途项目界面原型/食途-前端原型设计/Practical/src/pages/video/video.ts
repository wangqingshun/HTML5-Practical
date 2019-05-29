import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';
import { Http} from '@angular/http';
import * as $ from 'jquery';



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
  zancount;
  flage=true;
  pinglun;
  count=0;
  count1=123;
  start;
  length;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.id=navParams.get('id');
    this.x_id=navParams.get('x_id');
    this.http.get('/api/share/video/'+this.x_id,{"params":{id:this.id,x_id:this.x_id}}).subscribe((data)=>{
      this.video=JSON.parse(data["_body"])[0][0];
      this.videosrc=this.video.src;
      this.zancount=this.video.zan;
      this.touxiang=JSON.parse(data["_body"])[1][0].head;
      this.name=JSON.parse(data["_body"])[1][0].name;
    });
    this.http.get('/api/pinglun/'+this.x_id).subscribe((data)=>{
      this.pinglun=JSON.parse(data['_body']);
      console.log(this.pinglun);
      this.length=JSON.parse(data['_body']).length;
      // console.log(length);
    });
    var id=window.localStorage.getItem('id');
    this.http.get('/api/share/article/shoucang1/' + this.x_id, { params: { id:id } }).subscribe((data) => {
      console.log(data);
      var obj=JSON.parse(data['_body']);
      if (obj.code==100) {
        this.start = "../assets/imgs/star.png";
      } else {
        this.start = "../assets/imgs/xing.png";
      }
    })
  }
  changeImg(like:HTMLInputElement){
    var id=window.localStorage.getItem('id');
    this.http.get('/api/share/article/shoucang/' + this.x_id, { params: { id:id } }).subscribe((data) => {
      console.log(data);
      var obj=JSON.parse(data['_body']);
      if (obj.code==100) {
        this.start = "../assets/imgs/xing.png";
      } else {
        this.start = "../assets/imgs/star.png";
      }
    })
  }
  changeGood(heart:HTMLInputElement){
    var A=document.getElementById('like1');
    A.style.backgroundPosition=" ";
    var D=$('#like1').attr("rel");
    if(D === 'like') {
      this.zancount++;
      this.http.get('/api/share/article/zan/'+this.x_id,{params:{count:this.zancount}}).subscribe((data)=>{
        console.log(data);
      })
      $('#like1').addClass("heartAnimation").attr("rel","unlike");
      A.style.backgroundPosition="right";
		}
		else{
      this.zancount--;
      this.http.get('/api/share/article/zan/'+this.x_id,{params:{count:this.zancount}}).subscribe((data)=>{
        console.log(data);
      })
			$('#like1').removeClass("heartAnimation").attr("rel","like");
			$('#like1').css("background-position","left");
		}
  }
  perComment(){
    var com=document.getElementsByClassName("com")[0] as HTMLElement;
    if(this.flage){
      com.style.display='block';
      this.flage=false;
    }else{
      com.style.display='none';
      this.flage=true;
    }
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad VideoPage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage,{id:this.id});
  }
  share(){
    alert("转发该消息");
  }
  EvaluateInfo = {content: ''};
  push(){
    var id=window.localStorage.getItem('id');
    this.http.post('/api/pinglun',{id:id,x_id:this.x_id,content:this.EvaluateInfo.content}).subscribe((data)=>{
      console.log(data);
      this.http.get('/api/pinglun/'+this.x_id).subscribe((data)=>{
        this.pinglun=JSON.parse(data['_body']);
        console.log(this.pinglun);
        this.length=JSON.parse(data['_body']).length;
        console.log(length);
      })
    })
    this.EvaluateInfo.content='';
  }
}
