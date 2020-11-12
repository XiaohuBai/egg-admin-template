const moment = require('moment')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

let codeMap = {
   '0000': '请求成功。',
   '0002': '登录成功。',

   '0100': '参数错误',
   '0101': '内部异常',
   '0102': '登录失败，用户名或密码错误。',
   '0103': '注册失败，手机号已存在。',
   '0104': '申请token失败。',
   '0105': '用户信息不存在',
   '0106': 'toekn设置失败',
   '0108': '上传图片格式错误',
   '0109': '上传视频格式错误',
   '0110': '上传录音格式错误'

}

// 处理成功响应
exports.success = ({ ctx, data = {}, code = '0000', msg = '请求成功' }) => {
   ctx.body = {
      code: code,
      msg: codeMap[code],
      data: data
   }
   ctx.status = 200
}
// 处理错误响应
/* exports.error = ({ ctx, err = null, code = '0100', msg = '请求失败' }) => {
   ctx.body = {
      code: code,
      msg: errorCode[code],
      data: err,

   }
   ctx.status = 200
} */