<template>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="floating-elements">
          <div class="element element-1">🎨</div>
          <div class="element element-2">🧩</div>
          <div class="element element-3">🎭</div>
          <div class="element element-4">🔧</div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in">
            <span class="badge-text">产品服务</span>
          </div>
          <h1 class="hero-title animate-text-reveal">
            一站式数字化解决方案
          </h1>
          <p class="hero-description animate-fade-in-up">
            从精美模板到强大组件，从个性主题到实用插件，
            <span class="highlight">为您的创意提供无限可能</span>
          </p>
          <div class="hero-stats animate-slide-up">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">精品模板</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">200+</div>
              <div class="stat-label">组件库</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">实用插件</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Categories -->
    <section class="categories-section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title">产品分类</h2>
          <p class="section-description">丰富的产品生态，满足您的所有需求</p>
        </div>
        <div class="categories-grid">
          <div
            v-for="(category, index) in productCategories"
            :key="category.id"
            class="category-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="card-header">
              <div class="category-icon">{{ category.icon }}</div>
              <div class="category-badge">{{ category.badge }}</div>
            </div>
            <div class="card-content">
              <h3 class="category-title">{{ category.name }}</h3>
              <p class="category-description">{{ category.description }}</p>
              <ul class="category-features">
                <li v-for="feature in category.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <NuxtLink :to="category.href" class="category-link">
                <span>探索更多</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-section">
      <div class="featured-background">
        <div class="featured-pattern"></div>
      </div>
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title light">精选产品</h2>
          <p class="section-description light">精心挑选的高质量解决方案</p>
        </div>
        <div class="products-grid">
          <div
            v-for="(product, index) in featuredProducts"
            :key="product.id"
            class="product-card animate-float-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="product-preview">
              <div class="preview-background"></div>
              <div class="preview-content">
                <div class="preview-icon">{{ product.icon }}</div>
                <div class="preview-badges">
                  <span class="category-badge">{{ product.category }}</span>
                  <span class="price-badge">{{ product.price }}</span>
                </div>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">
                  <span>立即使用</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
                <button class="btn btn-outline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  预览
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title">为什么选择我们的产品？</h2>
          <p class="section-description">专业品质，值得信赖</p>
        </div>
        <div class="features-grid">
          <div
            v-for="(feature, index) in productFeatures"
            :key="feature.id"
            class="feature-card animate-slide-in"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="feature-icon">
              <div class="icon-background"></div>
              <span class="icon-emoji">{{ feature.icon }}</span>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="pricing-background">
        <div class="pricing-overlay"></div>
      </div>
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title light">定价方案</h2>
          <p class="section-description light">选择最适合您的方案</p>
        </div>
        <div class="pricing-grid">
          <div
            v-for="(plan, index) in pricingPlans"
            :key="plan.id"
            class="pricing-card animate-scale-in"
            :class="{ featured: plan.featured }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="plan-header">
              <h3 class="plan-name">{{ plan.name }}</h3>
              <div class="plan-price">
                <span class="price-value">{{ plan.price }}</span>
                <span class="price-period">{{ plan.period }}</span>
              </div>
              <p class="plan-description">{{ plan.description }}</p>
            </div>
            <div class="plan-features">
              <ul class="features-list">
                <li v-for="feature in plan.features" :key="feature" class="feature-item">
                  <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="plan-action">
              <button class="btn" :class="plan.featured ? 'btn-white' : 'btn-primary'">
                {{ plan.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-pattern"></div>
      </div>
      <div class="container">
        <div class="cta-content animate-fade-in">
          <h2 class="cta-title">准备开始您的项目？</h2>
          <p class="cta-description">
            立即体验我们的产品，让创意变为现实
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn btn-white">
              <span>联系我们</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
            <button class="btn btn-outline-white">
              免费试用
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 接口定义
interface ProductCategory {
  id: number
  name: string
  description: string
  icon: string
  badge: string
  features: string[]
  href: string
}

interface FeaturedProduct {
  id: number
  name: string
  description: string
  category: string
  icon: string
  price: string
  tags: string[]
}

interface ProductFeature {
  id: number
  title: string
  description: string
  icon: string
}

interface PricingPlan {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  featured?: boolean
}

// SEO设置
useSeoMeta({
  title: '产品服务 - 开源官网',
  description: '为您提供全面的网站解决方案，包括模板库、组件库、主题市场和插件中心，助力快速搭建专业网站。',
  ogTitle: '产品服务 - 开源官网',
  ogDescription: '为您提供全面的网站解决方案，包括模板库、组件库、主题市场和插件中心',
})

// 产品分类
const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: '模板库',
    description: '精心设计的网站模板，覆盖各行各业',
    icon: '🎨',
    badge: '100+ 模板',
    features: ['响应式设计', 'SEO优化', '一键部署', '源码开放'],
    href: '/templates'
  },
  {
    id: 2,
    name: '组件库',
    description: '可复用的UI组件，提升开发效率',
    icon: '🧩',
    badge: '200+ 组件',
    features: ['Vue3组件', 'TypeScript支持', '完整文档', '单元测试'],
    href: '/components'
  },
  {
    id: 3,
    name: '主题市场',
    description: '个性化主题，打造独特视觉体验',
    icon: '🎭',
    badge: '50+ 主题',
    features: ['深色模式', '自定义配色', '字体选择', '布局灵活'],
    href: '/themes'
  },
  {
    id: 4,
    name: '插件中心',
    description: '功能插件扩展，增强网站能力',
    icon: '🔧',
    badge: '30+ 插件',
    features: ['功能扩展', '易于集成', '配置简单', '性能优化'],
    href: '/plugins'
  }
]

// 精选产品
const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: '企业官网模板',
    description: '专业的企业官网解决方案，包含完整的页面结构和功能模块，支持多语言和SEO优化',
    category: '模板',
    icon: '🏢',
    price: '免费',
    tags: ['企业级', '响应式', 'SEO优化']
  },
  {
    id: 2,
    name: 'Vue3组件库',
    description: '基于Vue3和TypeScript的现代化组件库，提供丰富的UI组件和完整的开发工具',
    category: '组件',
    icon: '⚡',
    price: '开源',
    tags: ['Vue3', 'TypeScript', '现代化']
  },
  {
    id: 3,
    name: '暗色主题包',
    description: '优雅的暗色主题设计，支持多种配色方案和自定义选项，提升用户体验',
    category: '主题',
    icon: '🌙',
    price: '免费',
    tags: ['暗色模式', '护眼', '个性化']
  },
  {
    id: 4,
    name: 'SEO优化插件',
    description: '专业的SEO优化工具集，自动生成meta标签，优化页面结构，提升搜索排名',
    category: '插件',
    icon: '🚀',
    price: '免费',
    tags: ['SEO', '自动化', '排名提升']
  },
  {
    id: 5,
    name: '电商解决方案',
    description: '完整的电商网站模板，包含商品展示、购物车、支付集成等功能',
    category: '模板',
    icon: '🛒',
    price: '开源',
    tags: ['电商', '支付', '完整方案']
  },
  {
    id: 6,
    name: '数据可视化组件',
    description: '强大的图表和数据展示组件，支持多种图表类型和交互功能',
    category: '组件',
    icon: '📊',
    price: '免费',
    tags: ['图表', '可视化', '交互']
  }
]

// 产品特性
const productFeatures: ProductFeature[] = [
  {
    id: 1,
    title: '开源免费',
    description: '所有产品完全开源，无需付费，可自由使用和修改',
    icon: '💝'
  },
  {
    id: 2,
    title: '现代技术栈',
    description: '基于Vue3、Nuxt3、TypeScript等现代前端技术',
    icon: '⚡'
  },
  {
    id: 3,
    title: '响应式设计',
    description: '完美适配各种设备，提供一致的用户体验',
    icon: '📱'
  },
  {
    id: 4,
    title: 'SEO优化',
    description: '内置SEO最佳实践，提升搜索引擎排名',
    icon: '🎯'
  },
  {
    id: 5,
    title: '持续更新',
    description: '定期更新功能和修复问题，保持技术领先',
    icon: '🔄'
  },
  {
    id: 6,
    title: '社区支持',
    description: '活跃的开发者社区，提供技术支持和交流',
    icon: '🤝'
  }
]

// 定价方案
const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: '个人版',
    price: '免费',
    period: '永久',
    description: '适合个人开发者和小型项目',
    features: [
      '基础模板访问',
      '核心组件库',
      '基础主题',
      '社区支持',
      '开源许可'
    ],
    buttonText: '开始使用'
  },
  {
    id: 2,
    name: '专业版',
    price: '¥99',
    period: '/月',
    description: '适合中小企业和专业团队',
    features: [
      '全部模板访问',
      '完整组件库',
      '高级主题',
      '优先支持',
      '商业许可',
      '定制服务'
    ],
    buttonText: '立即购买',
    featured: true
  },
  {
    id: 3,
    name: '企业版',
    price: '¥299',
    period: '/月',
    description: '适合大型企业和复杂项目',
    features: [
      '无限制访问',
      '源码授权',
      '专属客服',
      '技术培训',
      '定制开发',
      'SLA保障'
    ],
    buttonText: '联系销售'
  }
]
</script>

<style scoped lang="scss">
.products-page {
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

.floating-elements {
  position: absolute;
  inset: 0;
  
  .element {
    position: absolute;
    font-size: 2rem;
    animation: float-elements 12s ease-in-out infinite;
    opacity: 0.3;
    
    &.element-1 {
      top: 15%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &.element-2 {
      top: 25%;
      right: 15%;
      animation-delay: -3s;
    }
    
    &.element-3 {
      bottom: 30%;
      left: 15%;
      animation-delay: -6s;
    }
    
    &.element-4 {
      bottom: 20%;
      right: 20%;
      animation-delay: -9s;
    }
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

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    opacity: 0.8;
  }
}

// Categories Section
.categories-section {
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
    
    &.light {
      color: white;
    }
  }
  
  .section-description {
    font-size: 1.125rem;
    color: #64748b;
    
    &.light {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

.card-header {
  position: relative;
  padding: 2rem 2rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  .category-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .category-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
  }
}

.card-content {
  padding: 2rem;
  
  .category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
  
  .category-description {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .category-features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: #475569;
      font-size: 0.875rem;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #22c55e;
        font-weight: 600;
      }
    }
  }
}

.card-footer {
  padding: 0 2rem 2rem;
  
  .category-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #667eea;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #5a67d8;
      gap: 0.75rem;
    }
    
    svg {
      width: 1rem;
      height: 1rem;
      transition: transform 0.3s ease;
    }
  }
}

// Featured Section
.featured-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  overflow: hidden;
}

.featured-background {
  position: absolute;
  inset: 0;
  
  .featured-pattern {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.product-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
}

.product-preview {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  .preview-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0.8;
  }
  
  .preview-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    
    .preview-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .preview-badges {
      display: flex;
      gap: 0.5rem;
      
      .category-badge,
      .price-badge {
        padding: 0.25rem 0.75rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        backdrop-filter: blur(10px);
      }
      
      .price-badge {
        background: rgba(251, 191, 36, 0.8);
      }
    }
  }
}

.product-info {
  padding: 2rem;
  color: white;
  
  .product-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  
  .product-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 0.875rem;
  }
  
  .product-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    
    .tag {
      padding: 0.25rem 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  
     .product-actions {
     display: flex;
     gap: 0.75rem;
   }
 }

// Features Section
.features-section {
  padding: 8rem 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .feature-icon {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
    
    .icon-background {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      opacity: 0.1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .icon-emoji {
      position: relative;
      z-index: 2;
      font-size: 2.5rem;
      display: block;
      width: 80px;
      height: 80px;
      line-height: 80px;
    }
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }
  
  .feature-description {
    color: #64748b;
    line-height: 1.6;
  }
}

// Pricing Section
.pricing-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.pricing-background {
  position: absolute;
  inset: 0;
  
  .pricing-overlay {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &.featured {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &.featured {
      transform: translateY(-5px) scale(1.05);
    }
  }
}

.plan-header {
  padding: 2rem;
  text-align: center;
  color: white;
  
  .plan-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .plan-price {
    margin-bottom: 1rem;
    
    .price-value {
      font-size: 3rem;
      font-weight: 800;
      color: #fbbf24;
    }
    
    .price-period {
      font-size: 1rem;
      opacity: 0.8;
      margin-left: 0.25rem;
    }
  }
  
  .plan-description {
    opacity: 0.9;
    line-height: 1.6;
  }
}

.plan-features {
  padding: 0 2rem;
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      .check-icon {
        width: 1.25rem;
        height: 1.25rem;
        color: #22c55e;
        flex-shrink: 0;
      }
    }
  }
}

.plan-action {
  padding: 2rem;
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

// CTA Section
.cta-section {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  overflow: hidden;
}

.cta-background {
  position: absolute;
  inset: 0;
  
  .cta-pattern {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.cta-content {
  text-align: center;
  color: white;
  
  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .cta-description {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
}

// Button Styles
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  border: none;
  
  &.btn-primary {
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a67d8;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
  }
  
  &.btn-outline {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
  
  &.btn-white {
    background: white;
    color: #1e293b;
    
    &:hover {
      background: #f8fafc;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
    }
  }
  
  &.btn-outline-white {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }
  }
  
  .btn-icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .btn-icon {
    transform: translateX(2px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

// Container and other utilities
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

@keyframes float-elements {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
}

// Utility animations
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

.animate-float-up {
  animation: floatUp 0.8s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out;
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

@keyframes floatUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

// Responsive Design
@media (max-width: 1024px) {
  .hero-stats {
    gap: 2rem;
  }
  
  .pricing-card.featured {
    transform: none;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .categories-grid,
  .products-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    
    .btn {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
  }
  
  .product-actions {
    flex-direction: column;
    
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 6rem 0 4rem;
  }
  
  .categories-section,
  .featured-section,
  .features-section,
  .pricing-section {
    padding: 4rem 0;
  }
  
  .cta-section {
    padding: 4rem 0;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .section-title {
    font-size: 2rem !important;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .card-content,
  .product-info {
    padding: 1.5rem;
  }
  
  .plan-header,
  .plan-action {
    padding: 1.5rem;
  }
}
</style> 