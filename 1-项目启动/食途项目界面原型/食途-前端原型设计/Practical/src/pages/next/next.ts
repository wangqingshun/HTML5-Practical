import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {
  public phone:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var val=this.navParams.get('phone');
    this.phone=val;
  }

  ionViewDidLoad() {
  }

}
