import Router from 'vue-router'
import Hello from './components/HelloWorld.vue'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        } 
    ]
})
