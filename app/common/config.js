/**
 * Created by Wade (weida1985@163.com) on 2019/12/17.
 */
'use strict';

const config = {
   weapp: {
      AppId: 'wx2ccd2774fefd2ba3',
      AppSecret: '09a1fe1a2443ff4e8a9e5237df870a37',
   },

   officialAccount: {
      Token: 'cincc',
      EncodingAESKey: 'pyLxzgQvmlNJyLlnkQjbWCp5Wc2vSRg15LYmqMLCOMo',
      AppId: 'wxc261a0ca4ace97cd',
      AppSecret: '77111f6e9f037f608fe1fdd1bbc4211c',
   }
};

// eslint-disable-next-line no-new-func
exports.get = name => (new Function('config', `return config.${name}`))(config);
