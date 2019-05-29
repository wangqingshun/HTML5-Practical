import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-tudou',
  templateUrl: 'tudou.html',
})
export class TudouPage {
  items=[];
  isActive=0;
  imgsrc;
  name;
  dapei;
  jianjie;
  yingyang;
  arr=['营养功效','食用宜忌','做法'];
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    var id=this.navParams.get('id');
    this.http.get('/api/home/tuijian/'+id).subscribe((data)=>{
      var obj=JSON.parse(data['_body']);
      console.log(JSON.parse(data['_body']));
      this.imgsrc=obj['src'];
      this.name=obj['name'];
      this.dapei=obj['dapei'];
      this.yingyang=obj['yingyang'];
      this.jianjie=obj['jianjie'];
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TudouPage');
  }

}
