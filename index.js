'use strict';
const views = require('koa-views');

module.exports = class ViewController {
  constructor(app, ctx, next) {
    this.app = app
    this.ctx = ctx
    this.query = ctx.query
    this.next = next
    this.tpl = ''
    this.data = {}
    
    // 定义中间件
    var _views = views(this.viewPath, this.opts.views.option)
    this.app.defineMiddleware('koa-views', _views)
    
    // 定义global filter
    this.global_filter = ['koa-bodyparser', 'koa-views']
    
    // export
  }
}
