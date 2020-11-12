'use strict';

module.exports = () => {
   return async (ctx, next) => {
      const bearerToken = ctx.headers.authorization;
      const token = bearerToken && bearerToken.replace('Bearer ', '');

      if (token) {
         try {
            const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            ctx.state.user = decode.data
            const c_token = await ctx.app.redis.get(`${ctx.state.user.roleId}`);
            ctx.logger.info(`redis.get.token:`, c_token)
            if (!c_token || c_token != token) {
               ctx.body = { code: '0106', msg: 'token失效', data: {} };
               ctx.status = 200;
            } else {
               await next();
            }

         } catch (err) {

            ctx.body = { code: '0106', msg: 'token失效', data: {} };
            ctx.status = 200;
            return;
         }

      } else {
         // 如果token为空，则代表客户没有登录
         ctx.body = { code: '0107', msg: 'token错误', data: {} };
         ctx.status = 200;
      }
   };
};