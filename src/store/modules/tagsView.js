const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW(state,view){
        if(state.visitedViews.some(v=>v.path===view.path)) return
        state.visitedViews.push(
            Object.assign({},view,{
                title:view.meta.title || 'no-name'
            }) 
        )
    },
    ADD_CACHED_VIEW(state,view){
        if(state.cachedViews.includes(view.name)) return
        if(!view.meta.noCache) {
            state.cachedViews.push(view.name)
        }
    },
    DEL_VISITED_VIEW(state,view) {
        for(let[index,item] of state.visitedViews.entries()) {
            if(item.path===view.path) {
                state.visitedViews.splice(index,1)
            }
        }
    },
    DEL_CACHED_VIEW(state,view) {
        
    }
}
const actions = {
    addVisitedView({commit},view) {
        commit('ADD_VISITED_VIEW',view)
    },
    addCachedView({commit},view) {
        commit('ADD_CACHED_VIEW',view)
    },
    addView({dispatch},view) {
        dispatch('addVisitedView',view)
        dispatch('addCachedView',view)
    },
    delView({dispatch},view) {
        dispatch('delVisitedView',view)
        dispatch('delCachedView',view)
    },
    delVisitedView({commit},view) {
        commit('DEL_VISITED_VIEW',view)
    }, 
    delCachedView({commit},view) {
        commit('DEL_CACHED_VIEW',view)
    },
    updateVisitedView({dispatch},view) {}
}

// 局部的getters
const getters = {
    visitedViews:state=>state.visitedViews,
    cachedViews:state=>state.cachedViews
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}

