import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';
import { Http } from '@angular/http';
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
  touxiang;
  person;
  name ;
  imgsrc ;
  buzhou ;
  fuliao ;
  zhuliao ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    var id=this.navParams.get('id');
    var x_id=this.navParams.get('x_id');
    this.http.get('/api/share/article/'+id,{"params":{id:id,x_id:x_id}}).subscribe((data)=>{
      var obj=JSON.parse(data['_body'])[0][0];
      this.touxiang=JSON.parse(data['_body'])[1][0].head;
      this.person=JSON.parse(data['_body'])[1][0].name;
      this.name = obj.name;
      this.imgsrc = obj.src;
      this.buzhou = obj.buzhou.split(";");
      this.fuliao = obj.fuliao;
      this.zhuliao = obj.zhuliao; 
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
    console.log('ionViewDidLoad ArticlePage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
  }
  changeGood(good:HTMLInputElement,num:HTMLInputElement){
    this.count++;
    if(this.count%2==0){
      good.src="../assets/imgs/like.png";
      this.count1++;
      document.getElementsByClassName("num")[0].innerHTML=this.count1.toString();
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
  share(){
    alert("转发该消息");
  }
EvaluateInfo = {content: ''};
push(){
  console.log(this.EvaluateInfo.content)
  this.EvaluateInfo.content='';
}
}
