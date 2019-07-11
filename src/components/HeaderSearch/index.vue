<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon icon-class="search" class-name="search-icon"  @click.stop.native="clickSvg"/>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="搜索"
      class="header-search-select"
    >
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
    </el-select>
  </div>
</template>

<script>
// fuse is a lightweight fuzzy-search module
// make search results more in line with expectations
import Fuse from "fuse.js";
import path from "path";

export default {
  name: "HeaderSearch",
  data() {
    return {
      search: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "红糖水"
        }
      ],
      searchPool: [],
      show: false,
      fuse: undefined
    };
  },
  methods: {
    clickSvg() {
      this.show = !this.show
      if(this.show){
        this.$refs.headerSearchSelect.focus();
      }
    },
    close() {
      this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    }
  },
  watch: {
    show(v) {
      if(v) {
        document.body.addEventListener('click',this.close)
      } else {
        document.body.removeEventListener('click',this.close)
      }
    }
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
