import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Sub from '@/pages/Sub'
import Mine from '@/pages/Mine'
import Search from '@/pages/Search'
import Message from '@/pages/Message'
import Like from '@/pages/Like'
import About from '@/pages/About'
import Detail from '@/pages/Detail'
import Collection from '@/pages/Collection'
import Guide from '@/pages/Guide'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'guide',
            component: Guide
        }, {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/sub',
            name: 'sub',
            component: Sub
        },
        {
            path: '/my',
            name: 'my',
            component: Mine
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/msg',
            name: 'msg',
            component: Message
        },
        {
            path: '/like',
            name: 'like',
            component: Like
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        },
        {
            path: '/coll',
            name: 'coll',
            component: Collection
        }
    ]
})