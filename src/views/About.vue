<script setup>
const capabilities = [
  {
    n: '01',
    title: 'MCU & Firmware',
    desc: '使用 C 语言开展 STM32 固件开发，涉及外设驱动、数据采集、固件升级与设备联调。',
    tags: 'C · STM32 HAL · DMA · IAP · LVGL',
  },
  {
    n: '02',
    title: 'RTOS & Connectivity',
    desc: '围绕实时任务、串口收发、RS485 多节点通信和 Modbus 协议开展开发与调试。',
    tags: 'RT-Thread · Zephyr · UART · RS485 · Modbus',
  },
  {
    n: '03',
    title: 'Sensing & Measurement',
    desc: '开展 ADC 数据采集、传感器总线调试，并推进雷达测距和运动状态感知相关集成。',
    tags: 'ADS1255 · A121 · BMI270 · SPI · I²C',
  },
  {
    n: '04',
    title: 'Robotics & Embedded Linux',
    desc: '使用 C++/Qt 开展工业机器人控制端开发，同时实践 ARM Linux 网络配置与应用调试。',
    tags: 'C++ · Qt · ServoJ · RK3576 · TCP/IP',
  },
]
</script>

<template>
  <div class="page section-wrap inner-page about-page">
    <div class="page-heading">
      <span class="section-kicker">03 / ABOUT THE ENGINEER</span>
      <h1>关于我<span class="heading-period">.</span></h1>
      <p>保持好奇，重视细节，用清晰的工程过程解决实际问题。</p>
    </div>

    <div class="about-intro">
      <div class="about-monogram">YUN<small>EMBEDDED / ENGINEER</small></div>
      <div>
        <span class="section-kicker">HELLO, WORLD</span>
        <p>我是一名嵌入式软件工程师，拥有 3 年以上相关工作经验，主要关注嵌入式固件、实时操作系统、设备通信、传感器集成与工业控制。</p>
        <p>项目实践涉及 STM32、RT-Thread、Zephyr、LoRa 终端、数据采集设备，以及基于 C++/Qt 的工业机器人控制程序。我重视从需求理解、软硬件接口调试到系统联调的完整过程，也会记录问题定位思路和实际验证结果。</p>
        <p>目前持续拓展嵌入式 Linux 与机器人控制相关能力。本站仅展示可以公开的项目经历；对于尚在开发或验证中的功能，会明确标注当前状态。</p>
      </div>
    </div>

    <section class="capability-section">
      <div class="section-heading"><div><span class="section-kicker">CAPABILITIES</span><h2>技术能力<span class="heading-period">.</span></h2></div></div>
      <div class="capability-list">
        <div v-for="item in capabilities" :key="item.n" class="capability-row">
          <span class="cap-number">{{ item.n }}</span>
          <div><h3>{{ item.title }}</h3><p>{{ item.desc }}</p><small>{{ item.tags }}</small></div>
          <span class="cap-arrow">↗</span>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="section-heading"><div><span class="section-kicker">ENGINEERING PATH</span><h2>技术实践方向<span class="heading-period">.</span></h2></div></div>
      <div class="timeline">
        <div><span class="timeline-dot"></span><small>01 / FOUNDATION</small><h3>MCU 与实时系统</h3><p>持续实践外设驱动、通信协议、RTOS 任务协作、固件升级与现场调试。</p></div>
        <div><span class="timeline-dot"></span><small>02 / INTEGRATION</small><h3>传感器与设备集成</h3><p>结合 ADC、惯性传感器和雷达测距方案，推进数据采集、驱动适配与系统验证。</p></div>
        <div><span class="timeline-dot"></span><small>03 / EXPANSION</small><h3>Linux 与机器人控制</h3><p>拓展 ARM Linux、网络通信和实时性知识，并结合机器人运动控制开展工程实践。</p></div>
      </div>
    </section>

    <div class="notice"><span>i</span><p>联系方式与 GitHub 链接暂未公开。后续可以在此补充公开仓库、技术文章、脱敏后的系统框图和实物照片；请勿上传公司机密、客户资料或密钥。</p></div>
  </div>
</template>
