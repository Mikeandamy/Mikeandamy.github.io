<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>

<template>
  <div v-if="project" class="page section-wrap inner-page detail-page">
    <RouterLink class="back-link" to="/projects">← 返回项目列表</RouterLink>
    <div class="detail-hero" :class="`accent-${project.accent}`"><div><span class="section-kicker">{{ project.number }} / {{ project.category }}</span><h1>{{ project.title }}<span class="heading-period">.</span></h1><p>{{ project.summary }}</p><div class="tag-row"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div></div><div class="detail-art"><div class="art-ring"></div><div class="art-core">{{ project.platform }}</div><div class="detail-art-label">ENGINEERING NOTE / {{ project.number }}</div></div></div>
    <div class="detail-layout"><article class="detail-content"><section><span class="section-kicker">01 / OVERVIEW</span><h2>项目概述</h2><p>{{ project.overview }}</p></section><section><span class="section-kicker">02 / CONTRIBUTIONS</span><h2>主要工作</h2><ul class="contribution-list"><li v-for="(item, index) in project.contributions" :key="item"><span>0{{ index + 1 }}</span>{{ item }}</li></ul></section><section><span class="section-kicker">03 / HIGHLIGHTS</span><h2>技术要点</h2><div class="highlight-grid"><div v-for="item in project.highlights" :key="item">{{ item }}<span>↗</span></div></div></section><div class="notice"><span>!</span><p>建议补充脱敏后的系统框图、硬件照片、关键代码片段或测试结果。没有验证的数据不要写成已实现成果。</p></div></article><aside class="detail-sidebar"><div class="sidebar-box"><span class="section-kicker">PROJECT INFO</span><div class="info-row"><small>硬件平台</small><strong>{{ project.platform }}</strong></div><div class="info-row"><small>项目状态</small><strong>{{ project.status }}</strong></div><div class="info-row"><small>技术领域</small><strong>{{ project.category }}</strong></div><div class="info-row"><small>技术栈</small><div class="sidebar-tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div></div></div><RouterLink class="sidebar-next" to="/projects">探索其他项目 <span>↗</span></RouterLink></aside></div>
  </div>
  <div v-else class="page section-wrap inner-page not-found"><span class="section-kicker">404 / NOT FOUND</span><h1>没有找到这个项目。</h1><RouterLink class="button button-primary" to="/projects">返回项目列表</RouterLink></div>
</template>
