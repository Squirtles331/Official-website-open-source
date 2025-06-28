<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- 公司信息 -->
        <div class="company-section">
          <div class="company-header">
            <div class="company-logo">
              官
            </div>
            <span class="company-name">开源官网</span>
          </div>
          <p class="company-description">
            现代化的开源官网解决方案，助力企业快速搭建专业网站。
          </p>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="social-link"
            >
              <component :is="social.icon" class="social-icon" />
            </a>
          </div>
        </div>

        <!-- 产品链接 -->
        <div class="footer-section">
          <h3 class="section-title">产品</h3>
          <ul class="link-list">
            <li v-for="link in productLinks" :key="link.name">
              <NuxtLink :to="link.href" class="footer-link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 公司链接 -->
        <div class="footer-section">
          <h3 class="section-title">公司</h3>
          <ul class="link-list">
            <li v-for="link in companyLinks" :key="link.name">
              <NuxtLink :to="link.href" class="footer-link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div class="footer-section">
          <h3 class="section-title">联系我们</h3>
          <div class="contact-list">
            <div class="contact-item">
              <MapPinIcon class="contact-icon" />
              <span class="contact-text">A市B区C路DDD号</span>
            </div>
            <div class="contact-item">
              <PhoneIcon class="contact-icon" />
              <span class="contact-text">+86 AAA-BBB-CCCC</span>
            </div>
            <div class="contact-item">
              <EnvelopeIcon class="contact-icon" />
              <span class="contact-text">abcd@example.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="footer-bottom">
        <div class="bottom-content">
          <div class="legal-links">
            <NuxtLink
              v-for="link in legalLinks"
              :key="link.name"
              :to="link.href"
              class="legal-link"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          <div class="copyright">
            © {{ currentYear }} 开源官网. 保留所有权利.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline'

// 社交媒体链接
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: 'i-simple-icons-github',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'i-simple-icons-twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'i-simple-icons-linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: 'i-simple-icons-youtube',
  },
]

// 产品链接
const productLinks = [
  { name: '模板库', href: '/templates' },
  { name: '组件库', href: '/components' },
  { name: '主题市场', href: '/themes' },
  { name: '插件中心', href: '/plugins' },
]

// 公司链接
const companyLinks = [
  { name: '关于我们', href: '/about' },
  { name: '团队介绍', href: '/team' },
  { name: '招聘信息', href: '/careers' },
  { name: '投资者关系', href: '/investors' },
]

// 法律链接
const legalLinks = [
  { name: '隐私政策', href: '/privacy' },
  { name: '服务条款', href: '/terms' },
  { name: 'Cookie政策', href: '/cookies' },
]

// 当前年份
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #111827;
  color: white;
}

.footer-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.company-section {
  margin-bottom: 1rem;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.company-logo {
  height: 2rem;
  width: 2rem;
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
}

.company-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.company-description {
  color: #d1d5db;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #9ca3af;
  transition: color 0.15s ease-in-out;
}

.social-link:hover {
  color: white;
}

.social-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.footer-section {
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #d1d5db;
  transition: color 0.15s ease-in-out;
}

.footer-link:hover {
  color: white;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af;
  flex-shrink: 0;
}

.contact-text {
  color: #d1d5db;
}

.footer-bottom {
  border-top: 1px solid #1f2937;
  margin-top: 2rem;
  padding-top: 2rem;
}

.bottom-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-link {
  color: #9ca3af;
  font-size: 0.875rem;
  transition: color 0.15s ease-in-out;
}

.legal-link:hover {
  color: white;
}

.copyright {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (min-width: 640px) {
  .footer-container {
    padding: 3rem 1.5rem;
  }
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bottom-content {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .footer-container {
    padding: 3rem 2rem;
  }

  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style> 