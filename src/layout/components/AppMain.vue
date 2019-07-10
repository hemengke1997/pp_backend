<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- 这里在 app-main 外部包了一层 keep-alive 主要是为了缓存 <router-view> 的，配合页面的 tabs-view 标签导航使用 -->
            <keep-alive>
                <!-- 这里的key 是为了保证唯一性，保证不同的页面 key值不同
                    或许几个页面使用的相同组件 但是他们的key不同
                 -->
                <router-view></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
    name:'AppMain'
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
