'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

   async login() {

      const { ctx, service } = this

      const loginRule = {
         mobile: { type: 'string', required: true, allowEmpty: false },
         password: { type: 'string', required: false, allowEmpty: false }
      };

      try {
         ctx.validate(loginRule);
      } catch (err) {
         return ctx.helper.success({ ctx, data: {}, code: '0100' })

      }

      try {
         const parms = ctx.request.body
         const { data, code } = await service.userService.login(parms)
         ctx.helper.success({ ctx, data, code })

      } catch (err) {
         ctx.logger.error('user.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }

   async userInfo() {

      const { ctx, service } = this
      const userInfoRule = {
         phoneNumber: { type: 'string', required: true, allowEmpty: false }
      }
      try {
         ctx.validate(userInfoRule)
      } catch (err) {
         return ctx.helper.success({ ctx, data: {}, code: '0100' })
      }

      try {
         const parms = ctx.request.body
         const { data, code } = await service.userService.userInfo(parms)
         ctx.helper.success({ ctx, data, code })

      } catch (err) {
         ctx.logger.error('user.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }

   }
}


module.exports = UserController;
