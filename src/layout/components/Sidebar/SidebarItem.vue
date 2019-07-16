<template>

  <div class="nest-menu">
    <el-submenu index="1">
      <template slot="title">
        <svg-icon class-name="dashboard-icon" icon-class="dashboard"></svg-icon>
        <span>官网管理</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">运营推荐</template>
        <el-menu-item index="1-1-1">推荐分类</el-menu-item>
        <el-menu-item index="1-1-2">推荐内容</el-menu-item>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">公告新闻</template>
        <el-menu-item index="1-2-1">新闻类型配置</el-menu-item>
        <el-menu-item index="1-2-2">新闻内容</el-menu-item>
        <el-menu-item index="1-2-3">公告内容</el-menu-item>
        <el-menu-item index="1-2-4">banner内容</el-menu-item>
      </el-submenu>
      <el-submenu index="1-3">
        <template slot="title">游戏攻略</template>
        <el-menu-item index="1-3-1">攻略标签</el-menu-item>
        <el-menu-item index="1-3-2">攻略内容</el-menu-item>
        <el-menu-item index="1-3-3">图片相关</el-menu-item>
        <el-menu-item index="1-3-4">视频相关</el-menu-item>
      </el-submenu>
      <el-submenu index="1-4">
        <template slot="title">商品管理</template>
        <el-menu-item index="1-4-1">分类</el-menu-item>
        <el-menu-item index="1-4-2">道具</el-menu-item>
        <el-menu-item index="1-4-3">角色</el-menu-item>
        <el-menu-item index="1-4-4">标签</el-menu-item>
      </el-submenu>
    </el-submenu>


  </div>
</template>

<script>
export default {
  data(){
    const A = 1
    return {

    }
  },
  computed:{
    routes(){
      return this.$router.options.routes;
    }
  },
  AAA:{
    a:1
  },
  mounted() {
    // console.log(this.$route,"route")
    // console.log(this.$router,"router")
    // this.$router.push({
    //   query:{
    //     id:1111,
    //     name:'xxxx'
    //   }
    // })
    // const {params,query} = this.$route
    // const {path} = params
    // console.log(params,"params")
    // console.log(query,'query')
    // console.log(path,'path')
    // this.$router.replace({ path: '/' + path, query:query })
    console.log(this.routes)
    console.log(this.A)
  }
};
</script>
