'use strict';

const Service = require('egg').Service;
class userTokenService extends Service {
   async apply(user) {
      const { ctx, service } = this
      try {
         return ctx.app.jwt.sign({
            data: {
               roleId: user.roleid,
               phoneNumber: user.phonenumber
            },
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
         }, ctx.app.config.jwt.secret)

      } catch (err) {
         ctx.logger.error('userTokenService.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }
}

module.exports = userTokenService;
