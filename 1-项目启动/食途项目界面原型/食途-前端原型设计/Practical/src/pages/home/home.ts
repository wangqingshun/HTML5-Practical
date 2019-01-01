import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tuijian1Page } from '../tuijian1/tuijian1';
import { JichiPage } from '../jichi/jichi';
import { TudouPage } from '../tudou/tudou';
import { Tuijian2Page } from '../tuijian2/tuijian2';
import { RandomPage } from '../random/random';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  len;
  lunbo=[];
  tuijian1=[];
  tuijian2=[];
  arr=[1,2,3];
  constructor(public navCtrl: NavController,public http:Http) {
    this.len=this.lunbo.length;

    this.http.get('/api/home').subscribe((data)=>{
      setTimeout(()=>{
        var obj= JSON.parse(data["_body"]);
        console.log(data["_body"]);
        this.lunbo=obj[1];
        this.tuijian1=obj[0];
        this.tuijian2=obj[2];
        this.len=3;
      },1000)
    })
  }
  tj(){
    this.navCtrl.push(Tuijian1Page);
  }
  jc(x){
    this.navCtrl.push(JichiPage,{id:x});
  }
  sc(){
    this.navCtrl.push(Tuijian2Page);
  }
  td(){
    this.navCtrl.push(TudouPage);
  }
  rd(){
    this.navCtrl.push(RandomPage);
  }
  huan(x){
    this.http.get('/api/home/'+x).subscribe((data)=>{
      var obj=JSON.parse(data["_body"]);
      if(x==1)this.tuijian1=obj;
      else this.tuijian2=obj;
    })
  };
}
