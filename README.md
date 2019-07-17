# element-ui + vue全家桶 实现一个管理后台

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
### 开发过程中，发现vue2.6的slot有新的特性， 以前的scope被vue2.5的slot-scope替代，现在slot-scope又被v-slot代替了 slot也废弃了 用v-slot代替 
[vue官网对插槽的介绍](https://cn.vuejs.org/v2/guide/components-slots.html)

[vue官网对v-slot的介绍](https://cn.vuejs.org/v2/api/#v-slot)

---
### Slot的通俗理解
是“占坑”，在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中<slot>位置），当插槽也就是坑<slot name=”mySlot”>有命名时，组件标签中使用属性slot=”mySlot”的元素就会替换该对应位置内容；
.sync修饰符  vue2.3重新加入的 用来修饰事件  在dialog中用到了这个修饰符   :visible.sync 情况如下：dialog中有个slot footer 点击footer中的按钮时可以改变dialog的显示隐藏  点击dialog右上角的X也可以改变dialog的显示隐藏， 此时用.sync，就是当子组件改变了一个prop值时，这个变化也会同步到父组件中

---
#### 对vue-Router的理解
1. 起步
2. **嵌套路由**
3. 路由元信息
4. 路由懒加载
----
**1.起步**
    1. 安装路由（用vue-cli会自动安装）
    2. 定义路由组件（也就是根据不同路由来显示的组件）
    3. 创建路由路由实例，通常在roter文件夹下的index.js中，代码如下：
    4. 在main.js中引入router，并挂载到实例对象上
```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import officeRouter  from './modules/office'

export default new Router({
  routes:[
    {
      path:'/',
      name:'index',
      meta:{title:'首页'}
    },
    officeRouter,
  ]
})
```

----
#### path.resolve()的理解
```javascript
  path.resolve(___dirname,'dist')
```
官方解释
> `path.resolve()` 方法会把一个路径或路径片段的序列解析为一个绝对路径。给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

给的例子：
```javascript
  path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
path.resolve([…paths])里的每个参数都类似在当前目录执行一个cd操作，从左到右执行，返回的是最后的当前目录

这样理解才能和文档对上号
`path.resolve('/foo/bar','./baz');`相当于：
```javascript
cd /foo/bar //此时当前路径为 /foo/bar
cd ./baz //此时路径为 /foo/bar/baz
```
`path.resolve('/foo/bar', '/tmp/file/');`相当于：
```javascript
cd /foo/bar //此时路径为 /foo/bar
cd /tmp/file/ //此时路径为 /tmp/file
```
`path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');`// 如果当前工作目录为 /home/myself/node，相当于：
```javascript 
cd wwwroot //此时路径为/home/myself/node/wwwroot
cd static_files/png/ //此时路径为/home/myself/node/wwwroot/static_files/png/
cd ../gif/image.gif //这里用cd描述其实是不对的。。。。此时路径为/home/myself/node/wwwroot/static_files/gif/image.gif
```