<template>
    <section class="app-main">
      <!--  transition mode有两个值 out-in  in-out  
            其中 out-in ：当前元素先进行过渡，完成后新元素过渡进入
            in-out: 新元素先进行过渡，完成之后当前元素过渡离开
       -->
        <transition name="fade-transform" mode="out-in">

            <!-- 这里在 app-main 外部包了一层 keep-alive 主要是为了缓存 <router-view> 的，配合页面的 tabs-view 标签导航使用 -->
            <keep-alive :include="cachedViews">
                <router-view :key="key"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<script>

export default {
    name:'AppMain',
    computed:{
      cachedViews() {
        return this.$store.state.tagsView.cachedViews
      },
      key() {
        return this.$route.fullPath
      }
    },
    watch: {
      cachedViews(){
        console.log(this.cachedViews)
      }
    }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
