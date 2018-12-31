import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
  id;
  obj={};
  isClick(i){
    this.isActive=i;
  }
  arr=["个人首页","个人作品"];
  goChange(input:HTMLInputElement){
    var id=window.localStorage.getItem('id');
    if( input.value=="已关注"){
      var result = confirm('是否取消关注！');  
      if(result){  
          alert('取消关注成功成功！');
          this.http.get('/api/guanzhu/quxiao/'+this.id+'/'+id).subscribe((data)=>{
            console.log(data)
          })  
          input.value="+关注";
      }   
    }else{
      this.http.get('/api/guanzhu/jiaguanzhu/'+this.id+'/'+id).subscribe((data)=>{
        console.log(data)
      })  
      input.value="已关注"
    } 
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.id=this.navParams.get('id');
    var id=window.localStorage.getItem('id');
    this.http.get('/api/author/'+this.id+'/'+id).subscribe((data)=>{
      console.log(data);
      this.obj=JSON.parse(data['_body'])[0];
      
    })
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AuthorPage');
  }

    

}
