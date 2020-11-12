/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
   /**
    * built-in config
    * @type {Egg.EggAppConfig}
    **/
   const config = exports = {};
   config.cluster = {
      listen: {
         path: '',
         port: 80,
         hostname: '0.0.0.0',
      },
   };
   config.security = {
      csrf: {
         enable: false
      },
      domainWhiteList: ['http://localhost:80'],
   };
   config.cors = {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
   };
   config.multipart = {

   };
   // use for cookie sign key, should change to your own and keep security
   config.keys = appInfo.name + '_1602750768935_9662';

   // add your middleware config here
   config.middleware = ['errorHandler', 'reqResHandler'];
   config.redis = {
      client: {
         port: 6379,          // Redis port
         host: '127.0.0.1',   // Redis host
         password: '',
         db: 0,
      },
   }
   /* config.sequelize = {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'ai_assistant',
   }; */
   config.validate = {
      // convert: false,
      // validateRoot: false,
   };

   config.bodyParser = {
      enable: true,
      // @see https://github.com/hapijs/qs/b ... %23L8 for more options
      queryString: {
         arrayLimit: 100,
         depth: 5,
         parameterLimit: 1000,
      },
      enableTypes: ['json', 'form', 'text'],
      extendTypes: {
         text: ['text/xml', 'application/xml'],
      },
   };
   config.jwt = {
      secret: "cincc"
   }
   // add your user config here
   const userConfig = {
      // myAppName: 'egg',
      mysql: {
         // 单数据库信息配置
         client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123456',
            // 数据库名
            database: 'ai_assistant',
         },
         // 是否加载到 app 上，默认开启
         app: true,
         // 是否加载到 agent 上，默认关闭
         agent: false,
      }
   };


   return {
      ...config,
      ...userConfig,
   };
};
