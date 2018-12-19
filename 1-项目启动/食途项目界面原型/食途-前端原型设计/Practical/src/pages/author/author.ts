import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-author',
  templateUrl: 'author.html',
})
export class AuthorPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=["个人首页","个人作品"];
  goChange(input:HTMLInputElement){
    if( input.value=="已关注"){
      var result = confirm('是否取消关注！');  
      if(result){  
          alert('取消关注成功成功！');  
          input.value="+关注";
      }   
    }else{
      input.value="已关注"
    } 
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorPage');
  }

    

}
