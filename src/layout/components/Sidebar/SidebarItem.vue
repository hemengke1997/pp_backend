<template>

  <div class="menu-wrapper">
    <template v-if="!item.children">
      <router-link :to="basePath">
        <el-menu-item :index="basePath" :class="{'submenu-title-noDropdown':!isNest}">
          <template slot="title">
            <svg-icon v-if="item.meta.icon" :class-name="item.meta.icon+'-icon'" :icon-class="item.meta.icon"></svg-icon>
            <span>{{item.meta.title}}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="basePath" popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="item.meta.icon" :class-name="item.meta.icon+'-icon'" :icon-class="item.meta.icon" ></svg-icon>
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item 
      v-for="child in item.children"
      :key="child.path" 
      :item="child"
      :base-path="resolvePath(child.path)"
      class="nest-menu"
      :is-nest="true"
      ></sidebar-item>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path'
export default {
  name:'sidebarItem', //加了这个name才能在这个组件中调用自己这个组件
  data(){
    return {

    }
  },
  props:{
    item:{
      type:Object,
      required:true
    },
    basePath:{
      type:String,
      default:''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  computed:{    
  },
  methods:{
    getString(num) {
      return num.toString()
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath,routePath)
    }
  },
  mounted() {
  }
};
</script>
