import Vue from 'vue'
import VueRouter from 'vue-router'
import Cliente from './components/Cliente.vue'
import ConseguirMockapi from './components/ConseguirMockapi.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/Cliente' },
        { path: '/Cliente', component: Cliente },
        { path: '/ConseguirMockapi', component: ConseguirMockapi },
    ]
})