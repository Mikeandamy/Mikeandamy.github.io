<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
const activeFilter = ref('全部')
const filters = [
  '全部', 'Firmware / RTOS', 'Measurement', 'Embedded / Sensing',
  'Robotics / Motion', 'Low Power / LoRa', 'Embedded Linux',
]
const filteredProjects = computed(() => {
  if (activeFilter.value === '全部') return projects
  const map = {
    'Firmware / RTOS': ['FIRMWARE / RTOS'],
    Measurement: ['FIRMWARE / MEASUREMENT'],
    'Embedded / Sensing': ['EMBEDDED / SENSING'],
    'Robotics / Motion': ['ROBOTICS / MOTION'],
    'Low Power / LoRa': ['FIRMWARE / LOW POWER'],
    'Embedded Linux': ['EMBEDDED LINUX'],
  }
  return projects.filter(p => map[activeFilter.value]?.includes(p.category))
})
</script>

<template>
  <div class="page section-wrap inner-page">
    <div class="page-heading"><span class="section-kicker">02 / PROJECT ARCHIVE</span><h1>项目经历<span class="heading-period">.</span></h1><p>记录从需求理解、方案实现到调试验证的工程过程。项目内容以实际参与工作为基础，并区分已完成、开发中和学习验证中的部分。</p></div>
    <div class="filter-row"><button v-for="filter in filters" :key="filter" class="filter-button" :class="{ selected: activeFilter === filter }" @click="activeFilter = filter">{{ filter }}</button></div>
    <div class="project-grid archive-grid">
      <RouterLink v-for="project in filteredProjects" :key="project.id" :to="`/projects/${project.id}`" class="project-card" :class="`accent-${project.accent}`">
        <div class="project-card-top"><span class="project-number">{{ project.number }}</span><span class="project-status"><i></i>{{ project.status }}</span><span class="project-arrow">↗</span></div>
        <div class="project-art"><div class="art-ring"></div><div class="art-lines"></div><div class="art-code">{{ project.category }}</div><div class="art-core">{{ project.id === 'stm32-rtos' ? 'MCU' : project.id === 'zephyr-sensing' ? 'RADAR' : project.id === 'robot-welding' ? 'ROBOT' : project.id === 'rk3576-linux' ? 'LINUX' : project.id === 'lora-iap' ? 'LORA' : 'ADC' }}</div></div>
        <div class="project-category">{{ project.category }}</div><h3>{{ project.title }}</h3><p>{{ project.summary }}</p><div class="tag-row"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
      </RouterLink>
    </div>
    <div class="notice"><span>i</span><p>项目说明应与实际参与内容一致。公开前请检查代码、图片、网络地址和文档是否包含公司机密、客户信息或其他不宜公开的内容。</p></div>
  </div>
</template>
