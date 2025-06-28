<template>
  <div class="page-wrapper">
    <!-- Hero 区域 -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-overlay"></div>
      <div class="hero-content animate-fade-in-up">
        <h1 class="hero-title animate-text-reveal">
          现代化的开源官网解决方案
        </h1>
        <p class="hero-description animate-fade-in-up" style="animation-delay: 0.3s">
          为企业和个人提供专业、美观、易用的官网模板，助力快速搭建属于您的专业网站
        </p>
        <div class="hero-buttons animate-fade-in-up" style="animation-delay: 0.6s">
          <NuxtLink to="/products" class="btn btn-primary animate-pulse-subtle">
            立即开始
            <ChevronRightIcon class="btn-icon" />
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-outline">
            了解更多
          </NuxtLink>
        </div>
      </div>
      <!-- 滚动指示器 -->
      <div class="scroll-indicator animate-bounce-gentle">
        <ChevronDownIcon class="scroll-icon" />
      </div>
    </section>

    <!-- 特性展示区 -->
    <section class="features-section" ref="featuresSection">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">
            为什么选择我们？
          </h2>
          <p class="section-description">
            我们提供现代化、高质量的官网解决方案，满足您的各种需求
          </p>
        </div>
        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            class="feature-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-icon animate-float">
              <component :is="feature.icon" class="icon" />
            </div>
            <h3 class="feature-title">
              {{ getFeatureTitle(feature.id) }}
            </h3>
            <p class="feature-description">
              {{ getFeatureDescription(feature.id) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品介绍区 -->
    <section class="product-section" ref="productSection">
      <div class="container">
        <div class="product-grid">
          <div class="product-content animate-on-scroll">
            <h2 class="product-title">
              专业的网站解决方案
            </h2>
            <p class="product-description">
              我们提供完整的官网搭建服务，从设计到开发，从部署到维护，一站式解决您的需求
            </p>
            <ul class="benefits-list">
              <li
                v-for="(benefit, index) in productBenefits"
                :key="benefit"
                class="benefit-item animate-slide-in-left"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <CheckIcon class="check-icon animate-scale-in" />
                {{ getProductBenefit(benefit) }}
              </li>
            </ul>
            <NuxtLink to="/products" class="btn btn-primary animate-pulse-subtle">
              查看产品详情
              <ArrowRightIcon class="btn-icon" />
            </NuxtLink>
          </div>
          <div class="product-preview animate-on-scroll">
            <div class="preview-card animate-float-slow">
              <div class="preview-content">
                <div class="preview-emoji animate-rotate-gentle">🖥️</div>
                <h3 class="preview-title">产品预览</h3>
                <p class="preview-subtitle">现代化界面设计</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例区 -->
    <section class="testimonials-section" ref="testimonialsSection">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title light">
            客户评价
          </h2>
          <p class="section-description light">
            看看我们的客户怎么说
          </p>
        </div>
        <div class="testimonials-grid">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="testimonial-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="stars animate-twinkle">
              <StarIcon v-for="n in 5" :key="n" class="star-icon" />
            </div>
            <p class="testimonial-content">
              "{{ getTestimonialContent(testimonial.id) }}"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar animate-pulse-avatar">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-role">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计区域 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div
            v-for="(stat, index) in companyStats"
            :key="stat.id"
            class="stat-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="stat-icon animate-pulse-gentle">
              <component :is="stat.icon" class="icon" />
            </div>
            <div class="stat-content">
              <div class="stat-number animate-count-up" :data-target="stat.value">
                {{ formatStatNumber(stat.value) }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户企业展示 -->
    <section class="clients-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">
            信赖我们的企业伙伴
          </h2>
          <p class="section-description">
            与各行业领军企业深度合作，共创数字化未来
          </p>
        </div>
        <div class="clients-carousel animate-on-scroll">
          <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1"
            :space-between="20"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
            }"
            :breakpoints="{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }"
            class="clients-swiper"
          >
            <SwiperSlide
              v-for="company in clientCompanies"
              :key="company.id"
              class="company-slide"
            >
              <div 
                class="company-card"
                :style="{ 
                  '--company-color': company.color,
                  '--company-color-dark': getDarkerColor(company.color)
                }"
              >
                <!-- 企业Logo区域 -->
                <div class="company-logo">
                  <div class="logo-text">{{ company.name }}</div>
                  <div class="logo-pattern"></div>
                </div>
                
                <!-- 企业信息 -->
                <div class="company-info">
                  <h3 class="company-name">{{ company.name }}</h3>
                  <p class="company-industry">{{ company.industry }}</p>
                  <p class="company-description">{{ company.description }}</p>
                  
                  <!-- 企业统计 -->
                  <div class="company-stats">
                    <div class="stat-item">
                      <span class="stat-label">员工规模</span>
                      <span class="stat-value">{{ company.employees }}</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">成立年份</span>
                      <span class="stat-value">{{ company.founded }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- 合作状态标识 -->
                <div class="partnership-badge">
                  <svg class="badge-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>合作伙伴</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <!-- 产品演示视频区 -->
    <section class="demo-section">
      <div class="container">
        <div class="demo-grid">
          <div class="demo-content animate-on-scroll">
            <h2 class="section-title">
              产品演示
            </h2>
            <p class="section-description">
              观看我们的产品演示视频，了解如何快速搭建专业官网
            </p>
            <div class="demo-features">
              <div
                v-for="(feature, index) in demoFeatures"
                :key="feature.id"
                class="demo-feature animate-slide-in-left"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <CheckIcon class="check-icon" />
                <span>{{ feature.text }}</span>
              </div>
            </div>
            <NuxtLink to="/products" class="btn btn-primary">
              免费试用
              <ArrowRightIcon class="btn-icon" />
            </NuxtLink>
          </div>
          <div class="demo-video animate-on-scroll">
            <div class="video-container">
              <div class="video-placeholder">
                <div class="play-button animate-pulse-gentle" @click="playDemo">
                  <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div class="video-overlay">
                  <h3>产品演示视频</h3>
                  <p>3分钟了解完整功能</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案展示区 -->
    <section class="solutions-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">
            行业解决方案
          </h2>
          <p class="section-description">
            针对不同行业提供专业的官网解决方案
          </p>
        </div>
        <div class="solutions-grid">
          <div
            v-for="(solution, index) in solutions"
            :key="solution.id"
            class="solution-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="solution-icon">
              <component :is="solution.icon" class="icon" />
            </div>
            <h3 class="solution-title">{{ solution.title }}</h3>
            <p class="solution-description">{{ solution.description }}</p>
            <div class="solution-features">
              <span
                v-for="feature in solution.features"
                :key="feature"
                class="feature-tag"
              >
                {{ feature }}
              </span>
            </div>
            <NuxtLink :to="solution.link" class="solution-link">
              了解详情 →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴区域 -->
    <section class="partners-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">
            合作伙伴
          </h2>
          <p class="section-description">
            与行业领先企业建立战略合作关系
          </p>
        </div>
        <div class="partners-grid">
          <div
            v-for="(partner, index) in partners"
            :key="partner.id"
            class="partner-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="partner-logo">
              <div class="logo-placeholder">
                {{ partner.name.charAt(0) }}
              </div>
            </div>
            <h4 class="partner-name">{{ partner.name }}</h4>
            <p class="partner-type">{{ partner.type }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ常见问题区 -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">
            常见问题
          </h2>
          <p class="section-description">
            快速了解我们产品的常见问题解答
          </p>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="faq-item animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="faq-question"
              @click="toggleFaq(faq.id)"
              :class="{ active: activeFaq === faq.id }"
            >
              <h3>{{ faq.question }}</h3>
              <ChevronDownIcon 
                class="faq-icon" 
                :class="{ rotated: activeFaq === faq.id }"
              />
            </div>
            <div 
              class="faq-answer"
              :class="{ open: activeFaq === faq.id }"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        <div class="faq-cta animate-on-scroll">
          <p>还有其他问题？</p>
          <NuxtLink to="/contact" class="btn btn-outline">
            联系我们
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 邮件订阅区域 -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content animate-on-scroll">
          <h2 class="newsletter-title">
            订阅我们的新闻通讯
          </h2>
          <p class="newsletter-description">
            获取最新的产品更新、行业动态和技术分享
          </p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                placeholder="请输入您的邮箱地址"
                class="email-input"
                required
              />
              <button type="submit" class="subscribe-btn" :disabled="isSubscribing">
                <span v-if="!isSubscribing">订阅</span>
                <span v-else>订阅中...</span>
              </button>
            </div>
            <p class="privacy-note">
              我们尊重您的隐私，不会向第三方分享您的邮箱地址
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- 新闻动态区 -->
    <section class="news-section" ref="newsSection">
      <div class="container">
        <div class="news-header animate-on-scroll">
          <div>
            <h2 class="section-title">
              最新动态
            </h2>
            <p class="section-description">
              了解我们的最新消息和行业动态
            </p>
          </div>
          <NuxtLink to="/news" class="view-all-link animate-slide-in-right">
            查看所有新闻 →
          </NuxtLink>
        </div>
        <div class="news-grid">
          <article
            v-for="(article, index) in latestNews"
            :key="article.id"
            class="news-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="news-image">
              <div class="news-image-content">
                <div class="news-emoji animate-wiggle">📰</div>
                <p class="news-category-badge">{{ article.category }}</p>
              </div>
            </div>
            <div class="news-content">
              <div class="news-category">{{ article.category }}</div>
              <h3 class="news-title">
                {{ article.title }}
              </h3>
              <p class="news-excerpt">{{ article.excerpt }}</p>
              <div class="news-meta">
                <span class="news-date">{{ formatDate(article.date) }}</span>
                <NuxtLink :to="`/news/${article.slug}`" class="read-more-link">
                  阅读更多
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 返回顶部按钮 -->
    <Transition name="fade">
      <div v-if="showBackToTop" class="back-to-top-container">
        <button
          @click="scrollToTop"
          class="back-to-top-btn"
          aria-label="返回顶部"
        >
          <!-- 进度环 -->
          <svg class="progress-ring" viewBox="0 0 36 36">
            <path
              class="progress-ring-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="progress-ring-progress"
              :stroke-dasharray="`${scrollProgress}, 100`"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <!-- 箭头图标 -->
          <svg class="back-to-top-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
        <!-- 工具提示 -->
        <div class="back-to-top-tooltip">
          返回顶部 ({{ scrollProgress }}%)
        </div>
      </div>
    </Transition>

    <!-- 在线客服浮动按钮 -->
    <div class="chat-widget" :class="{ open: isChatOpen }">
      <div v-if="isChatOpen" class="chat-window">
        <div class="chat-header">
          <h3>在线客服</h3>
          <button @click="toggleChat" class="close-chat">×</button>
        </div>
        <div class="chat-content">
          <div class="chat-message bot">
            <p>您好！有什么可以帮助您的吗？</p>
          </div>
          <div class="quick-questions">
            <button
              v-for="question in quickQuestions"
              :key="question.id"
              @click="sendQuickQuestion(question.text)"
              class="quick-question-btn"
            >
              {{ question.text }}
            </button>
          </div>
        </div>
        <div class="chat-input">
          <input
            v-model="chatMessage"
            @keyup.enter="sendMessage"
            placeholder="输入您的问题..."
            class="message-input"
          />
          <button @click="sendMessage" class="send-btn">发送</button>
        </div>
      </div>
      <button @click="toggleChat" class="chat-trigger">
        <svg v-if="!isChatOpen" class="chat-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
        <svg v-else class="close-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  HeartIcon,
  ShoppingBagIcon,
  BanknotesIcon,
} from '@heroicons/vue/24/outline'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  CubeIcon,
} from '@heroicons/vue/24/outline'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// SEO设置
useSeoMeta({
  title: '开源官网 - 现代化企业官网解决方案',
  description: '一个通用的开源官网解决方案，适用于企业官网、产品官网、个人品牌网站等多种场景。提供现代化设计、优秀用户体验和完善功能模块。',
  ogTitle: '开源官网 - 现代化企业官网解决方案',
  ogDescription: '一个通用的开源官网解决方案，适用于企业官网、产品官网、个人品牌网站等多种场景',
  keywords: '官网模板,企业官网,开源网站,Vue.js,Nuxt.js,响应式设计',
})

// 页面过渡动画
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

// 响应式引用
const heroSection = ref<HTMLElement>()
const featuresSection = ref<HTMLElement>()
const productSection = ref<HTMLElement>()
const testimonialsSection = ref<HTMLElement>()
const newsSection = ref<HTMLElement>()

// 挂载后设置滚动动画观察器
onMounted(() => {
  // 初始化动画状态
  initializeAnimations()
  setupScrollAnimations()
  setupParallaxEffect()
  setupBackToTopButton()
})

// 初始化动画状态
const initializeAnimations = () => {
  // 确保所有动画元素都处于初始状态
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => {
    el.classList.remove('animate-visible')
  })
  
  // 重置所有特定动画类
  const specificAnimationClasses = [
    '.animate-slide-in-left',
    '.animate-slide-in-right', 
    '.animate-fade-in-up',
    '.animate-scale-in'
  ]
  
  specificAnimationClasses.forEach(selector => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(el => {
      el.classList.remove('animate-visible')
    })
  })
}

// 组件卸载时清理事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 视差滚动效果
const setupParallaxEffect = () => {
  let ticking = false

  const updateParallax = () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.hero-overlay')
    
    parallaxElements.forEach((element) => {
      const htmlElement = element as HTMLElement
      const speed = 0.5
      const yPos = -(scrolled * speed)
      htmlElement.style.transform = `translateY(${yPos}px)`
    })
    
    ticking = false
  }

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  window.addEventListener('scroll', requestTick)
}

// 设置滚动触发动画
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: [0, 0.1, 0.5],
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 添加动画类
        entry.target.classList.add('animate-visible')
        
        // 为子元素添加动画类（处理延迟动画）
        const childElements = entry.target.querySelectorAll('[style*="animation-delay"]')
        childElements.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate-visible')
          }, index * 100)
        })
      } else {
        // 当元素离开视口时，移除动画类，允许重新触发
        entry.target.classList.remove('animate-visible')
        
        // 同时重置子元素的动画状态
        const childElements = entry.target.querySelectorAll('[style*="animation-delay"]')
        childElements.forEach((child) => {
          child.classList.remove('animate-visible')
        })
      }
    })
  }, observerOptions)

  // 观察所有需要动画的元素
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => {
    // 重置动画状态
    el.classList.remove('animate-visible')
    observer.observe(el)
  })

  // 添加滚动指示器点击事件
  const scrollIndicator = document.querySelector('.scroll-indicator')
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const featuresSection = document.querySelector('.features-section')
      if (featuresSection) {
        featuresSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

// 特性数据
const features = [
  { id: 'responsive', icon: DevicePhoneMobileIcon },
  { id: 'modern', icon: CodeBracketIcon },
  { id: 'fast', icon: BoltIcon },
  { id: 'secure', icon: ShieldCheckIcon },
  { id: 'scalable', icon: CloudIcon },
  { id: 'customizable', icon: CubeIcon },
]

// 产品优势
const productBenefits = [
  'easy-setup',
  'modern-design',
  'seo-optimized',
  'mobile-first',
  'open-source',
]

// 客户推荐
const testimonials = [
  {
    id: 'testimonial1',
    name: '张三',
    role: 'CTO, 创新科技',
  },
  {
    id: 'testimonial2',
    name: '李四',
    role: '产品经理, 未来公司',
  },
  {
    id: 'testimonial3',
    name: '王五',
    role: '创始人, 新兴企业',
  },
]

// 公司数据统计
const companyStats = [
  {
    id: 'users',
    icon: UsersIcon,
    value: 10000,
    label: '活跃用户'
  },
  {
    id: 'companies',
    icon: BuildingOfficeIcon,
    value: 1000,
    label: '企业客户'
  },
  {
    id: 'projects',
    icon: ChartBarIcon,
    value: 5000,
    label: '成功项目'
  },
  {
    id: 'countries',
    icon: GlobeAltIcon,
    value: 50,
    label: '服务国家'
  }
]

// 客户企业
const clientCompanies = [
  { 
    id: 1, 
    name: '企业一', 
    industry: '金融科技', 
    description: '领先的数字金融解决方案提供商',
    color: '#3B82F6',
    employees: '10,000+',
    founded: '2015'
  },
  { 
    id: 2, 
    name: '企业二', 
    industry: '电商平台', 
    description: '新一代智能电商生态平台',
    color: '#10B981',
    employees: '5,000+',
    founded: '2018'
  },
  { 
    id: 3, 
    name: '企业三', 
    industry: '人工智能', 
    description: '专注AI技术研发与应用',
    color: '#8B5CF6',
    employees: '3,000+',
    founded: '2019'
  },
  { 
    id: 4, 
    name: '企业四', 
    industry: '云计算', 
    description: '企业级云服务解决方案专家',
    color: '#F59E0B',
    employees: '8,000+',
    founded: '2016'
  },
  { 
    id: 5, 
    name: '企业五', 
    industry: '新能源', 
    description: '绿色能源技术创新引领者',
    color: '#EF4444',
    employees: '12,000+',
    founded: '2014'
  },
  { 
    id: 6, 
    name: '企业六', 
    industry: '生物医药', 
    description: '生命科学与医疗健康先驱',
    color: '#06B6D4',
    employees: '4,500+',
    founded: '2017'
  },
  { 
    id: 7, 
    name: '企业七', 
    industry: '智能制造', 
    description: '工业4.0智能制造解决方案',
    color: '#84CC16',
    employees: '15,000+',
    founded: '2013'
  },
  { 
    id: 8, 
    name: '企业八', 
    industry: '教育科技', 
    description: '在线教育与知识服务平台',
    color: '#F97316',
    employees: '2,800+',
    founded: '2020'
  },
  { 
    id: 9, 
    name: '企业九', 
    industry: '区块链', 
    description: '分布式技术与数字资产服务',
    color: '#6366F1',
    employees: '1,200+',
    founded: '2021'
  },
  { 
    id: 10, 
    name: '企业十', 
    industry: '物联网', 
    description: '万物互联智慧城市建设者',
    color: '#EC4899',
    employees: '6,500+',
    founded: '2016'
  }
]

// 演示功能特性
const demoFeatures = [
  { id: 1, text: '5分钟快速搭建' },
  { id: 2, text: '拖拽式页面编辑' },
  { id: 3, text: '响应式设计' },
  { id: 4, text: '一键部署上线' },
]

// 行业解决方案
const solutions = [
  {
    id: 'education',
    icon: AcademicCapIcon,
    title: '教育行业',
    description: '为学校、培训机构提供专业的教育官网解决方案',
    features: ['在线课程', '学员管理', '证书系统'],
    link: '/solutions/education'
  },
  {
    id: 'healthcare',
    icon: HeartIcon,
    title: '医疗健康',
    description: '为医院、诊所提供符合行业标准的官网方案',
    features: ['预约挂号', '医生介绍', '健康资讯'],
    link: '/solutions/healthcare'
  },
  {
    id: 'ecommerce',
    icon: ShoppingBagIcon,
    title: '电商零售',
    description: '为电商企业提供高转化率的官网解决方案',
    features: ['产品展示', '在线支付', '订单管理'],
    link: '/solutions/ecommerce'
  },
  {
    id: 'finance',
    icon: BanknotesIcon,
    title: '金融服务',
    description: '为金融机构提供安全可靠的官网解决方案',
    features: ['风险控制', '合规管理', '数据加密'],
    link: '/solutions/finance'
  }
]

// 合作伙伴
const partners = [
  { id: 1, name: 'ABCD云', type: '云服务合作伙伴' },
  { id: 2, name: 'ABCD科技', type: '技术合作伙伴' },
  { id: 3, name: 'ABCD全球', type: '全球合作伙伴' },
  { id: 4, name: 'ABCD企业', type: '战略合作伙伴' },
  { id: 5, name: 'ABCD技术', type: '技术合作伙伴' },
  { id: 6, name: 'ABCD云服务', type: '云服务合作伙伴' },
]

// FAQ数据
const faqs = [
  {
    id: 1,
    question: '如何开始使用我们的产品？',
    answer: '您可以直接注册账号，我们提供免费试用版本。注册后，您可以选择适合的模板，通过我们的可视化编辑器快速搭建您的官网。'
  },
  {
    id: 2,
    question: '是否支持自定义域名？',
    answer: '是的，我们支持自定义域名。您可以在控制面板中绑定您的域名，我们会自动为您配置SSL证书。'
  },
  {
    id: 3,
    question: '有哪些付费计划？',
    answer: '我们提供多种付费计划，包括个人版、企业版和定制版。不同计划提供不同的功能和服务支持。'
  },
  {
    id: 4,
    question: '技术支持如何联系？',
    answer: '我们提供7x24小时技术支持。您可以通过在线客服、邮件或电话联系我们的技术团队。'
  },
  {
    id: 5,
    question: '数据安全如何保障？',
    answer: '我们采用银行级别的安全措施，包括数据加密、定期备份、安全监控等，确保您的数据安全。'
  }
]

// 快速问题
const quickQuestions = [
  { id: 1, text: '产品价格' },
  { id: 2, text: '技术支持' },
  { id: 3, text: '功能介绍' },
  { id: 4, text: '合作咨询' }
]

// 响应式状态
const activeFaq = ref<number | null>(null)
const email = ref('')
const isSubscribing = ref(false)
const isChatOpen = ref(false)
const chatMessage = ref('')
const showBackToTop = ref(false)
const scrollProgress = ref(0)

// 最新新闻
const latestNews = [
  {
    id: 1,
    title: '开源官网 v2.0 正式发布',
    excerpt: '全新版本带来更多功能和更好的用户体验...',
    category: '产品更新',
    date: '2024-12-27',
    slug: 'v2-release',
  },
  {
    id: 2,
    title: '如何快速搭建现代化企业官网',
    excerpt: '本文将详细介绍如何使用我们的模板快速搭建...',
    category: '教程',
    date: '2024-12-25',
    slug: 'quick-setup-guide',
  },
  {
    id: 3,
    title: '企业数字化转型趋势分析',
    excerpt: '随着数字化浪潮的到来，企业如何适应变化...',
    category: '行业洞察',
    date: '2024-12-20',
    slug: 'digital-transformation',
  },
]

// 获取特性标题
const getFeatureTitle = (id: string) => {
  const titles: Record<string, string> = {
    'responsive': '响应式设计',
    'modern': '现代化技术',
    'fast': '极速加载',
    'secure': '安全可靠',
    'scalable': '易于扩展',
    'customizable': '高度定制'
  }
  return titles[id] || ''
}

// 获取特性描述
const getFeatureDescription = (id: string) => {
  const descriptions: Record<string, string> = {
    'responsive': '完美适配各种设备屏幕，确保在手机、平板、电脑上都有出色的显示效果',
    'modern': '基于最新的前端技术栈，提供快速、稳定、可维护的代码架构',
    'fast': '优化的代码结构和资源加载策略，确保网站快速响应和加载',
    'secure': '遵循最佳安全实践，确保您的网站和数据安全',
    'scalable': '模块化的架构设计，便于功能扩展和定制开发',
    'customizable': '提供丰富的配置选项和主题定制功能，打造独特的品牌形象'
  }
  return descriptions[id] || ''
}

// 获取产品优势
const getProductBenefit = (benefit: string) => {
  const benefits: Record<string, string> = {
    'easy-setup': '快速部署，10分钟搭建完成',
    'modern-design': '现代化设计，符合最新UI趋势',
    'seo-optimized': 'SEO优化，提升搜索引擎排名',
    'mobile-first': '移动优先，完美适配各种设备',
    'open-source': '开源免费，持续更新维护'
  }
  return benefits[benefit] || ''
}

// 获取客户评价内容
const getTestimonialContent = (id: string) => {
  const contents: Record<string, string> = {
    'testimonial1': '这个官网模板真的很棒！设计现代，功能齐全，帮我们快速搭建了专业的企业网站。',
    'testimonial2': '代码质量很高，文档详细，定制起来很方便。强烈推荐给需要官网的朋友们。',
    'testimonial3': '性能表现优秀，SEO效果显著。自从使用后，我们的网站访问量提升了很多。'
  }
  return contents[id] || ''
}

// 格式化日期
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 格式化统计数字
const formatStatNumber = (value: number) => {
  if (value >= 10000) {
    return `${(value / 10000).toFixed(1)}万`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`
  }
  return value.toString()
}

// FAQ切换
const toggleFaq = (id: number) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

// 邮件订阅
const subscribeNewsletter = async () => {
  if (!email.value) return
  
  isSubscribing.value = true
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('订阅成功！感谢您的关注')
    email.value = ''
  } catch (error) {
    alert('订阅失败，请稍后重试')
  } finally {
    isSubscribing.value = false
  }
}

// 播放演示视频
const playDemo = () => {
  alert('演示视频功能待实现')
}

// 切换客服窗口
const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

// 发送消息
const sendMessage = () => {
  if (!chatMessage.value.trim()) return
  
  // 模拟发送消息
  console.log('发送消息:', chatMessage.value)
  chatMessage.value = ''
  
  // 模拟客服回复
  setTimeout(() => {
    console.log('客服回复: 感谢您的咨询，我们会尽快为您处理')
  }, 1000)
}

// 发送快速问题
const sendQuickQuestion = (question: string) => {
  chatMessage.value = question
  sendMessage()
}

// 获取较深的颜色
const getDarkerColor = (color: string) => {
  // 简单的颜色加深函数
  const colorMap: Record<string, string> = {
    '#3B82F6': '#1D4ED8',
    '#10B981': '#047857', 
    '#8B5CF6': '#7C3AED',
    '#F59E0B': '#D97706',
    '#EF4444': '#DC2626',
    '#06B6D4': '#0891B2',
    '#84CC16': '#65A30D',
    '#F97316': '#EA580C',
    '#6366F1': '#4F46E5',
    '#EC4899': '#DB2777'
  }
  return colorMap[color] || color
}

// 滚动处理函数
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  // 显示/隐藏返回顶部按钮
  showBackToTop.value = scrollTop > 300
  
  // 计算滚动进度 (0-100)
  if (documentHeight > 0) {
    scrollProgress.value = Math.round((scrollTop / documentHeight) * 100)
  } else {
    scrollProgress.value = 0
  }
}

// 设置返回顶部按钮
const setupBackToTopButton = () => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查
  handleScroll()
}

// 返回顶部函数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  // 延迟重置动画，等待滚动完成
  setTimeout(() => {
    resetAllAnimations()
  }, 800)
}

// 重置所有动画状态
const resetAllAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => {
    el.classList.remove('animate-visible')
    
    // 重置子元素动画
    const childElements = el.querySelectorAll('[style*="animation-delay"]')
    childElements.forEach((child) => {
      child.classList.remove('animate-visible')
    })
  })
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: #dbeafe;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.scroll-icon {
  height: 2rem;
  width: 2rem;
  color: white;
}

/* Button Styles */
.btn-primary {
  background-color: white;
  color: #1e3a8a;
}

.btn-primary:hover {
  background-color: #dbeafe;
}

.btn-outline {
  border: 2px solid white;
  color: white;
  background-color: transparent;
}

.btn-outline:hover {
  background-color: white;
  color: #1e3a8a;
}

/* Container */
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background-color: #f9fafb;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.section-title.light {
  color: white;
}

.section-description {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
}

.section-description.light {
  color: #d1d5db;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background-color: #dbeafe;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon .icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.feature-description {
  color: #4b5563;
}

/* Product Section */
.product-section {
  padding: 6rem 0;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.product-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.product-description {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.benefits-list {
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  color: #374151;
  margin-bottom: 1rem;
}

.product-preview {
  order: -1;
}

.preview-card {
  width: 100%;
  height: 24rem;
  background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-content {
  text-align: center;
  color: white;
}

.preview-emoji {
  font-size: 3.75rem;
  margin-bottom: 1rem;
}

.preview-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.preview-subtitle {
  color: #dbeafe;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background-color: #111827;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.stars {
  display: flex;
  margin-bottom: 1rem;
}

.star-icon {
  height: 1.25rem;
  width: 1.25rem;
  color: #fbbf24;
}

.testimonial-content {
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
}

.author-name {
  color: white;
  font-weight: 600;
}

.author-role {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* News Section */
.news-section {
  padding: 6rem 0;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.view-all-link {
  color: #2563eb;
  font-weight: 600;
  transition: color 0.15s ease-in-out;
}

.view-all-link:hover {
  color: #1d4ed8;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.news-image {
  width: 100%;
  height: 12rem;
  background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-image-content {
  text-align: center;
  color: white;
}

.news-emoji {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.news-category-badge {
  font-size: 0.875rem;
  font-weight: 500;
}

.news-content {
  padding: 1.5rem;
}

.news-category {
  font-size: 0.875rem;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.news-excerpt {
  color: #4b5563;
  margin-bottom: 1rem;
}

.news-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-date {
  font-size: 0.875rem;
  color: #6b7280;
}

.read-more-link {
  color: #2563eb;
  font-weight: 600;
  transition: color 0.15s ease-in-out;
}

.read-more-link:hover {
  color: #1d4ed8;
}

/* Responsive Design */
@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 3.75rem;
  }

  .hero-description {
    font-size: 1.5rem;
  }

  .hero-buttons {
    flex-direction: row;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2.25rem;
  }

  .product-title {
    font-size: 2.25rem;
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 4.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-preview {
    order: 0;
  }

  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Page Wrapper */
.page-wrapper {
  overflow-x: hidden;
  
  /* 确保页面包装器也隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.page-wrapper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Base Animation Classes */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-text-reveal {
  opacity: 0;
  transform: translateY(50px);
  animation: textReveal 1s ease-out forwards;
}

.animate-pulse-subtle {
  animation: pulseSubtle 2s ease-in-out infinite;
}

.animate-bounce-gentle {
  animation: bounceGentle 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 4s ease-in-out infinite;
}

.animate-rotate-gentle {
  animation: rotateGentle 6s linear infinite;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.animate-pulse-avatar {
  animation: pulseAvatar 3s ease-in-out infinite;
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out;
}

.animate-slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.6s ease-out forwards;
}

.animate-slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.6s ease-out forwards;
}

/* Scroll-triggered animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 确保动画可以重复触发 */
.animate-on-scroll:not(.animate-visible) {
  opacity: 0;
  transform: translateY(50px);
}

/* 特定动画类的重置 */
.animate-slide-in-left:not(.animate-visible) {
  opacity: 0;
  transform: translateX(-50px);
}

.animate-slide-in-right:not(.animate-visible) {
  opacity: 0;
  transform: translateX(50px);
}

.animate-fade-in-up:not(.animate-visible) {
  opacity: 0;
  transform: translateY(30px);
}

.animate-scale-in:not(.animate-visible) {
  opacity: 0;
  transform: scale(0.8);
}

/* 确保所有动画元素都有基础的过渡效果 */
.animate-slide-in-left,
.animate-slide-in-right,
.animate-fade-in-up,
.animate-scale-in {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Keyframe Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textReveal {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSubtle {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
}

@keyframes bounceGentle {
  0%, 20%, 53%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40%, 43% {
    transform: translateX(-50%) translateY(-1rem);
  }
  70% {
    transform: translateX(-50%) translateY(-0.5rem);
  }
  90% {
    transform: translateX(-50%) translateY(-0.125rem);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.02);
  }
}

@keyframes rotateGentle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes pulseAvatar {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
  }
}

@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Enhanced Hover Effects */
.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.news-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.testimonial-card {
  background-color: #1f2937;
  padding: 2rem;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  background-color: #374151;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px);
}

/* Icon Animations */
.btn-icon {
  margin-left: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.check-icon {
  height: 1.25rem;
  width: 1.25rem;
  color: #10b981;
  margin-right: 0.75rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.benefit-item:hover .check-icon {
  transform: scale(1.2);
  color: #059669;
}

/* Scroll Indicator Enhancement */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-indicator:hover {
  transform: translateX(-50%) scale(1.1);
}

.scroll-indicator:hover .scroll-icon {
  color: #dbeafe;
}

/* Loading Animation for Images */
.news-image,
.preview-card {
  background-size: 200% 200%;
  background-position: 0% 50%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon .icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
}

/* Clients Section */
.clients-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.clients-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
}

.clients-carousel {
  padding: 3rem 0;
  position: relative;
}

.clients-swiper {
  padding-bottom: 4rem;
  overflow: visible;
}

.company-slide {
  height: auto;
}

.company-card {
  background: white;
  border-radius: 1.5rem;
  padding: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.company-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.company-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--company-color, #3b82f6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.company-card:hover::before {
  opacity: 1;
}

/* 企业Logo区域 */
.company-logo {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--company-color, #3b82f6), var(--company-color-dark, #1d4ed8));
  overflow: hidden;
}

.company-logo::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: logoShimmer 6s ease-in-out infinite;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
}

.logo-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 0 60px;
}

.logo-pattern::before {
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

/* 企业信息 */
.company-info {
  padding: 1.5rem;
}

.company-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.company-industry {
  font-size: 0.875rem;
  color: #6366f1;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.company-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* 企业统计 */
.company-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  text-align: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.stat-value {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
}

/* 合作状态标识 */
.partnership-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.badge-icon {
  width: 0.875rem;
  height: 0.875rem;
}



/* Swiper 自定义样式 */
.clients-swiper .swiper-pagination {
  position: relative;
  margin-top: 2rem;
}

.clients-swiper .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #cbd5e1;
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0 6px;
}

.clients-swiper .swiper-pagination-bullet-active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  transform: scale(1.3);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
}

.clients-swiper .swiper-pagination-bullet-dynamic {
  background: linear-gradient(135deg, #93c5fd, #60a5fa);
}

/* 动画效果 */
@keyframes logoShimmer {
  0%, 100% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  50% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .company-logo {
    height: 100px;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
}

/* Demo Section */
.demo-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

.demo-features {
  margin-bottom: 2rem;
}

.demo-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.demo-feature:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-container {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.video-placeholder {
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.play-button {
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button:hover {
  background-color: white;
  transform: scale(1.1);
}

.play-icon {
  width: 2rem;
  height: 2rem;
  color: #1e3a8a;
  margin-left: 0.25rem;
}

.video-overlay {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
}

.video-overlay h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.video-overlay p {
  opacity: 0.9;
}

/* Solutions Section */
.solutions-section {
  padding: 6rem 0;
  background-color: white;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.solution-card {
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.solution-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.solution-icon .icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.solution-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.solution-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.solution-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  padding: 0.25rem 0.75rem;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.solution-link {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.solution-link:hover {
  color: #1d4ed8;
}

/* Partners Section */
.partners-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.partner-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  margin-bottom: 1rem;
}

.partner-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.partner-type {
  color: #6b7280;
  font-size: 0.875rem;
}

/* FAQ Section */
.faq-section {
  padding: 6rem 0;
  background-color: white;
}

.faq-list {
  max-width: 48rem;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-question {
  padding: 1.5rem 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: #3b82f6;
}

.faq-question h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.faq-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.open {
  max-height: 200px;
  padding-bottom: 1.5rem;
}

.faq-answer p {
  color: #6b7280;
  line-height: 1.6;
}

.faq-cta {
  text-align: center;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #e5e7eb;
}

.faq-cta p {
  color: #6b7280;
  margin-bottom: 1rem;
}

/* Newsletter Section */
.newsletter-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

.newsletter-content {
  text-align: center;
  max-width: 32rem;
  margin: 0 auto;
}

.newsletter-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.newsletter-description {
  color: #dbeafe;
  margin-bottom: 2rem;
}

.newsletter-form {
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.email-input:focus {
  outline: 2px solid #dbeafe;
}

.subscribe-btn {
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #1e3a8a;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover:not(:disabled) {
  background-color: #f3f4f6;
}

.subscribe-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.privacy-note {
  color: #bfdbfe;
  font-size: 0.875rem;
}

/* Back to Top Button */
.back-to-top-container {
  position: fixed;
  bottom: 8rem;
  right: 2rem;
  z-index: 999;
}

.back-to-top-btn {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #1f2937, #374151);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.back-to-top-btn:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #374151, #4b5563);
}

.back-to-top-btn:active {
  transform: translateY(0) scale(1.05);
}

.back-to-top-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.back-to-top-btn:hover .back-to-top-icon {
  transform: translateY(-2px);
}

.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-ring-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
}

.progress-ring-progress {
  fill: none;
  stroke: #3b82f6;
  stroke-width: 2;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.back-to-top-tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.75rem;
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 0.75rem;
  border-radius: 0.375rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.back-to-top-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-left-color: rgba(0, 0, 0, 0.8);
}

.back-to-top-container:hover .back-to-top-tooltip {
  opacity: 1;
  visibility: visible;
}

/* Fade transition for back to top button */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Chat Widget */
.chat-widget {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.chat-trigger {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-trigger:hover {
  transform: scale(1.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}

.chat-icon,
.close-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.chat-window {
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 24rem;
  max-height: 32rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: slideInUp 0.3s ease;
}

.chat-header {
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 1rem;
}

.close-chat {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
}

.close-chat:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.chat-content {
  padding: 1rem;
  max-height: 20rem;
  overflow-y: auto;
}

.chat-message {
  background-color: #f3f4f6;
  padding: 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
}

.chat-message.bot {
  background-color: #dbeafe;
}

.quick-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.quick-question-btn {
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quick-question-btn:hover {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.chat-input {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.5rem;
}

.message-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.message-input:focus {
  outline: 2px solid #3b82f6;
  border-color: transparent;
}

.send-btn {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-btn:hover {
  background-color: #1d4ed8;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 639px) {
  .back-to-top-container {
    bottom: 7rem;
    right: 1rem;
  }
  
  .back-to-top-btn {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .back-to-top-icon {
    width: 1rem;
    height: 1rem;
  }
  
  .back-to-top-tooltip {
    display: none; /* 移动端隐藏工具提示 */
  }
  
  .chat-widget {
    bottom: 1rem;
    right: 1rem;
  }
  
  .chat-trigger {
    width: 3rem;
    height: 3rem;
  }
  
  .chat-window {
    width: calc(100vw - 2rem);
    right: -1rem;
  }
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .form-group {
    max-width: 24rem;
    margin: 0 auto 1rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .demo-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .partners-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .solutions-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style> 