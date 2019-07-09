<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :unique-opened="false"
        :collapse-transition="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText" 
        :active-text-color="variables.menuActiveText"
        mode="vertical"
      >
        <sidebar-item v-for="route in all_routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>



<script>
import variables from '@/styles/variables.scss';
import SidebarItem from './SidebarItem'
export default {
    components:{SidebarItem},
    computed:{
        variables(){
            return variables
        }
    },
    methods:{

    }
};





</script>
<style lang="scss" scoped>

</style>
