/**
 * Created by Wade (weida1985@163.com) on 2020/2/24.
 */
'use strict';
module.exports = app => {
  app.beforeStart(async function() {
    console.info('\n========================CINCC WEAPP SERVICE START========================\n');
    global.dycKeyCache = {};
  });
};
