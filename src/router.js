import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuario from './components/Usuario.vue'
import ConseguirMockapi from './components/ConseguirMockapi.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/Usuario' },
        { path: '/Usuario', component: Usuario },
        { path: '/ConseguirMockapi', component: ConseguirMockapi },
    ]
})