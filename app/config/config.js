/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:44:35
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-28 23:18:08
 * @Description: 描述
 */

'use strict';

const config = {
  weapp: {
    AppId: 'wx2ccdd2ba3',
    AppSecret: '09a1fe1a24435237df870a37',
  },

  officialAccount: {
    Token: 'cic',
    EncodingAESKey: 'pyLxzgQvmlNJyLlnkQj',
    AppId: 'wxc2cd',
    AppSecret: '77111f6e9f',
  }
};

// eslint-disable-next-line no-new-func
exports.get = name => (new Function('config', `return config.${name}`))(config);
