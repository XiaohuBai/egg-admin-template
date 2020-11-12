'use strict';

/** @type Egg.EggPlugin */
module.exports = {
   // had enabled by egg
   // static: {
   //   enable: true,
   // }
   jwt: {
      enable: true,
      package: "egg-jwt"
   },
   cors: {
      enable: true,
      package: 'egg-cors',
   },
   /*  oss: {
       enable: true,
       package: 'egg-oss',
   }, */
   multipart: {
      enable: true,
      package: 'egg-multipart',
   },
   // 表单验证
   validate: {
      enable: true,
      package: 'egg-validate',
   },

   /*  mongoose: {
       enable: true,
       package: 'egg-mongoose',
    }, */
   redis: {
      enable: true,
      package: 'egg-redis',
   },
   mysql: {
      enable: true,
      package: 'egg-mysql',
   },
   /*  sequelize: {
       enable: true,
       package: 'egg-sequelize',
    } */
};
