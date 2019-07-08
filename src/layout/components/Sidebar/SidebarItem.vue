<template>
  <div class="menu-wrapper">
    <el-submenu index="1">
      <template slot="title">
        <el-menu-item>
          <i class="el-icon-s-grid"></i>
          <span>官网管理</span>
        </el-menu-item>
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
export default {};
</script>
