'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

   const { router, controller } = app
   const jwt = app.middleware.jwt();

   router.get('/', controller.home.index)

   //微信接口
   router.get('/wechat', controller.wechat.auth)
   // router.post('/wechat', controller.wechat.event)

   //用户操作
   router.post('/login', controller.user.login)
   router.post('/userInfo', jwt, controller.user.userInfo)

   //文件上传/下载
   router.post('/UploadHeadImg', jwt, controller.upload.addHeadImg)
   router.post('/UploadVideo', jwt, controller.upload.addVideo)
   router.post('/UploadVoice', jwt, controller.upload.addVoice)

   //excel导入/导出

};
