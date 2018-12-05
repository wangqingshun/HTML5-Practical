import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tuijian1Page } from '../tuijian1/tuijian1';
import { JichiPage } from '../jichi/jichi';
import { TudouPage } from '../tudou/tudou';
import { Tuijian2Page } from '../tuijian2/tuijian2';
import { RandomPage } from '../random/random';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  tj(){
    this.navCtrl.push(Tuijian1Page);
  }
  jc(){
    this.navCtrl.push(JichiPage);
  }
  sc(){
    this.navCtrl.push(Tuijian2Page);
  }
  td(){
    this.navCtrl.push(TudouPage);
  }
  rd(){
    this.navCtrl.push(RandomPage);
  }
}
