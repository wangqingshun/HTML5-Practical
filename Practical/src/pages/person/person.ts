import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { MyDataPage } from '../my-data/my-data';
import { WorksPage } from '../works/works';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';
import { CollectionPage } from '../collection/collection';
import { LookPage } from '../look/look';
import { LikePage } from '../like/like';
//import { EditionPage } from '../edition/edition';
import { AboutUsPage } from '../about-us/about-us';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  public Newname:string;
  ionViewWillEnter(){
    this.Newname= window.localStorage.getItem('username');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goData(){
    this.navCtrl.push(MyDataPage);
  }
  goWork(){
    this.navCtrl.push(WorksPage);
  }
  goFollow(){
    this.navCtrl.push(FollowPage);
  }
  goFans(){
    this.navCtrl.push(FansPage);
  }
  goCollect(){
    this.navCtrl.push(CollectionPage);
  }
  goLook(){
    this.navCtrl.push(LookPage);
  }
  goLike(){
    this.navCtrl.push(LikePage);
  }
  goSet(){
    this.navCtrl.push(SettingPage);
  }
  // goEdit(){
  //   this.navCtrl.push(EditionPage);
  // }
  goUs(){
    this.navCtrl.push(AboutUsPage);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad PersonPage');
  }

}
