<template>
  <div class="solution-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="breadcrumb">
            <NuxtLink to="/">首页</NuxtLink>
            <span>/</span>
            <span>教育行业解决方案</span>
          </div>
          <div class="hero-icon">🎓</div>
          <h1 class="hero-title">教育行业官网解决方案</h1>
          <p class="hero-description">
            专为学校、培训机构、教育平台打造的现代化官网解决方案，
            助力教育机构建立专业形象，提升招生效果
          </p>
          <div class="hero-buttons">
            <NuxtLink to="/contact" class="btn btn-primary">
              立即咨询
            </NuxtLink>
            <NuxtLink to="/templates" class="btn btn-outline">
              查看模板
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心功能特性</h2>
          <p class="section-description">为教育行业量身定制的专业功能</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="benefits-content">
          <div class="benefits-text">
            <h2 class="benefits-title">为什么选择我们的教育解决方案</h2>
            <div class="benefits-list">
              <div v-for="benefit in benefits" :key="benefit.id" class="benefit-item">
                <div class="benefit-icon">✅</div>
                <div class="benefit-content">
                  <h4 class="benefit-title">{{ benefit.title }}</h4>
                  <p class="benefit-description">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="benefits-image">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <span>📚</span>
                <p>教育管理系统</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="cases-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">成功案例</h2>
          <p class="section-description">看看其他教育机构如何通过我们的解决方案获得成功</p>
        </div>
        <div class="cases-grid">
          <div v-for="caseStudy in cases" :key="caseStudy.id" class="case-card">
            <div class="case-header">
              <div class="case-logo">{{ caseStudy.logo }}</div>
              <div class="case-info">
                <h3 class="case-name">{{ caseStudy.name }}</h3>
                <p class="case-type">{{ caseStudy.type }}</p>
              </div>
            </div>
            <p class="case-description">{{ caseStudy.description }}</p>
            <div class="case-stats">
              <div v-for="stat in caseStudy.stats" :key="stat.label" class="stat-item">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">准备开始您的教育数字化之旅？</h2>
          <p class="cta-description">
            立即联系我们，获取专属的教育行业官网解决方案
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn btn-primary">
              免费咨询
            </NuxtLink>
            <NuxtLink to="/products" class="btn btn-outline">
              了解产品
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO配置
useSeoMeta({
  title: '教育行业官网解决方案 - 开源官网',
  description: '专为学校、培训机构、教育平台打造的现代化官网解决方案，包含在线课程、学员管理、证书系统等核心功能',
  ogTitle: '教育行业官网解决方案 - 开源官网',
  ogDescription: '专为教育行业量身定制的专业官网解决方案',
})

// 功能特性
const features = [
  {
    id: 1,
    icon: '📚',
    title: '在线课程管理',
    description: '完整的课程发布、管理和播放系统，支持视频、音频、文档等多种格式'
  },
  {
    id: 2,
    icon: '👥',
    title: '学员管理系统',
    description: '学员注册、学习进度跟踪、成绩管理，全方位的学员服务体系'
  },
  {
    id: 3,
    icon: '🏆',
    title: '证书认证系统',
    description: '自动生成学习证书，支持数字签名和防伪验证，提升证书权威性'
  },
  {
    id: 4,
    icon: '📊',
    title: '教学数据分析',
    description: '详细的学习数据统计和分析，帮助优化教学内容和方法'
  },
  {
    id: 5,
    icon: '💰',
    title: '在线支付系统',
    description: '集成多种支付方式，支持课程购买、分期付款等灵活支付模式'
  },
  {
    id: 6,
    icon: '📱',
    title: '移动端适配',
    description: '完美适配手机和平板，随时随地进行学习和管理'
  }
]

// 优势介绍
const benefits = [
  {
    id: 1,
    title: '专业的教育设计',
    description: '基于教育行业特点设计的界面和功能，更符合教育机构的实际需求'
  },
  {
    id: 2,
    title: '强大的内容管理',
    description: '支持多种教学内容格式，灵活的课程组织和发布机制'
  },
  {
    id: 3,
    title: '完善的用户体验',
    description: '简洁直观的操作界面，让学员和教师都能轻松上手'
  },
  {
    id: 4,
    title: '安全稳定的系统',
    description: '采用先进的安全技术，保障教学数据和用户隐私安全'
  }
]

// 成功案例
const cases = [
  {
    id: 1,
    logo: '🏫',
    name: '阳光中学',
    type: '中等教育',
    description: '通过我们的解决方案，成功搭建了在线教学平台，疫情期间保障了教学的连续性。',
    stats: [
      { value: '1200+', label: '在线学生' },
      { value: '95%', label: '满意度' }
    ]
  },
  {
    id: 2,
    logo: '🎓',
    name: '智慧培训学院',
    type: '职业培训',
    description: '利用我们的平台开展在线职业培训，学员通过率显著提升，获得了良好的市场口碑。',
    stats: [
      { value: '800+', label: '培训课程' },
      { value: '5000+', label: '毕业学员' }
    ]
  }
]
</script>

<style scoped>
.solution-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-content {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
}

.breadcrumb {
  margin-bottom: 2rem;
  opacity: 0.9;
}

.breadcrumb a {
  color: white;
  text-decoration: none;
}

.breadcrumb span {
  margin: 0 0.5rem;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #667eea;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: white;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.benefits-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.benefits-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  gap: 1rem;
}

.benefit-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.benefit-description {
  color: #64748b;
  line-height: 1.6;
}

.benefits-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 20rem;
  height: 15rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.placeholder-content {
  text-align: center;
}

.placeholder-content span {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

/* Cases Section */
.cases-section {
  padding: 6rem 0;
  background: white;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.case-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.case-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.case-logo {
  width: 3rem;
  height: 3rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.case-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
}

.case-type {
  color: #64748b;
  font-size: 0.875rem;
}

.case-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.case-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .benefits-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .case-stats {
    justify-content: space-around;
  }
  
  .cta-title {
    font-size: 2rem;
  }
}
</style> 