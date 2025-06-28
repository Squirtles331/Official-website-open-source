<template>
  <div class="solution-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="breadcrumb">
            <NuxtLink to="/">首页</NuxtLink>
            <span>/</span>
            <span>金融服务解决方案</span>
          </div>
          <div class="hero-icon">🏦</div>
          <h1 class="hero-title">金融服务官网解决方案</h1>
          <p class="hero-description">
            专为银行、保险、证券等金融机构打造的安全可靠官网解决方案，
            严格遵循金融监管要求，提升客户信任度
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
          <p class="section-description">为金融服务行业量身定制的专业功能</p>
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
            <h2 class="benefits-title">为什么选择我们的金融解决方案</h2>
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
                <span>🔒</span>
                <p>金融安全系统</p>
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
          <p class="section-description">看看其他金融机构如何通过我们的解决方案提升服务效率</p>
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
          <h2 class="cta-title">准备构建您的金融服务平台？</h2>
          <p class="cta-description">
            立即联系我们，获取专属的金融服务行业官网解决方案
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
  title: '金融服务官网解决方案 - 开源官网',
  description: '专为银行、保险、证券等金融机构打造的安全可靠官网解决方案，包含风险控制、合规管理、数据加密等核心功能',
  ogTitle: '金融服务官网解决方案 - 开源官网',
  ogDescription: '专为金融服务行业量身定制的专业官网解决方案',
})

// 功能特性
const features = [
  {
    id: 1,
    icon: '🛡️',
    title: '风险控制系统',
    description: '全方位的风险识别和控制机制，实时监控异常行为，保障资金安全'
  },
  {
    id: 2,
    icon: '📋',
    title: '合规管理平台',
    description: '严格遵循金融监管要求，自动化合规检查，降低合规风险'
  },
  {
    id: 3,
    icon: '🔐',
    title: '数据加密保护',
    description: '采用银行级加密技术，多重安全防护，确保客户数据绝对安全'
  },
  {
    id: 4,
    icon: '📊',
    title: '智能分析系统',
    description: '强大的数据分析能力，为业务决策提供科学依据和洞察'
  },
  {
    id: 5,
    icon: '🤖',
    title: '智能客服系统',
    description: '24/7智能客服支持，快速响应客户需求，提升服务质量'
  },
  {
    id: 6,
    icon: '📱',
    title: '移动金融服务',
    description: '完美的移动端体验，随时随地提供便捷的金融服务'
  }
]

// 优势介绍
const benefits = [
  {
    id: 1,
    title: '银行级安全标准',
    description: '采用最高级别的安全标准和加密技术，确保数据和交易的绝对安全'
  },
  {
    id: 2,
    title: '监管合规保障',
    description: '严格遵循金融监管要求，内置合规检查机制，降低合规风险'
  },
  {
    id: 3,
    title: '高性能架构',
    description: '支持高并发访问，确保在业务高峰期也能提供稳定的服务'
  },
  {
    id: 4,
    title: '专业技术支持',
    description: '专业的金融IT团队提供技术支持，确保系统稳定运行'
  }
]

// 成功案例
const cases = [
  {
    id: 1,
    logo: '🏦',
    name: '城市商业银行',
    type: '商业银行',
    description: '通过我们的解决方案成功建立了完整的数字化银行平台，客户满意度和业务效率都显著提升。',
    stats: [
      { value: '99.9%', label: '系统可用性' },
      { value: '50万+', label: '活跃用户' }
    ]
  },
  {
    id: 2,
    logo: '💼',
    name: '保险集团',
    type: '保险服务',
    description: '利用我们的平台成功转型数字化服务，理赔效率提升300%，客户投诉率下降了80%。',
    stats: [
      { value: '300%', label: '效率提升' },
      { value: '80%', label: '投诉率下降' }
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
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
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
  color: #1e40af;
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
  color: #1e40af;
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
  background: #eff6ff;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #bfdbfe;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(30, 64, 175, 0.1);
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
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
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
  background: #eff6ff;
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
  color: #1e40af;
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