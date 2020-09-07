let mongoose = require('mongoose');
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
module.exports = stuModel;