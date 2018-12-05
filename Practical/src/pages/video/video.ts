import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  like(like:HTMLInputElement){
    // var img=document.getElementsByClassName("img")[0].children[0];
    like.src="../assets/imgs/like.png";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }
  goAuthor(){
    this.navCtrl.push(AuthorPage);
  }
}
