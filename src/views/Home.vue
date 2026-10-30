<script setup>
import { projects } from '../data/projects'

const skills = [
  'C / C++', 'STM32', 'RT-Thread', 'Zephyr', 'Embedded Linux',
  'UART / SPI / I²C', 'RS485 / Modbus', 'LoRa / IAP', 'Robot Control',
]
</script>

<template>
  <div class="page home-page">
    <section class="hero section-wrap">
      <div class="hero-copy">
        <div class="eyebrow"><span class="pulse"></span> EMBEDDED SYSTEMS · FIRMWARE · CONTROL</div>
        <h1>把复杂系统，<br /><span>做成可靠的工程。</span></h1>
        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/projects">探索项目 <span>↗</span></RouterLink>
          <RouterLink class="button button-ghost" to="/about">了解我的技术路线 <span>→</span></RouterLink>
        </div>
        <div class="hero-meta">
          <span><i class="status-dot"></i> EMBEDDED SOFTWARE ENGINEER</span>
          <span>BUILD · DEBUG · IMPROVE</span>
        </div>
      </div>

      <div class="hero-visual" aria-label="嵌入式系统技术示意图">
        <div class="visual-grid"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="chip-card">
          <div class="chip-top"><span>MCU / SOC</span><span class="chip-live">SYSTEM DESIGN</span></div>
          <div class="chip-symbol"><div class="chip-core">YUN</div><i v-for="n in 12" :key="n" :class="`pin pin-${n}`"></i></div>
          <div class="chip-bottom"><span>FIRMWARE</span><span>BUILD / DEBUG</span></div>
        </div>
        <div class="float-tag tag-rtos"><span class="tag-icon">⌘</span><span><b>RTOS</b><small>Real-time systems</small></span></div>
        <div class="float-tag tag-sensor"><span class="tag-icon">⌁</span><span><b>SYSTEM</b><small>Hardware → Firmware</small></span></div>
        <div class="visual-coord">FIG. 01 / SYSTEM OVERVIEW</div>
      </div>
    </section>

    <section class="section-wrap intro-strip">
      <div><span class="section-kicker">01 / WHAT I DO</span><h2>从底层驱动到系统联调</h2></div>
      <p>重视软硬件协同、通信可靠性、实时任务协作和问题定位，尽可能用可复现的调试过程与验证结果说明工程工作。</p>
    </section>

    <section class="section-wrap skill-section">
      <div class="section-heading"><div><span class="section-kicker">CORE TOOLKIT</span><h2>技术工具箱<span class="heading-period">.</span></h2></div><span class="heading-note">持续实践 · 持续迭代</span></div>
      <div class="skill-cloud"><span v-for="skill in skills" :key="skill" class="skill-pill"><i></i>{{ skill }}</span></div>
    </section>

    <section class="section-wrap featured-section">
      <div class="section-heading"><div><span class="section-kicker">SELECTED WORK</span><h2>精选项目<span class="heading-period">.</span></h2></div><RouterLink class="text-link" to="/projects">查看全部项目 <span>↗</span></RouterLink></div>
      <div class="project-grid">
        <RouterLink v-for="project in projects.slice(0, 3)" :key="project.id" :to="`/projects/${project.id}`" class="project-card" :class="`accent-${project.accent}`">
          <div class="project-card-top"><span class="project-number">{{ project.number }}</span><span class="project-arrow">↗</span></div>
          <div class="project-art">
            <div class="art-ring"></div><div class="art-lines"></div>
            <div class="art-code">{{ project.id === 'stm32-rtos' ? 'HAL / RTOS' : project.id === 'zephyr-sensing' ? 'SENSOR_NODE' : 'MOTION_PATH' }}</div>
            <div class="art-core">{{ project.id === 'stm32-rtos' ? 'MCU' : project.id === 'zephyr-sensing' ? 'RADAR' : 'ROBOT' }}</div>
          </div>
          <div class="project-category">{{ project.category }}</div><h3>{{ project.title }}</h3><p>{{ project.summary }}</p>
          <div class="tag-row"><span v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</span></div>
        </RouterLink>
      </div>
    </section>

    <section class="section-wrap contact-panel">
      <div><span class="section-kicker">LET'S TALK ENGINEERING</span><h2>好的工程，从交流开始。</h2><p>欢迎交流嵌入式开发、驱动移植、设备通信、传感器集成与机器人控制相关技术。</p></div>
      <RouterLink to="/about" class="button button-primary">更多关于我 <span>↗</span></RouterLink>
    </section>
  </div>
</template>
