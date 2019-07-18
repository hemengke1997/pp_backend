<template>
  <div class="tags-view-container" id="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        ref="tag"
        v-for="tag in visitedViews"
        :key="tag.path"
        :to="{path:tag.path,query:tag.query,fullPath:tag.fullPath}"
        tag="span"
        class="tags-view-item"
        :class="isActive(tag)?'active':''"
      >
        {{tag.title}}
        <span
          v-if="!tag.meta.affix"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from "./ScrollPane";
import { mapGetters } from "vuex";
export default {
  components: { ScrollPane },
  data() {
    return {
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: {}
    };
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    closeTag() {},
    initTags() {
      this.filterAffixTags(this.routes);
      this.$store.dispatch("tagsView/addVisitedView", this.affixTags);
    },
    filterAffixTags(routes) {
      routes.forEach(route => {
        if (route.path === "/") {
          this.affixTags = route;
        }
      });
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route)
      }
      return false;
    },
    closeSelectedTag(view) {
      this.$store.dispatch('tagsView/delView',view)
      if(this.isActive(view)) {
        this.toLastView(this.visitedViews,view)
      }
    },
    toLastView(visitedViews,view) {
      const lastView = visitedViews.slice(-1)[0]
      // 跳转到这个路由去
      if(lastView) {
        this.$router.push(lastView)
      } else {
        if(view.name==='首页') {
          this.$router.replace({path:view.fullPath})
        } else {
          this.$router.push('/')
        }
      }
    },
    removeCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag in tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)

            if(tag.to.path!==this.$route.fullPath) {
              this.$store.dispatch('tagsView/updateVisitedView',this.$route)
            }
            break
          }
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      visitedViews:"tagsView/visitedViews"
    }),
    routes() {
      return this.$router.options.routes;
    },
    route() {
      return this.$route
    }
  },
  watch: {
    route() {
      this.addTags()
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  }
};
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
