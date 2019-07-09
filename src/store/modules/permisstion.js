import { constantRoutes,asyncRoutes } from '@/router'

function hasPermission(roles, route) {
    if(route.meta && route.meta.roles) {
        return roles.some(role=> )
    }
}