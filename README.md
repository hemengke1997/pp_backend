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
.sync修饰符  vue2.3重新加入的 用来修饰事件  在dialog中用到了这个修饰符   :visible.sync 情况如下：dialog中有个slot footer 点击footer中的按钮时可以改变dialog的显示隐藏  点击dialog右上角的X也可以改变dialog的显示隐藏， 此时用.sync，就是当子组件改变了一个prop值时，这个变化也会同步到父组件中
