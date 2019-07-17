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

    <el-submenu v-else :index="basePath">
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
  name:'sidebar-item', //加了这个name才能在这个组件中调用自己这个组件
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
    
    hasChildRoutes(){
      const hasChildArr = []
      this.$router.options.routes.forEach(el => {
        if(el.children){
          hasChildArr.push(el)
        }
      });
      return hasChildArr
    },
    noChildRoutes() {
      const noChildArr = []
      this.$router.options.routes.forEach(el => {
        if(!el.children){
          noChildArr.push(el)
        }
      });
      return noChildArr
    },
    
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

  }
};
</script>
