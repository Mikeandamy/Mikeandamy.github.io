<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activePath = computed(() => route.path.startsWith('/projects') ? '/projects' : route.path)
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/" aria-label="返回首页">
        <span class="brand-name">YUN<span class="brand-dot">/</span>ENGINEER</span>
      </RouterLink>
      <nav class="nav-links" aria-label="主导航">
        <RouterLink to="/" :class="{ active: activePath === '/' }">首页 <span>01</span></RouterLink>
        <RouterLink to="/projects" :class="{ active: activePath === '/projects' }">项目经历 <span>02</span></RouterLink>
        <RouterLink to="/about" :class="{ active: activePath === '/about' }">关于我 <span>03</span></RouterLink>
      </nav>
      <a class="top-cta" href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    </header>

    <main><RouterView /></main>

    <footer class="footer">
      <div class="footer-brand"><span>BUILD · DEBUG · IMPROVE</span></div>
      <p>Designed for engineering, built with curiosity.</p>
      <span class="footer-copy">© {{ new Date().getFullYear() }} YUN</span>
    </footer>
  </div>
</template>
