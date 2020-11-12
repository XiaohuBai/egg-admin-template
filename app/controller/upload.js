'use strict';

const fs = require('fs')
const path = require('path')
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')
const download = require('image-downloader')
const Controller = require('egg').Controller;

class UploadController extends Controller {

   //上传头像
   async addHeadImg() {

      const { ctx, service } = this
      const stream = await ctx.getFileStream()
      try {

         const extname = path.extname(stream.filename).toLowerCase()
         if (extname != '.png' || extname != '.jpg') {
            ctx.helper.success({ ctx, data: {}, code: '0108' })
         }

         const uplaodBasePath = `app/public/upload/img`
         const dirName = ctx.state.user.roleId
         const fileName = `head.png`
         const target = path.join(this.config.baseDir, uplaodBasePath, dirName, fileName)
         console.info('uplaodBasePath:', uplaodBasePath, 'dirName:', dirName, 'fileName:', fileName)
         console.info('this.config.baseDir', this.config.baseDir)

         if (!fs.existsSync(path.join(this.config.baseDir, uplaodBasePath, dirName))) {
            fs.mkdirSync(path.join(this.config.baseDir, uplaodBasePath, dirName))
         }

         const writeStream = fs.createWriteStream(target)
         await awaitWriteStream(stream.pipe(writeStream))
         let bean = {
            'imgUrl': `http://${ctx.request.header.host}/public/upload/img/${dirName}/${fileName}`

         }

         ctx.helper.success({ ctx, data: bean, code: '0000' })

      } catch (err) {
         await sendToWormhole(stream)
         ctx.logger.error('upload.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }
   //上传视频
   async addVideo() {

      const { ctx, service } = this
      const stream = await ctx.getFileStream()
      try {

         const extname = path.extname(stream.filename).toLowerCase()
         if (extname != '.mp4' || extname != '.mov') {
            ctx.helper.success({ ctx, data: {}, code: '0109' })
         }

         const uplaodBasePath = `app/public/upload/video`
         const dirName = ctx.state.user.roleId
         const fileName = `${path.basename(stream.fieldname)}_${Date.parse(new Date()) / 1000}.${extname}`

         const target = path.join(this.config.baseDir, uplaodBasePath, dirName, fileName)
         console.info('uplaodBasePath:', uplaodBasePath, 'dirName:', dirName, 'fileName:', fileName)

         if (!fs.existsSync(path.join(this.config.baseDir, uplaodBasePath, dirName))) {
            fs.mkdirSync(path.join(this.config.baseDir, uplaodBasePath, dirName))
         }

         const writeStream = fs.createWriteStream(target)
         await awaitWriteStream(stream.pipe(writeStream))
         let bean = {
            'imgUrl': `http://${ctx.request.header.host}/public/upload/video/${dirName}/${fileName}`
         }

         ctx.helper.success({ ctx, data: bean, code: '0000' })

      } catch (err) {
         await sendToWormhole(stream)
         ctx.logger.error('upload.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }
   }
   //上传录音
   async addVoice() {

      const { ctx, service } = this
      const stream = await ctx.getFileStream()

      try {
         const extname = path.extname(stream.filename).toLowerCase()
         if (extname != '.mp3') {
            ctx.helper.success({ ctx, data: {}, code: '0111' })
         }

         const uplaodBasePath = `app/public/upload/voice`
         const dirName = ctx.state.user.roleId
         const fileName = `${path.basename(stream.fieldname)}_${Date.parse(new Date()) / 1000}.${extname}`

         const target = path.join(this.config.baseDir, uplaodBasePath, dirName, fileName)
         console.info('uplaodBasePath:', uplaodBasePath, 'dirName:', dirName, 'fileName:', fileName)

         if (!fs.existsSync(path.join(this.config.baseDir, uplaodBasePath, dirName))) {
            fs.mkdirSync(path.join(this.config.baseDir, uplaodBasePath, dirName))
         }

         const writeStream = fs.createWriteStream(target)
         await awaitWriteStream(stream.pipe(writeStream))
         let bean = {
            'imgUrl': `http://${ctx.request.header.host}/public/upload/voice/${dirName}/${fileName}`
         }

         ctx.helper.success({ ctx, data: bean, code: '0000' })

      } catch (err) {
         await sendToWormhole(stream)
         ctx.logger.error('upload.js:', err)
         return ctx.helper.success({ ctx, data: {}, code: '0101' })
      }

   }

}

module.exports = UploadController;
