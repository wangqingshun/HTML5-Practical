import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage} from '../search/search';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-serach',
  templateUrl: 'serach.html',
})
export class SerachPage {
  item1;
  img;
  food;
  fruits= [
    ['蛋炒饭',['../assets/imgs/01.jpg']],
    ['香菇肉片盖饭',['../assets/imgs/11.jpg']],
    ['红烧肉焖饭',['../assets/imgs/23.jpg']],
    ['酱爆鸡丁盖饭',['../assets/imgs/15.jpeg']],['青椒肉丝盖饭',['../assets/imgs/dcf16.jpg']],
  ['土豆烧鸡盖饭',['../assets/imgs/17.jpg']],
    ['酸汤面',['../assets/imgs/31.jpg']],['骨汤面',['../assets/imgs/dcf32.jpg']],
    ['鲜虾汤面',['../assets/imgs/39.jpg']],['香菇鸡汤面',['../assets/imgs/dcf40.jpg']],
    ['羊肉糊汤面',['../assets/imgs/41.jpg']],['蛋丝青菜荞麦汤面',['../assets/imgs/dcf42.jpg']]
];
cpLock = false;
  txt:string;
  arr:string[]=[];
  menu=["鱼香肉丝",'毛血旺',"辣炒鱿鱼丝","宫爆鸡丁","辣子鸡","泡凤爪","土豆烧排骨","辣子鸡丁","灯影牛肉","干煸牛肉丝","冬菜扣肉",
  "开水白菜","东坡肘子","干烧鱼","宫保鸡丁","川辣黄瓜","麻婆豆腐","夫妻肺片","子姜鸭","锅巴肉片","香干回锅肉","嫩蛋虾仁","麻辣水煮鱼",
    "火锅鸡","红烧猪蹄","红辣椒爆炒鳝片","麻婆豆腐鱼","麻香耗儿鱼","黄瓜皮蛋汤","酥烤大方","水煮牛肉","炸珍珠虾",
    "姜汁热窝鸡蛋","辣椒炒大肠","干煸鳝鱼","小煎鸡","担担面","泡菜鱼","白油肝片","麻辣香水鱼","腊肉","回锅鱼片",
    "麻辣豆腐","蒜蓉蒸扇贝","鱼香肉丝－川菜","川北凉粉","香酥鸭","鱼香排骨","陈麻婆豆腐","羊肉火锅",'蒜香鲶鱼',
    '姜葱基围虾',"四川凉面","粉蒸牛肉","野生菌汤","辣子脆肠","脆皮肠头","泡菜炒肉末","麻辣牛肉干","蒜蓉蒸扇贝","川味猪肝",]
  search(){
    if(this.txt==''){
      this.txt='重庆鸡公煲'
      this.arr.push(this.txt);
      localStorage.setItem("history",JSON.stringify(this.arr));
      this.txt=""
    }else{
    this.arr.push(this.txt);
    localStorage.setItem("history",JSON.stringify(this.arr));
    this.txt=""
    }
    this.http.get('/api/search').subscribe((data)=>{

    })
    //搜索功能
    //var keyWord = this.oTxt.value;
    var fruitList = this.searchByRegExp(this.txt, this.fruits);
    //console.log(fruitList);
    this.renderFruits(fruitList);
    this.renderFruits(this.fruits);
    console.log(fruitList);
    return fruitList;
    
    // window.localStorage.setItem('food',JSON.stringify(fruitList));
    // this.food=window.localStorage.getItem('food');
    
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {

  }
  ionViewWillEnter(){
    History=JSON.parse(localStorage.getItem('history'));
    if(History!=null){
      for(var index=0;index<History.length;index++){
        this.arr.push(History[index]);
      }
    }
  }
  clear(){
    window.localStorage.removeItem("history");
    this.arr=[];
  }
  // goSearch(){
  //   this.navCtrl.push(SearchPage);
  // }
  
  oList = document.getElementById('list');
  Compositionstart() {
    this.cpLock = true;
    console.log("不搜索");
  }
  Compositionend() {
    this.cpLock = false;
    console.log("汉字搜索");
    // var fruitList = searchByIndexOf(keyWord,fruits);
    var fruitList = this.searchByRegExp(this.txt, this.fruits);
    this.renderFruits(fruitList);
    }
    In() {
      if (!this.cpLock) {
        console.log("字母搜索")
        // var fruitList = searchByIndexOf(keyWord,fruits);
        var fruitList = this.searchByRegExp(this.txt, this.fruits);
        this.renderFruits(fruitList);
      }
    }
    renderFruits(list) {
      if (!(list instanceof Array)) {
        return;
      }
      //this.oList.innerHTML = '';
      var len = list.length;
      this.item1 = null;
      for (var i = 0; i < len; i++) {
        this.item1=list[i][0];
        this.img= list[i][1];
            //     item = document.createElement('li');
            //     item.innerHTML = list[i][0];
            //     var img = document.createElement("img");
            //     img.src = list[i][1];
            //     this.oList.appendChild(item);
            //     this.oList.appendChild(img);
            }
        
      }
        //模糊匹配的时候如果不区分大小写，可以使用toLowerCase()或者toUpperCase()转换之后去匹配。

        //模糊查询1:利用字符串的indexOf方法
    searchByIndexOf(keyWord, list) {
            if (!(list instanceof Array)) {
                return;
            }
            var len = list.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                //如果字符串中不包含目标字符会返回-1
                if (list[i][0].indexOf(keyWord) >= 0) {
                    arr.push(list[i]);
                }
            }
            return arr;
        }
        //正则匹配
  searchByRegExp(keyWord, list) {
            if (!(list instanceof Array)) {
                return;
            }
            var len = list.length;
            var arr = [];
            var reg = new RegExp(keyWord);
            for (var i = 0; i < len; i++) {
                //如果字符串中不包含目标字符会返回-1
                if (list[i][0].match(reg)) {
                    arr.push(list[i]);
                }
            }
            return arr;
        }
        
}

