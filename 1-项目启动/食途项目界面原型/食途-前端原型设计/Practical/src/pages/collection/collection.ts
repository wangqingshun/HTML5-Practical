import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { Http } from '@angular/http'; 
/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CollectionPage');
  }

}
