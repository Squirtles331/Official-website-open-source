<template>
  <div class="solution-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="breadcrumb">
            <NuxtLink to="/">首页</NuxtLink>
            <span>/</span>
            <span>电商零售解决方案</span>
          </div>
          <div class="hero-icon">🛒</div>
          <h1 class="hero-title">电商零售官网解决方案</h1>
          <p class="hero-description">
            专为电商企业、零售商打造的高转化率官网解决方案，
            助力业务增长，提升销售转化
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
          <p class="section-description">为电商零售行业量身定制的专业功能</p>
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
            <h2 class="benefits-title">为什么选择我们的电商解决方案</h2>
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
                <span>📊</span>
                <p>电商数据分析</p>
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
          <p class="section-description">看看其他电商企业如何通过我们的解决方案实现业务增长</p>
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
          <h2 class="cta-title">准备提升您的电商销售业绩？</h2>
          <p class="cta-description">
            立即联系我们，获取专属的电商零售行业官网解决方案
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
  title: '电商零售官网解决方案 - 开源官网',
  description: '专为电商企业、零售商打造的高转化率官网解决方案，包含产品展示、在线支付、订单管理等核心功能',
  ogTitle: '电商零售官网解决方案 - 开源官网',
  ogDescription: '专为电商零售行业量身定制的专业官网解决方案',
})

// 功能特性
const features = [
  {
    id: 1,
    icon: '🛍️',
    title: '产品展示系统',
    description: '强大的产品展示和管理系统，支持多图片、规格选择、库存管理等功能'
  },
  {
    id: 2,
    icon: '💳',
    title: '在线支付集成',
    description: '集成主流支付方式，支持微信支付、支付宝、银联等多种支付渠道'
  },
  {
    id: 3,
    icon: '📦',
    title: '订单管理系统',
    description: '完整的订单处理流程，从下单到发货的全程跟踪管理'
  },
  {
    id: 4,
    icon: '👥',
    title: '客户管理系统',
    description: '详细的客户信息管理，支持会员等级、积分系统、优惠券等功能'
  },
  {
    id: 5,
    icon: '📈',
    title: '销售数据分析',
    description: '实时销售数据统计和分析，帮助优化营销策略和提升转化率'
  },
  {
    id: 6,
    icon: '📱',
    title: '移动商城',
    description: '完美适配移动端，为用户提供流畅的移动购物体验'
  }
]

// 优势介绍
const benefits = [
  {
    id: 1,
    title: '高转化率设计',
    description: '基于电商最佳实践设计的页面布局和用户流程，有效提升转化率'
  },
  {
    id: 2,
    title: '多渠道营销',
    description: '支持多种营销工具和推广渠道，帮助扩大品牌影响力'
  },
  {
    id: 3,
    title: '安全可靠',
    description: '采用先进的安全技术，保障交易安全和用户信息安全'
  },
  {
    id: 4,
    title: '快速部署',
    description: '模块化设计，支持快速部署和定制，缩短上线时间'
  }
]

// 成功案例
const cases = [
  {
    id: 1,
    logo: '👗',
    name: '时尚服装店',
    type: '服装零售',
    description: '通过我们的解决方案成功建立在线商城，销售额增长了300%，成为本地知名品牌。',
    stats: [
      { value: '300%', label: '销售增长' },
      { value: '85%', label: '客户满意度' }
    ]
  },
  {
    id: 2,
    logo: '📱',
    name: '数码科技',
    type: '电子产品',
    description: '利用我们的平台成功转型线上销售，订单量增长显著，建立了完善的客户服务体系。',
    stats: [
      { value: '2000+', label: '月订单量' },
      { value: '92%', label: '复购率' }
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
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
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
  color: #f59e0b;
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
  color: #f59e0b;
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
  background: #fef3c7;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #fde68a;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(245, 158, 11, 0.1);
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
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
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
  background: #fef3c7;
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
  color: #f59e0b;
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