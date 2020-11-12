'use strict';

const Service = require('egg').Service;
class UserService extends Service {
   async login(parms) {
      const { ctx, service } = this
      try {
         let user = await this.app.mysql.get('ai_assistant_userinfo', { phonenumber: parms.mobile })
         ctx.logger.info('mysql.user:', user)
         if (!user) {
            return { data: {}, code: '0102' }
         }

         let token = await service.userTokenService.apply(user)
         ctx.logger.info('apply.token:', token)
         if (!token) {
            return { data: {}, code: '0104' }
         }

         let status = await service.redisClientService.setToken(user.roleid, token)
         ctx.logger.info('setToken:', status)
         if (!status) {
            return { data: {}, code: '0106' }
         }

         let bean = {
            'token': token
         }
         return { data: bean, code: '0000' }

      } catch (err) {
         ctx.logger.error('userService.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }

   async userInfo(parms) {
      const { ctx, service } = this
      try {
         let user = await this.app.mysql.get('ai_assistant_userinfo', { phonenumber: parms.phoneNumber })
         ctx.logger.info('mysql.user:', user)
         if (!user) {
            return { data: {}, code: '0105' }
         }

         let bean = {
            'roleId': user.roleid,
            'userName': user.username,
            'phoneNumber': user.phonenumber,
            'unionId': user.unionid,
            'sex': user.sex
         }
         return { data: bean, code: '0000' }

      } catch (err) {
         ctx.logger.error('userService.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }
}

module.exports = UserService;
