const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const router = require('./router/')
const { port } = require('../config')
const { vue_ssr_pro, vue_ssr_dev } = require('./vue-ssr/')

const app = new Koa()

app.use(koaBody())

app.use(router.routes()).use(router.allowedMethods())

app.use(koaStatic(path.resolve(__dirname, '../dist/')))

if (process.env.NODE_ENV === 'production') {
  app.use(vue_ssr_pro())
} else {
  app.use(vue_ssr_dev(app))
}
app.listen(port)
