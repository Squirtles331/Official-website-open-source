<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-wrapper">
        <!-- Logo -->
        <div class="logo-section">
          <NuxtLink to="/" class="logo-link">
            <div class="logo-icon">
              官
            </div>
            <span class="logo-text">开源官网</span>
          </NuxtLink>
        </div>

        <!-- 桌面导航菜单 -->
        <div class="desktop-nav">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="nav-link"
            active-class="nav-link-active"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- 右侧功能区 -->
        <div class="header-actions">
          <!-- 移动端菜单按钮 -->
          <button @click="toggleMobileMenu" class="mobile-menu-toggle">
            <Bars3Icon v-if="!showMobileMenu" class="icon-large" />
            <XMarkIcon v-else class="icon-large" />
          </button>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <div v-show="showMobileMenu" class="mobile-nav">
        <div class="mobile-nav-content">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="mobile-nav-link"
            active-class="mobile-nav-link-active"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
  <!-- 占位符，防止内容被固定导航栏遮挡 -->
  <div class="header-spacer"></div>
</template>

<script setup lang="ts">
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

// 响应式状态
const showMobileMenu = ref(false)

// 导航菜单
const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '产品服务', href: '/products' },
  { name: '新闻动态', href: '/news' },
  { name: '联系我们', href: '/contact' },
]

// 切换移动端菜单
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  height: 2rem;
  width: 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #374151;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.15s ease-in-out;
}

.nav-link:hover,
.nav-link-active {
  color: #2563eb;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-menu-toggle {
  padding: 0.5rem;
  color: #374151;
  background: none;
  border: none;
  transition: color 0.15s ease-in-out;
  cursor: pointer;
}

.mobile-menu-toggle:hover {
  color: #2563eb;
}

.mobile-menu-toggle {
  display: block;
}

.icon {
  height: 1.25rem;
  width: 1.25rem;
}

.icon-large {
  height: 1.5rem;
  width: 1.5rem;
}

.mobile-nav {
  display: block;
  background-color: white;
  border-top: 1px solid #e5e7eb;
}

.mobile-nav-content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
}

.mobile-nav-link:hover {
  color: #2563eb;
  background-color: #f9fafb;
}

.mobile-nav-link-active {
  color: #2563eb;
  background-color: #eff6ff;
}

.header-spacer {
  height: 4rem;
}

/* Responsive Design */
@media (min-width: 768px) {
  .nav-container {
    padding: 0 1.5rem;
  }

  .desktop-nav {
    display: flex;
  }

  .mobile-menu-toggle {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
}

@media (min-width: 1024px) {
  .nav-container {
    padding: 0 2rem;
  }
}
</style> 