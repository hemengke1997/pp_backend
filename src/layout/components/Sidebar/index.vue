<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText" 
        :unique-opened="false"
        :collapse-transition="false"
        :active-text-color="variables.menuActiveText"
        mode="vertical"
      >
        <sidebar-item></sidebar-item>
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
    }
};
</script>
<style lang="scss" scoped>

</style>
