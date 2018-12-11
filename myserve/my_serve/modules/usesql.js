const db=require('./database');
/*
var Usesql={
	insert:'INSERT INTO User(Id,Username) VALUES(?,?)',//插入数据
	drop:'DROP TABLE User',//删除表中的所有数据
	queryAll:'SELECT * FROM User',//查找表中所有数据
	getId:'SELECT * FROM User WHERE Id=?'//查找符合id的数据
};*/
var Usesql=function(){};
Usesql.prototype.getall=function(callback){
	const sql='SELECE * FROM User';
	var items=[];
	db.query(sql,function(err,result){
		if(err){callback(true);return;}
		results.forEach((e)=>{items.push(e)});
		callback(false,items);
	});
};
Usesql.prototype.add = function(id,name, callback) {
  	const sql = 'INSERT INTO User  VALUES(?)';
  	db.query(sql, [id,name], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};
Usesql.prototype.update = function(id, name, callback) {
  const sql = 'UPDATE User SET Username = ? WHERE Id = ?';

  db.query(sql, [name, id], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};

Usesql.prototype.delete = function(id, callback) {
  const sql = 'DELETE from User WHERE id = ?';

  db.query(sql, [id], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};

Usesql.prototype.delAll = function(callback) {
  const sql = 'DELETE from User';

  db.query(sql, function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};
module.exports=Usesql;

