import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the JichiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jichi',
  templateUrl: 'jichi.html',
})
export class JichiPage {
  imgsrc;
  name;
  zhuliao;
  fuliao;
  peiliao;
  buzhou;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    var id=this.navParams.get('id');
    this.http.get('/api/home/tuijian/'+id).subscribe((data)=>{
      var obj=JSON.parse(data['_body']);
      this.imgsrc=obj['src'];
      this.name=obj['name'];
      this.zhuliao=obj['zhuliao'];
      this.fuliao=obj['fuliao'];
      this.peiliao=obj['peiliao'];
      this.buzhou=obj['buzhou'];
    })
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JichiPage');
  }

}
