import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';

/**
 * Generated class for the FollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  follow=[{id:1,src:"../../assets/imgs/timg.jpg",h2:'我爱厨房',p:'厨房小达人'},
  {id:2,src:"../../assets/imgs/tx1.jpeg",h2:'厨房新秀',p:'厨房，让人幸福的地方'},
];
follows(i){
  this.navCtrl.push(AuthorPage,{id:i});
}
}
