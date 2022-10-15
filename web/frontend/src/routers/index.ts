import VueRouter, { RouteRecordRaw } from 'vue-router'
import { HomeVue, SettingsVue } from '@pages'
const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', name: 'Home', component: HomeVue },
	{ path: '/settings', name: 'Settings', component: SettingsVue },
]

export default VueRouter.createRouter({
	routes: routes,
	history: VueRouter.createWebHashHistory(),
})
