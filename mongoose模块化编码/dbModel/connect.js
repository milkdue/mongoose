/**
 * 该模块用于连接数据库，判断是否成功
 */
// 获取模块
let mongoose = require('mongoose');
const NAME = 'demo';
const PORT = '27017';
const IP = 'localhost';
mongoose.set('useCreateIndex', true);
// 启用数据库
mongoose.connect(`mongodb://${IP}:${PORT}/${NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });// 使用新的url解析器，解决了安全问题。 使用统一的拓扑结构
// 绑定监听
module.exports = function (callback) {
    mongoose.connection.on('open', function (err) {
        if (err) {
            console.log('数据库连接失败!');
            callback('connect failed');
        } else {
            callback();
        }
    });
}