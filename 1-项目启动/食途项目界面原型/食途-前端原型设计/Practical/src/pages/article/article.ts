import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import { style } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  id;
  x_id;
  touxiang;
  person;
  name ;
  imgsrc ;
  buzhou ;
  fuliao ;
  zhuliao ;
  zancount;
  flage=true;
  pinglun;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.id=this.navParams.get('id');
    this.x_id=this.navParams.get('x_id');
    this.http.get('/api/share/article/'+this.id,{"params":{id:this.id,x_id:this.x_id}}).subscribe((data)=>{
      var obj=JSON.parse(data['_body'])[0][0];
      this.touxiang=JSON.parse(data['_body'])[1][0].head;
      this.person=JSON.parse(data['_body'])[1][0].name;
      this.name = obj.name;
      this.imgsrc = obj.src;
      this.buzhou = obj.buzhou.split(";");
      this.fuliao = obj.fuliao;
      this.zhuliao = obj.zhuliao; 
      this.zancount=obj.zan;
    });
    this.http.get('/api/pinglun/'+this.x_id).subscribe((data)=>{
      this.pinglun=JSON.parse(data['_body']);
      console.log(this.pinglun);
    })
  }
  count=0;
  count1=123;
  changeImg(like:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      like.src="../assets/imgs/star.png";
    }else{
      like.src="../assets/imgs/xing.png";
    }
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ArticlePage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
  }
  changeGood(heart:HTMLInputElement){
    // this.count++;
    // if(this.count%2==0){
    //   good.src="../assets/imgs/like.png";
    //   this.count1++;
    //   document.getElementsByClassName("num")[0].innerHTML=this.count1.toString();
    // }else{
    //   good.src="../assets/imgs/heart.png";
    //   this.count1--;
    // }
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
  share(){
    alert("转发该消息");
  }
EvaluateInfo = {content: ''};
push(){
  this.http.post('/api/pinglun',{id:this.id,x_id:this.x_id,content:this.EvaluateInfo.content}).subscribe((data)=>{
    console.log(data);
    this.http.get('/api/pinglun/'+this.x_id).subscribe((data)=>{
      this.pinglun=JSON.parse(data['_body']);
      //console.log(this.pinglun);
    })
  })
  this.EvaluateInfo.content='';
}
}
