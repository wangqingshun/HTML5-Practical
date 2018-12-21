import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerachPage } from '../serach/serach';
import { Http } from '@angular/http'
/**
 * Generated class for the Tuijian1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuijian1',
  templateUrl: 'tuijian1.html',
})
export class Tuijian1Page {
  arr;
  f(x){
    this.http.get("/api/home/xiangqing/"+x).subscribe((data)=>{
      this.arr=JSON.parse(data["_body"]);
    })
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get("/api/home/xiangqing/1").subscribe((data)=>{
      this.arr=JSON.parse(data["_body"]);
    })
  }

  ionViewDidLoad() {
    
  }
  search(){
    this.navCtrl.push(SerachPage);
  }
}
