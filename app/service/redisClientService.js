'use strict';

const Service = require('egg').Service;
class redisClientService extends Service {
   async setToken(roleId, token) {
      const { ctx, service } = this
      try {
         return this.app.redis.set(roleId, token)
      } catch (err) {
         ctx.logger.error('redisClientService.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }
}

module.exports = redisClientService;
