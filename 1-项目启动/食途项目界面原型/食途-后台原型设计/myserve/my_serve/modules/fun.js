function Fun(len) {
　　this.getname=function(){
　　	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_*';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　	var len = chars.length;
　　	var name = '';
　　	for (i = 0; i < 9; i++) {
　　　　	name+= chars.charAt(Math.floor(Math.random() * len));
　　	}
　　	return name;
  	};
}
module.exports = Fun;