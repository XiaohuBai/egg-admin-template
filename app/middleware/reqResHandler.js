'use strict'
module.exports = (option, app) => {
   return async function (ctx, next) {

      let req_body = ctx.request.body || ctx.query || ctx.params
      ctx.logger.info('req_body', req_body)
      
      await next();
      ctx.logger.info('res_body:', ctx.body)
   }
}