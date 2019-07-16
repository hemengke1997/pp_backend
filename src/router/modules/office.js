import Layout from '@/layout';

 // 官网管理
const officeRouter = {
    path: '/office',
    component: Layout,
    redirect:'/office/recommend/type',
    name:'office',
    meta:{
        title:"官网管理",
        icon:'component'
    },
    children:[
        {
            path:'recommend',
            component:()=> import('@/views/office/recommend/index'),
            redirect:'/office/recommend/type',
            meta:{
                title:'运营推荐'
            },
            children:[
                {
                    path:'type',
                    component:()=>import('@/views/office/recommend/type'),
                    meta:{
                        title:"推荐分类"
                    }
                },
                {
                    path:'content',
                    component:()=>import('@/views/office/recommend/content'),
                    meta:{
                        title:'推荐内容'
                    }
                }
            ]
        },

        {
            path:'postnews',
            component:()=>import('@/views/office/postnews/index'),
            redirect:'/office/postnews/type',
            meta:{title:'公告新闻'},
            children:[
                {
                    path:'type',
                    component:()=>import('@/views/office/postnews/newstype'),
                    meta:{title:'新闻类型配置'}
                },
                {
                    path:'newscontent',
                    component:()=>import('@/views/office/postnews/newscontent'),
                    meta:{title:'新闻内容'}
                },
                {
                    path:'postcontent',
                    component:()=>import('@/views/office/postnews/postcontent'),
                    meta:{title:'公告内容'},
                },
                {
                    path:'bannercontent',
                    component:()=>import('@/views/office/postnews/bannercontent'),
                    meta:{title:'banner内容'}
                }
            ]
        },

        {
            path:'strategy',
            component:()=>import('@/views/office/strategy/index'),
            redirect:'/office/strategy/type',
            meta:{title:'游戏攻略'},
            children:[
                {
                    path:'type',
                    component:()=>import('@/views/office/strategy/type'),
                    meta:{title:'攻略分类'}
                },
                {
                    path:'tags',
                    component:()=>import('@/views/office/strategy/tags'),
                    meta:{title:'攻略标签'}
                },
                {
                    path:'content',
                    component:()=>import('@/views/office/strategy/content'),
                    meta:{title:'攻略内容'}
                },
                {
                    path:'picture',
                    component:()=>import('@/views/office/strategy/picture'),
                    meta:{title:'图片相关'}
                },
                {
                    path:'video',
                    component:()=>import('@/views/office/strategy/video'),
                    meta:{title:'视频相关'}
                }
            ]
        },

        {
            path:'goods',
            component:()=>import('@/views/office/goods/index'),
            redirect:'/office/goods/tags',
            meta:{title:'商品管理'},
            children:[
                {
                    path:'tags',
                    component:()=>import('@/views/office/goods/tags'),
                    meta:{title:'标签'},
                },
                {
                    path:'type',
                    component:()=>import('@/views/office/goods/type'),
                    meta:{title:'分类'}
                },
                {
                    path:'tools',
                    component:()=>import('@/views/office/goods/tools'),
                    meta:{title:'道具'}
                },
                {
                    path:'role',
                    component:()=>import('@/views/office/goods/role'),
                    meta:{title:'角色'}
                }
            ]
        }
    ]
}
export default officeRouter