import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ArticlePage } from '../article/article';

/**
 * Generated class for the WorksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})
export class WorksPage {
  public username:string;
  arr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    var id=window.localStorage.getItem('id');
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
  
  goArticle(x_id,id){
    this.navCtrl.push(ArticlePage,{x_id:x_id,id:id});
  }
  ionViewWillEnter(){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorksPage');
  }

}
