<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon icon-class="search" class-name="search-icon" @click.stop.native="clickSvg" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="搜索"
      class="header-search-select"
      @change="change"
    >
      <el-option v-for="item in options" :key="item.value" :value="item" :label="item.title.join(' > ')" />
    </el-select>
  </div>
</template>

<script>

import path from "path";
import router from "@/router";

export default {
  name: "HeaderSearch",
  data() {
    return {
      search: "",
      searchPool: [],
      show: false,
      fuse: undefined,
      options: [],
    };
  },
  methods: {
    clickSvg() {
      this.show = !this.show;
      if (this.show) {
        this.$refs.headerSearchSelect.focus();
      }
    },
    close() {
      this.$refs.headerSearchSelect.blur();
      this.options = [];
      this.show = false;
    },
    generateRoutes(routes = this.routes, basePath = "/", baseTitle = []) {
      let res = [];

      for (const router of routes) {
        if (router.hidden) {
          continue;
        }
        const data = {
          path: path.resolve(basePath, router.path),
          title: [...baseTitle]
        };
        if (router.meta && router.meta.title) {
          data.title = [...baseTitle, router.meta.title];
          res.push(data);
        }
        if (router.children) {
          const tempRoutes = this.generateRoutes(
            router.children,
            data.path,
            data.title
          );
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
    querySearch(query) {
      if (query !== "") {
        this.options = this.searchPool.filter(item=>{
          let title = item.title.join('')
          return title.indexOf(query) != -1
        })
        console.log(this.options)
        console.log(this.searchPool,'111')
      } else {
        this.options = [];
      }
    },
    change(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    },
  },
  watch: {
    show(v) {
      if (v) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    },
    routes() {
      this.searchPool = this.generateRoutes(this.routes)
    },
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes();
  }
};
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
