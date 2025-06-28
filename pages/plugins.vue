<template>
  <div class="plugins-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          插件中心
        </h1>
        <p class="hero-description">
          功能插件扩展，增强网站能力，让您的网站更加强大
        </p>
      </div>
    </section>

    <!-- 分类筛选 -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-buttons">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="filter-btn"
            :class="{ active: selectedCategory === category.id }"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- 插件展示 -->
    <section class="plugins-section">
      <div class="container">
        <div class="plugins-grid">
          <div
            v-for="plugin in filteredPlugins"
            :key="plugin.id"
            class="plugin-card"
          >
            <div class="card-preview">
              <div class="preview-content">
                <div class="preview-icon">{{ plugin.icon }}</div>
                <p class="preview-category">{{ plugin.category }}</p>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ plugin.name }}</h3>
              <p class="card-description">{{ plugin.description }}</p>
              <div class="card-meta">
                <div class="meta-info">
                  <span class="rating">⭐ {{ plugin.rating }}</span>
                  <span class="installs">{{ plugin.installs }} 安装</span>
                </div>
                <span class="status-badge" :class="plugin.status">
                  {{ plugin.status === 'active' ? '活跃' : '稳定' }}
                </span>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary">
                  安装插件
                </button>
                <button class="btn btn-outline">
                  详情
                </button>
              </div>
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
  title: '插件中心 - 开源官网',
  description: '丰富的功能插件，包含SEO优化、数据分析、安全防护等各类插件，增强网站功能。',
  ogTitle: '插件中心 - 开源官网',
  ogDescription: '丰富的功能插件，包含SEO优化、数据分析、安全防护等各类插件',
})

// 响应式状态
const selectedCategory = ref('all')

// 分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'seo', name: 'SEO优化' },
  { id: 'analytics', name: '数据分析' },
  { id: 'security', name: '安全防护' },
  { id: 'performance', name: '性能优化' },
  { id: 'marketing', name: '营销工具' }
]

// 插件数据
const plugins = [
  {
    id: 1,
    name: 'SEO优化套件',
    description: '全面的SEO优化工具，包含关键词分析、meta标签优化、站点地图生成',
    category: 'SEO优化',
    categoryId: 'seo',
    rating: 4.9,
    installs: '12k',
    status: 'active',
    icon: '🔍'
  },
  {
    id: 2,
    name: '谷歌分析集成',
    description: '轻松集成Google Analytics，实时监控网站流量和用户行为',
    category: '数据分析',
    categoryId: 'analytics',
    rating: 4.8,
    installs: '8.5k',
    status: 'active',
    icon: '📊'
  },
  {
    id: 3,
    name: '安全防护盾',
    description: '多层安全防护，防止恶意攻击、SQL注入、XSS等安全威胁',
    category: '安全防护',
    categoryId: 'security',
    rating: 4.7,
    installs: '6.2k',
    status: 'stable',
    icon: '🛡️'
  },
  {
    id: 4,
    name: '缓存加速器',
    description: '智能缓存策略，大幅提升网站加载速度和用户体验',
    category: '性能优化',
    categoryId: 'performance',
    rating: 4.8,
    installs: '9.1k',
    status: 'active',
    icon: '⚡'
  },
  {
    id: 5,
    name: '邮件营销工具',
    description: '强大的邮件营销功能，支持邮件订阅、模板设计、数据统计',
    category: '营销工具',
    categoryId: 'marketing',
    rating: 4.6,
    installs: '4.3k',
    status: 'stable',
    icon: '📧'
  },
  {
    id: 6,
    name: '社交媒体分享',
    description: '一键分享到各大社交平台，增加网站曝光度和用户参与',
    category: '营销工具',
    categoryId: 'marketing',
    rating: 4.7,
    installs: '7.8k',
    status: 'active',
    icon: '📱'
  }
]

// 筛选后的插件
const filteredPlugins = computed(() => {
  if (selectedCategory.value === 'all') {
    return plugins
  }
  return plugins.filter(plugin => plugin.categoryId === selectedCategory.value)
})
</script>

<style scoped lang="scss">
.plugins-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
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
    color: #a7f3d0;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.filter-section {
  padding: 2rem 0;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  
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
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .filter-btn {
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    font-weight: 500;
    transition: all 0.15s ease-in-out;
    background-color: #f3f4f6;
    color: #374151;
    border: none;
    cursor: pointer;
    
    &:hover {
      background-color: #e5e7eb;
    }
    
    &.active {
      background-color: #059669;
      color: white;
    }
  }
}

.plugins-section {
  padding: 5rem 0;
  
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
  
  .plugins-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .plugin-card {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: box-shadow 0.15s ease-in-out;
    
    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  }
  
  .card-preview {
    height: 12rem;
    background: linear-gradient(135deg, #34d399 0%, #14b8a6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .preview-content {
      text-align: center;
      color: white;
    }
    
    .preview-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .preview-category {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
  }
  
  .card-description {
    color: #6b7280;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .meta-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .rating, .installs {
      font-size: 0.875rem;
      color: #6b7280;
    }
  }
  
  .status-badge {
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    
    &.active {
      background-color: #d1fae5;
      color: #065f46;
    }
    
    &.stable {
      background-color: #f3f4f6;
      color: #374151;
    }
  }
  
  .card-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    border: none;
    text-decoration: none;
    
    &.btn-primary {
      flex: 1;
      background-color: #059669;
      color: white;
      
      &:hover {
        background-color: #047857;
      }
    }
    
    &.btn-outline {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      color: #374151;
      background-color: transparent;
      
      &:hover {
        background-color: #f9fafb;
      }
    }
  }
}
</style> 