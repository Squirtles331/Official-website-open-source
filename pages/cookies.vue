<template>
  <div class="cookies-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          Cookie政策
        </h1>
        <p class="hero-description">
          了解我们如何使用Cookie和类似技术来改善您的体验
        </p>
      </div>
    </section>

    <!-- Cookie政策内容 -->
    <section class="content-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="notice-box">
            <p class="notice-date">最后更新：2024年12月27日</p>
            <p class="notice-text">本政策说明了我们网站上使用的Cookie类型以及如何管理它们。</p>
          </div>

          <!-- Cookie类型 -->
          <div class="cookie-types-section">
            <h2 class="section-title">Cookie类型</h2>
            <div class="cookie-types-grid">
              <div
                v-for="cookieType in cookieTypes"
                :key="cookieType.id"
                class="cookie-type-card"
                :class="cookieType.borderClass"
              >
                <div class="cookie-header">
                  <span class="cookie-icon">{{ cookieType.icon }}</span>
                  <h3 class="cookie-name">{{ cookieType.name }}</h3>
                </div>
                <p class="cookie-description">{{ cookieType.description }}</p>
                <div class="cookie-meta">
                  <p><strong>有效期：</strong>{{ cookieType.duration }}</p>
                  <p><strong>用途：</strong>{{ cookieType.purpose }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 详细说明 -->
          <div
            v-for="section in cookieSections"
            :key="section.id"
            class="policy-section"
          >
            <h2 class="section-title">{{ section.title }}</h2>
            <div class="section-content">
              <p
                v-for="(paragraph, index) in section.content"
                :key="index"
                class="paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Cookie管理 -->
          <div class="cookie-management">
            <h3 class="management-title">管理Cookie设置</h3>
            <div class="settings-list">
              <div class="setting-item">
                <div class="setting-info">
                  <h4 class="setting-name">必要Cookie</h4>
                  <p class="setting-description">网站正常运行所必需的Cookie</p>
                </div>
                <div class="setting-control">
                  <span class="always-enabled">始终启用</span>
                </div>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <h4 class="setting-name">分析Cookie</h4>
                  <p class="setting-description">帮助我们了解访问者如何使用网站</p>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="analyticsEnabled" class="toggle-input">
                  <div class="toggle-slider"></div>
                </label>
              </div>
              <div class="setting-item">
                <div class="setting-info">
                  <h4 class="setting-name">营销Cookie</h4>
                  <p class="setting-description">用于跟踪访问者并显示相关广告</p>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="marketingEnabled" class="toggle-input">
                  <div class="toggle-slider"></div>
                </label>
              </div>
            </div>
            <div class="management-actions">
              <button @click="savePreferences" class="btn btn-primary">
                保存设置
              </button>
              <button @click="acceptAll" class="btn btn-outline">
                接受所有
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: 'Cookie政策 - 开源官网',
  description: '了解我们如何使用Cookie和类似技术，以及如何管理您的Cookie偏好设置。',
  ogTitle: 'Cookie政策 - 开源官网',
  ogDescription: '了解我们如何使用Cookie和类似技术，以及如何管理您的Cookie偏好设置',
})

// 响应式状态
const analyticsEnabled = ref(true)
const marketingEnabled = ref(false)

// Cookie类型
const cookieTypes = [
  {
    id: 1,
    name: '必要Cookie',
    description: '这些Cookie对于网站的基本功能是必需的，包括登录、购物车等核心功能。',
    duration: '会话结束时',
    purpose: '网站基本功能',
    icon: '🔧',
    borderClass: 'border-green'
  },
  {
    id: 2,
    name: '性能Cookie',
    description: '这些Cookie收集有关您如何使用我们网站的信息，帮助我们改善网站性能。',
    duration: '最多2年',
    purpose: '网站性能分析',
    icon: '📊',
    borderClass: 'border-blue'
  },
  {
    id: 3,
    name: '功能Cookie',
    description: '这些Cookie记住您的选择和偏好，为您提供个性化的体验。',
    duration: '最多1年',
    purpose: '个性化体验',
    icon: '⚙️',
    borderClass: 'border-purple'
  },
  {
    id: 4,
    name: '营销Cookie',
    description: '这些Cookie跟踪您的在线活动，用于显示更相关的广告内容。',
    duration: '最多1年',
    purpose: '个性化广告',
    icon: '🎯',
    borderClass: 'border-orange'
  }
]

// Cookie政策详细内容
const cookieSections = [
  {
    id: 1,
    title: '什么是Cookie？',
    content: [
      'Cookie是在您访问网站时存储在您设备上的小文本文件。它们被广泛用于使网站工作或更高效地工作，以及向网站所有者提供信息。',
      'Cookie包含少量数据，可能包括匿名的唯一标识符。Cookie从网站发送到您的浏览器，并存储在您设备的硬盘上。',
      '像许多网站一样，我们使用Cookie来收集信息。您可以指示浏览器拒绝所有Cookie或在发送Cookie时指示。'
    ]
  },
  {
    id: 2,
    title: '我们如何使用Cookie？',
    content: [
      '我们使用Cookie来：',
      '• 确保我们的网站正常运行',
      '• 记住您的登录状态和偏好设置',
      '• 分析网站流量和使用模式',
      '• 个性化内容和广告',
      '• 提供社交媒体功能',
      '• 改善网站安全性'
    ]
  },
  {
    id: 3,
    title: '第三方Cookie',
    content: [
      '我们的网站可能包含第三方服务提供商设置的Cookie：',
      '• 谷歌分析：用于网站流量分析',
      '• 社交媒体插件：用于社交分享功能',
      '• 广告服务：用于显示相关广告',
      '这些第三方有自己的隐私政策，我们不控制其Cookie的使用。'
    ]
  },
  {
    id: 4,
    title: '如何控制Cookie？',
    content: [
      '您可以通过以下方式控制和/或删除Cookie：',
      '• 通过上方的Cookie设置面板管理偏好',
      '• 通过浏览器设置删除已存储的Cookie',
      '• 设置浏览器阻止或警告Cookie',
      '• 使用浏览器的隐私模式',
      '请注意，禁用某些Cookie可能影响网站功能。'
    ]
  },
  {
    id: 5,
    title: '政策更新',
    content: [
      '我们可能会不时更新此Cookie政策：',
      '• 更新将在此页面上发布',
      '• 重大更改将通过电子邮件通知',
      '• 请定期查看此政策',
      '继续使用我们的网站即表示您接受更新后的政策。'
    ]
  }
]

// 保存偏好设置
const savePreferences = () => {
  // 这里可以添加保存Cookie偏好的逻辑
  alert('Cookie偏好设置已保存！')
}

// 接受所有Cookie
const acceptAll = () => {
  analyticsEnabled.value = true
  marketingEnabled.value = true
  savePreferences()
}
</script>

<style scoped lang="scss">
.cookies-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  padding: 5rem 0;
  text-align: center;
  
  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 640px) {
      padding: 0 1.5rem;
    }
    
    @media (min-width: 1024px) {
      padding: 0 2rem;
    }
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  
  .hero-description {
    font-size: 1.25rem;
    color: #fed7aa;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.content-section {
  padding: 5rem 0;
  
  .container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 640px) {
      padding: 0 1.5rem;
    }
    
    @media (min-width: 1024px) {
      padding: 0 2rem;
    }
  }
}

.content-wrapper {
  max-width: none;
  font-size: 1.125rem;
  line-height: 1.75;
}

.notice-box {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #dcfce7;
  border-radius: 0.5rem;
  border-left: 4px solid #16a34a;
  
  .notice-date {
    color: #166534;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .notice-text {
    color: #15803d;
  }
}

.cookie-types-section {
  margin-bottom: 3rem;
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
}

.cookie-types-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cookie-type-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-left: 4px solid;
  
  &.border-green {
    border-left-color: #16a34a;
  }
  
  &.border-blue {
    border-left-color: #2563eb;
  }
  
  &.border-purple {
    border-left-color: #7c3aed;
  }
  
  &.border-orange {
    border-left-color: #ea580c;
  }
}

.cookie-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .cookie-icon {
    font-size: 1.875rem;
    margin-right: 0.75rem;
  }
  
  .cookie-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
}

.cookie-description {
  color: #4b5563;
  margin-bottom: 1rem;
}

.cookie-meta {
  font-size: 0.875rem;
  color: #6b7280;
  
  p {
    margin-bottom: 0.25rem;
  }
}

.policy-section {
  margin-bottom: 3rem;
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
  
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .paragraph {
    color: #374151;
    line-height: 1.625;
  }
}

.cookie-management {
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #fff7ed;
  border-radius: 0.5rem;
  
  .management-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.setting-info {
  flex: 1;
  
  .setting-name {
    font-weight: 500;
    color: #111827;
    margin-bottom: 0.25rem;
  }
  
  .setting-description {
    font-size: 0.875rem;
    color: #4b5563;
  }
}

.setting-control {
  display: flex;
  align-items: center;
  
  .always-enabled {
    color: #16a34a;
    font-weight: 500;
  }
}

.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  
  .toggle-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .toggle-slider {
      background-color: #ea580c;
      
      &::after {
        transform: translateX(1.25rem);
      }
    }
    
    &:focus + .toggle-slider {
      box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.3);
    }
  }
  
  .toggle-slider {
    width: 2.75rem;
    height: 1.5rem;
    background-color: #e5e7eb;
    border-radius: 9999px;
    position: relative;
    transition: all 0.2s ease-in-out;
    
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 1.25rem;
      height: 1.25rem;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.2s ease-in-out;
      border: 1px solid #d1d5db;
    }
  }
}

.management-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  border: none;
  text-decoration: none;
  
  &.btn-primary {
    background-color: #ea580c;
    color: white;
    
    &:hover {
      background-color: #c2410c;
    }
  }
  
  &.btn-outline {
    border: 1px solid #ea580c;
    color: #ea580c;
    background-color: transparent;
    
    &:hover {
      background-color: #fff7ed;
    }
  }
}
</style> 