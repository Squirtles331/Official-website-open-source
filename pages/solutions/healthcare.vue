<template>
  <div class="solution-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="breadcrumb">
            <NuxtLink to="/">首页</NuxtLink>
            <span>/</span>
            <span>医疗健康解决方案</span>
          </div>
          <div class="hero-icon">🏥</div>
          <h1 class="hero-title">医疗健康官网解决方案</h1>
          <p class="hero-description">
            专为医院、诊所、医疗机构打造的专业官网解决方案，
            提升患者服务体验，建立医疗机构权威形象
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
          <p class="section-description">为医疗健康行业量身定制的专业功能</p>
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
            <h2 class="benefits-title">为什么选择我们的医疗解决方案</h2>
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
                <span>🩺</span>
                <p>医疗管理系统</p>
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
          <p class="section-description">看看其他医疗机构如何通过我们的解决方案提升服务质量</p>
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
          <h2 class="cta-title">准备提升您的医疗服务质量？</h2>
          <p class="cta-description">
            立即联系我们，获取专属的医疗健康行业官网解决方案
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
  title: '医疗健康官网解决方案 - 开源官网',
  description: '专为医院、诊所、医疗机构打造的专业官网解决方案，包含预约挂号、医生介绍、健康资讯等核心功能',
  ogTitle: '医疗健康官网解决方案 - 开源官网',
  ogDescription: '专为医疗健康行业量身定制的专业官网解决方案',
})

// 功能特性
const features = [
  {
    id: 1,
    icon: '📅',
    title: '在线预约挂号',
    description: '便捷的在线预约系统，患者可以随时预约医生，减少排队等待时间'
  },
  {
    id: 2,
    icon: '👨‍⚕️',
    title: '医生介绍系统',
    description: '详细的医生信息展示，包括专业资质、擅长领域、出诊时间等'
  },
  {
    id: 3,
    icon: '📰',
    title: '健康资讯发布',
    description: '专业的健康知识和医疗资讯发布平台，提升患者健康意识'
  },
  {
    id: 4,
    icon: '🏥',
    title: '科室导航',
    description: '清晰的科室分类和导航，帮助患者快速找到对应的医疗服务'
  },
  {
    id: 5,
    icon: '💊',
    title: '药品查询',
    description: '在线药品信息查询系统，包括药品说明、使用方法等详细信息'
  },
  {
    id: 6,
    icon: '📱',
    title: '移动端优化',
    description: '完美适配手机访问，患者可以随时随地获取医疗服务'
  }
]

// 优势介绍
const benefits = [
  {
    id: 1,
    title: '合规的医疗设计',
    description: '严格遵循医疗行业规范，确保网站内容的专业性和合规性'
  },
  {
    id: 2,
    title: '患者隐私保护',
    description: '采用先进的数据加密技术，严格保护患者个人信息和隐私'
  },
  {
    id: 3,
    title: '便民服务功能',
    description: '提供多种便民服务，提升患者就医体验和满意度'
  },
  {
    id: 4,
    title: '专业内容管理',
    description: '支持医疗专业内容的发布和管理，建立权威的医疗信息平台'
  }
]

// 成功案例
const cases = [
  {
    id: 1,
    logo: '🏥',
    name: '仁爱医院',
    type: '综合医院',
    description: '通过我们的解决方案，成功建立了完整的在线服务体系，患者满意度显著提升。',
    stats: [
      { value: '5000+', label: '日均访问' },
      { value: '98%', label: '患者满意度' }
    ]
  },
  {
    id: 2,
    logo: '🦷',
    name: '口腔专科诊所',
    type: '专科诊所',
    description: '利用我们的平台成功开展在线咨询服务，预约量增长了200%，业务快速发展。',
    stats: [
      { value: '300+', label: '月预约量' },
      { value: '150%', label: '业务增长' }
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
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
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
  color: #059669;
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
  color: #059669;
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
  background: #f0fdf4;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #bbf7d0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(5, 150, 105, 0.1);
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
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
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
  background: #f0fdf4;
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
  color: #059669;
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