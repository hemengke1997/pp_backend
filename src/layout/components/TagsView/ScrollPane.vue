<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container">
    <slot/>
  </el-scrollbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>