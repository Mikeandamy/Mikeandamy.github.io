import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import About from './views/About.vue'
import './style.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: '首页' } },
    { path: '/projects', component: Projects, meta: { title: '项目经历' } },
    { path: '/projects/:id', component: ProjectDetail, meta: { title: '项目详情' } },
    { path: '/about', component: About, meta: { title: '关于我' } },
  ],
  scrollBehavior() { return { top: 0, behavior: 'smooth' } },
})

router.afterEach((to) => {
  document.title = `${to.meta.title || '项目详情'} | YUN — Embedded Engineer`
})

createApp(App).use(router).mount('#app')
