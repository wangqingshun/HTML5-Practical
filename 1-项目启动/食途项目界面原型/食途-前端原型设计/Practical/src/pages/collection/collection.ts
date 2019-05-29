import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { Http } from '@angular/http'; import { VideoPage } from '../video/video';


@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
  
})

export class CollectionPage {
  arr;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    var id=window.localStorage.getItem('id');
      this.http.get('/api/share/'+id).subscribe((data)=>{
        this.arr=JSON.parse(data['_body']);
        console.log(this.arr)
       })
  }
  
  doRefresh(refresher) {
    setTimeout(() => {
      this.http.get('/api/share').subscribe((data)=>{
        var arr=JSON.parse(data["_body"]);
      })
      refresher.complete();
    }, 1000);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CollectionPage');
  }
  goVideo(x_id,id){
    this.navCtrl.push(VideoPage,{x_id:x_id,id:id});
  }
}
