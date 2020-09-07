// 获取模块
let mongoose = require('mongoose');
// 使用新的索引创建器器
mongoose.set('useCreateIndex', true);
// 启用数据库
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true });// 使用新的url解析器，解决了安全问题。 使用统一的拓扑结构
// 绑定监听
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log('数据库连接失败!');
    } else {
        // 操作数据库
        let Schema = mongoose.Schema;
        // 制定规则
        let stuRule = new Schema({
            stu_id: {
                // 限制类型
                type: String,
                // 必填项
                required: true,
                // 唯一，不可重复
                unique: true
            },
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            sex: {
                type: String,
                required: true
            },
            // 必须是数组，每一项必须是数组
            hobby: [String],
            // 接收任何数据
            info: Schema.Types.Mixed,
            // 不写默认加
            date: {
                type: Date,
                default: Date.now()
            },
            enable_flag: {
                type: String,
                default: 'Y'
            }
        });
        // 操作的集合,生成模型对象
        let stuModel = mongoose.model('students', stuRule);
        // 新增
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
        stuModel.find({name: 'zhangsan'}, {age: 1, _id: 0}, function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data)
            }
        });
        // findOne 返回对象，没有返回null
        stuModel.findOne({name: 'lisi'}, function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data)
            }
        });
        // 更新
        stuModel.updateOne({name: 'lisi'}, {age: 20}, function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data)
            }
        });
        // 删除
        stuModel.deleteMany({age: 18}, function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data)
            }
        });
    }
});

