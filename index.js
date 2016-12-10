'use strict';
const views = require('koa-views');

const BaseController = require('slet-basecontroller')

module.exports = class ViewController extends BaseController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
    this.query = ctx.query
    this.tpl = ''
    this.data = {}
    this.renderType = 'view'
    
    // console.log(this.app.opts.views.path)
    // console.log(this.app.opts.views.option)
    // 定义中间件
    var _views = views(this.app.opts.views.path, this.app.opts.views.option)
    this.app.defineMiddleware('koa-views', _views)
    
    // 定义global filter
    this.global_filter = ['koa-bodyparser', 'koa-views']
    
    // export
  }
}
