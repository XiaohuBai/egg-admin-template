"use strict";

const Controller = require("egg").Controller;
const config = require("../config/config");
const crypto = require('crypto');
class WeChatController extends Controller {
   async auth() {
      const { ctx } = this;
      const { signature, timestamp, nonce, echostr } = ctx.query;
      const token = config.get('officialAccount.Token');
      const arr = [token, timestamp, nonce];
      arr.sort();
      const hash = crypto.createHash('sha1');
      hash.update(arr.join(''), 'utf8');
      const sha = hash.digest('hex');
      if (sha === signature) {
         console.info('success')
         ctx.body = echostr;
      } else {
         ctx.body = 'error';
      }
   }

}

module.exports = WeChatController;
