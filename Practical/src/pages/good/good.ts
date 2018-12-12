import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ArticlePage } from '../article/article';

/**
 * Generated class for the GoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-good',
  templateUrl: 'good.html',
})
export class GoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodPage');
  }
  goVideo(x){
    this.navCtrl.push(VideoPage,{id:x});
  }
  goArticle(){
    this.navCtrl.push(ArticlePage);
  }
}
