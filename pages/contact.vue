<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in">
            <span class="badge-text">联系我们</span>
          </div>
          <h1 class="hero-title animate-text-reveal">
            让我们一起创造精彩
          </h1>
          <p class="hero-description animate-fade-in-up">
            有任何问题或建议？我们的专业团队随时为您提供支持，
            <span class="highlight">让每一次沟通都变得有价值</span>
          </p>
          <div class="hero-cta animate-slide-up">
            <button class="quick-contact-btn" @click="scrollToForm">
              <span>立即联系</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="contact-methods-section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title">多种联系方式</h2>
          <p class="section-description">选择最适合您的沟通方式</p>
        </div>
        <div class="methods-grid">
          <div
            v-for="(method, index) in contactMethods"
            :key="method.id"
            class="method-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="method-icon">
              <div class="icon-background"></div>
              <span class="icon-emoji">{{ method.icon }}</span>
            </div>
            <h3 class="method-title">{{ method.title }}</h3>
            <p class="method-description">{{ method.description }}</p>
            <div class="method-info">
              <span v-for="info in method.info" :key="info" class="info-item">
                {{ info }}
              </span>
            </div>
            <button class="method-action" @click="handleMethodClick(method.action)">
              {{ method.actionText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="form-section" ref="formSection">
      <div class="form-background">
        <div class="form-pattern"></div>
      </div>
      <div class="container">
        <div class="form-layout">
          <!-- Contact Form -->
          <div class="form-container animate-slide-in-left">
            <div class="form-header">
              <h2 class="form-title">发送消息</h2>
              <p class="form-subtitle">我们会在24小时内回复您的消息</p>
            </div>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">姓名 *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="form-input"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">邮箱 *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="phone" class="form-label">电话</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    placeholder="请输入您的电话"
                  />
                </div>
                <div class="form-group">
                  <label for="company" class="form-label">公司</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="form-input"
                    placeholder="请输入您的公司"
                  />
                </div>
              </div>



              <div class="form-group full-width">
                <label for="message" class="form-label">留言 *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="form-input form-textarea"
                  placeholder="请详细描述您的问题或需求..."
                ></textarea>
              </div>

              <div class="form-actions">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="submit-btn"
                  :class="{ 'submit-btn-loading': isSubmitting }"
                >
                  <span v-if="isSubmitting" class="btn-content">
                    <svg class="loading-icon" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    发送中...
                  </span>
                  <span v-else class="btn-content">
                    <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    发送消息
                  </span>
                </button>
                <button type="button" class="reset-btn" @click="resetForm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  重置
                </button>
              </div>
            </form>

            <!-- Form Status -->
            <div v-if="submitStatus" class="form-status" :class="{
              'status-success': submitStatus === 'success',
              'status-error': submitStatus === 'error'
            }">
              <div class="status-icon">
                <svg v-if="submitStatus === 'success'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="status-content">
                <h4 v-if="submitStatus === 'success'" class="status-title">消息发送成功！</h4>
                <h4 v-else class="status-title">发送失败</h4>
                <p v-if="submitStatus === 'success'" class="status-text">
                  我们已收到您的消息，会在24小时内回复您。
                </p>
                <p v-else class="status-text">
                  请检查网络连接后重试，或直接联系我们的客服。
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="info-container animate-slide-in-right">
            <div class="info-card">
              <h3 class="info-title">联系信息</h3>
              <div class="info-list">
                <div class="info-item">
                  <div class="item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="item-content">
                    <h4>地址</h4>
                    <p>A市B区C大厦<br>D座 XX层 XXXX室</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="item-content">
                    <h4>电话</h4>
                    <p>+86 AAA-BBB-CCCC<br>+86 DDD-EEEEEEEE</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="item-content">
                    <h4>邮箱</h4>
                    <p>abcd@example.com<br>efgh@example.com</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  </div>
                  <div class="item-content">
                    <h4>工作时间</h4>
                    <p>周一至周五: 9:00 - 18:00<br>周末: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-card">
              <h3 class="social-title">关注我们</h3>
              <div class="social-links">
                <a href="#" class="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.096.119.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378 0 0-.599 2.282-.744 2.840-.282 1.079-1.044 2.431-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  <span>Pinterest</span>
                </a>
                <a href="#" class="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599-.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title">常见问题</h2>
          <p class="section-description">快速找到您需要的答案</p>
        </div>
        <div class="faq-container">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="faq-item animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <button
              class="faq-question"
              @click="toggleFaq(faq.id)"
              :class="{ active: activeFaq === faq.id }"
            >
              <span>{{ faq.question }}</span>
              <svg
                class="faq-icon"
                :class="{ rotated: activeFaq === faq.id }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div
              class="faq-answer"
              :class="{ active: activeFaq === faq.id }"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 接口定义
interface ContactMethod {
  id: number
  title: string
  description: string
  icon: string
  info: string[]
  action: string
  actionText: string
}

interface FAQ {
  id: number
  question: string
  answer: string
}

interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

// SEO设置
useSeoMeta({
  title: '联系我们 - 开源官网',
  description: '有任何问题或建议？我们的专业团队随时为您提供支持。多种联系方式，快速响应。',
  ogTitle: '联系我们 - 开源官网',
  ogDescription: '有任何问题或建议？我们的专业团队随时为您提供支持。多种联系方式，快速响应。',
})

// 响应式状态
const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const activeFaq = ref<number | null>(null)
const formSection = ref<HTMLElement>()

// 表单数据
const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

// 联系方式
const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: '在线客服',
    description: '7x24小时在线支持',
    icon: '💬',
    info: ['即时响应', '专业解答', '全天候服务'],
    action: 'chat',
    actionText: '开始对话'
  },
  {
    id: 2,
    title: '电话咨询',
    description: '直接电话沟通',
    icon: '📞',
    info: ['AAA-BBB-CCCC', 'DDD-EEEEEEEE', '工作日 9:00-18:00'],
    action: 'call',
    actionText: '立即致电'
  },
  {
    id: 3,
    title: '邮件联系',
    description: '详细问题描述',
    icon: '📧',
    info: ['abcd@example.com', 'efgh@example.com', '24小时内回复'],
    action: 'email',
    actionText: '发送邮件'
  },
  {
    id: 4,
    title: '预约会议',
    description: '深度交流讨论',
    icon: '📅',
    info: ['视频会议', '上门拜访', '专业顾问'],
    action: 'meeting',
    actionText: '预约时间'
  }
]

// FAQ数据
const faqs: FAQ[] = [
  {
    id: 1,
    question: '如何开始使用你们的产品？',
    answer: '您可以访问我们的产品页面，选择适合的模板或组件，按照文档指引进行安装和配置。我们提供详细的使用教程和示例代码。'
  },
  {
    id: 2,
    question: '是否提供技术支持？',
    answer: '是的，我们提供全面的技术支持服务。包括在线文档、社区论坛、邮件支持，以及付费用户的优先技术支持。'
  },
  {
    id: 3,
    question: '产品是否完全免费？',
    answer: '我们的核心产品是完全开源免费的。同时我们也提供付费的专业版服务，包括更多高级功能、优先支持和定制开发。'
  },
  {
    id: 4,
    question: '可以商业使用吗？',
    answer: '可以的，我们的开源产品采用MIT许可证，允许商业使用。付费版本还提供商业许可和额外的法律保障。'
  },
  {
    id: 5,
    question: '如何获取最新更新？',
    answer: '您可以关注我们的GitHub仓库、订阅邮件通讯，或者关注我们的社交媒体账号获取最新的产品更新和功能发布信息。'
  },
  {
    id: 6,
    question: '是否支持定制开发？',
    answer: '是的，我们提供定制开发服务。可以根据您的具体需求进行功能定制、界面设计或系统集成。请联系我们的销售团队了解详情。'
  }
]

// 方法
const scrollToForm = () => {
  if (formSection.value) {
    formSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleMethodClick = (action: string) => {
  switch (action) {
    case 'chat':
      // 打开在线客服
      alert('正在连接在线客服...')
      break
    case 'call':
      // 拨打电话
      window.open('tel:AAA-BBB-CCCC')
      break
    case 'email':
      // 发送邮件
      window.open('mailto:abcd@example.com')
      break
    case 'meeting':
      // 预约会议
      alert('正在跳转到预约页面...')
      break
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 模拟成功/失败
    const success = Math.random() > 0.2
    
    if (success) {
      submitStatus.value = 'success'
      // 重置表单
      form.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // 3秒后隐藏状态消息
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}

const toggleFaq = (id: number) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  }
  submitStatus.value = null
}
</script>

<style scoped lang="scss">
.contact-page {
  min-height: 100vh;
  overflow-x: hidden;
}

// Hero Section
.hero-section {
  position: relative;
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  
  .hero-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
  }
}



.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 64rem;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  
  .highlight {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }
}

.hero-cta {
  margin-top: 2rem;
}

.quick-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
}

// Contact Methods Section
.contact-methods-section {
  padding: 8rem 0;
  background: #fafbfc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }
  
  .section-description {
    font-size: 1.125rem;
    color: #64748b;
  }
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.method-card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

.method-icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    opacity: 0.1;
  }
  
  .icon-emoji {
    position: relative;
    z-index: 2;
    font-size: 2.5rem;
  }
}

.method-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.method-description {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.method-info {
  margin-bottom: 2rem;
  
  .info-item {
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    background: #f1f5f9;
    border-radius: 0.5rem;
    color: #475569;
    font-size: 0.875rem;
    font-weight: 500;
  }
}

.method-action {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
}

// Contact Form Section
.form-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  overflow: hidden;
}

.form-background {
  position: absolute;
  inset: 0;
  
  .form-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
  }
}

.form-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

// Form Container
.form-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.form-header {
  text-align: center;
  margin-bottom: 1.75rem;
  color: white;
  
  .form-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  
  .form-subtitle {
    opacity: 0.9;
    line-height: 1.6;
    font-size: 1.125rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  &.full-width {
    grid-column: 1 / -1;
  }
  
  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.75rem;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.75rem;
    font-size: 1rem;
    color: white;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    
    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }
  }
  

  
  .form-textarea {
    resize: vertical;
    min-height: 8rem;
  }
}

// Form Actions
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.submit-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  min-height: 48px;
  
  .btn-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .send-icon,
  .loading-icon {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
  }
  
  .loading-icon {
    animation: spin 1s linear infinite;
  }
  
  &:hover:not(.submit-btn-loading) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  &.submit-btn-loading {
    opacity: 0.8;
    cursor: not-allowed;
    
    .btn-content {
      opacity: 0.9;
    }
  }
}

.reset-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  min-height: 48px;
  
  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    justify-content: center;
  }
}

.form-status {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  
  .status-icon {
    width: 3rem;
    height: 3rem;
    margin: 0 auto 1rem;
  }
  
  .status-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .status-text {
    line-height: 1.6;
  }
  
  &.status-success {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
  }
  
  &.status-error {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
  }
}

// Contact Info
.info-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  .info-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: white;
    margin-bottom: 2rem;
  }
  
  .info-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      
      .item-icon {
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #fbbf24;
        }
      }
      
      .item-content {
        flex: 1;
        
        h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
      }
    }
  }
}

// Social Links
.social-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  .social-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: white;
    margin-bottom: 2rem;
  }
  
  .social-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
        color: white;
      }
      
      svg {
        width: 1.5rem;
        height: 1.5rem;
        flex-shrink: 0;
      }
      
      span {
        font-weight: 500;
      }
    }
  }
}

// FAQ Section
.faq-section {
  padding: 8rem 0;
  background: #f8fafc;
}

.faq-container {
  max-width: 56rem;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
  
  &:focus {
    outline: none;
    background: #f1f5f9;
  }
  
  span {
    font-weight: 600;
    color: #1e293b;
    font-size: 1.125rem;
  }
}

.faq-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #64748b;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &.rotated {
    transform: rotate(180deg);
    color: #667eea;
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  background: #fafbfc;
  
  &.active {
    max-height: 30rem;
    padding: 0 2rem 2rem;
  }
  
  p {
    color: #475569;
    line-height: 1.7;
    margin: 0;
    font-size: 1rem;
  }
}

// Container Utility
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

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}



@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Utility animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-text-reveal {
  animation: textReveal 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes textReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Design */
@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }

  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .social-links {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2.25rem;
  }
  
  .form-layout {
    grid-template-columns: 2fr 1fr;
  }
  
  .methods-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 3.75rem;
  }

  .methods-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 0 4rem;
  }
  
  .contact-methods-section,
  .form-section,
  .faq-section {
    padding: 4rem 0;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .section-title {
    font-size: 2rem !important;
  }
  
  .methods-grid {
    grid-template-columns: 1fr;
  }
  
  .form-layout {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 640px) {
  .form-container,
  .info-card,
  .social-card {
    padding: 1.5rem;
  }
  
  .faq-question {
    padding: 1rem !important;
    
    span {
      font-size: 1rem !important;
    }
  }
  
  .faq-answer.active {
    padding: 0 1rem 1rem !important;
  }
}
</style> 