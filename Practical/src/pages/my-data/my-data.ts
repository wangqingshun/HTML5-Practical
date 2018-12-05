import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MyDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
})
export class MyDataPage {
  public username:string;
  ionViewWillEnter(){
    this.username= window.localStorage.getItem('username');
  }
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MyDataPage');
  }
  showPrompt() {    
    let prompt = this.alertCtrl.create({
        title: '昵称',
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {            
                console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {            
                console.log('Saved clicked');
            }
          }
        ]
  });
  //prompt.index
  prompt.present();
}
}
