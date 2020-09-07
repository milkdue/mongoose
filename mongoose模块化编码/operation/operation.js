let stuModel = require('../model/studentModel')
module.exports = function() {
    // stuModel.create({
    //     stu_id: '004',
    //     name: 'zhaoliu',
    //     age: 18,
    //     sex: '女',
    //     hobby: ['抽烟', '喝酒', '烫头'],
    //     info: 6666
    // }, function(err, data){
    //     if(err){
    //         console.log(错误, err)
    //     }else{
    //         console.log(data);
    //     }
    // });
    // 查询
    // find返回数组
    stuModel.find({ name: 'zhangsan' }, { age: 1, _id: 0 }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
    // findOne 返回对象，没有返回null
    stuModel.findOne({ name: 'lisi' }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
    // 更新
    stuModel.updateOne({ name: 'lisi' }, { age: 20 }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
    // 删除
    stuModel.deleteMany({ age: 18 }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
}