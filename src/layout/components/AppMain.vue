<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- 这里在 app-main 外部包了一层 keep-alive 主要是为了缓存 <router-view> 的，配合页面的 tabs-view 标签导航使用 -->
            <keep-alive :include="cachedViews">
                <!-- 这里的key 是为了保证唯一性，保证不同的页面 key值不同
                    或许几个页面使用的相同组件 但是他们的key不同
                 -->
                <router-view :key="key"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
    name:'AppMain',
    computed:{
        cachedViews(){
            return this.$store.state.tagsView.cachedViews
        },
        key() {
            return this.$route.path
        }
    }
}
</script>

