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
        :default-active="activeMenu"
      >
        <sidebar-item v-for="item in allRoutes" :item="item" :key="item.path" :base-path="item.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>



<script>
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";
export default {
  data() {
    return {
    }
  },
  components: { SidebarItem },
  computed: {
    variables() {
      return variables;
    },
    allRoutes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      return this.$route.path
    }
  },
  methods: {},
 
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
}
</style>
