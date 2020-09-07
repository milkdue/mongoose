// 引入模型对象
let stuModel = require('./model/studentModel');
let db = require('./dbModel/connect');
let operation = require('./operation/operation');

db(function(err){
    if(err){
        console.log(err);
    }else{
        // 操作数据库
        operation();
    }
})