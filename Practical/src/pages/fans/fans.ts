import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorPage } from '../author/author';

/**
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fans',
  templateUrl: 'fans.html',
})
export class FansPage {
  fan=[{id:1,src:"../../assets/imgs/timg.jpg",h2:'我爱厨房',p:'厨房小达人'},
  {id:2,src:"../../assets/imgs/tx1.jpeg",h2:'厨房新秀',p:'厨房，让人幸福的地方'},
  {id:3,src:"../../assets/imgs/tx2.jpeg",h2:'厨房小新秀',p:'烘焙美食，做好每一餐，快乐每一天。'},
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  fans(i){
    this.navCtrl.push(AuthorPage,{id:i});
  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad FansPage');
  }

}
