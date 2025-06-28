<template>
  <div class="templates-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          模板库
        </h1>
        <p class="hero-description">
          丰富的网站模板，覆盖各行各业，助您快速启动项目
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

    <!-- 模板展示 -->
    <section class="templates-section">
      <div class="container">
        <div class="templates-grid">
          <div
            v-for="template in filteredTemplates"
            :key="template.id"
            class="template-card"
          >
            <div class="card-preview">
              <div class="preview-content">
                <div class="preview-icon">{{ template.icon }}</div>
                <p class="preview-category">{{ template.category }}</p>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ template.name }}</h3>
              <p class="card-description">{{ template.description }}</p>
              <div class="card-meta">
                <span class="price">{{ template.price }}</span>
                <div class="meta-info">
                  <span class="rating">⭐ {{ template.rating }}</span>
                  <span class="downloads">{{ template.downloads }} 下载</span>
                </div>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary">
                  立即使用
                </button>
                <button class="btn btn-outline">
                  预览
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
  title: '模板库 - 开源官网',
  description: '丰富的网站模板库，覆盖企业官网、电商、博客等各种场景，快速启动您的项目。',
  ogTitle: '模板库 - 开源官网',
  ogDescription: '丰富的网站模板库，覆盖企业官网、电商、博客等各种场景',
})

// 响应式状态
const selectedCategory = ref('all')

// 分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'business', name: '企业官网' },
  { id: 'ecommerce', name: '电商' },
  { id: 'blog', name: '博客' },
  { id: 'portfolio', name: '作品集' },
  { id: 'landing', name: '落地页' }
]

// 模板数据
const templates = [
  {
    id: 1,
    name: '现代企业官网',
    description: '适合现代企业的官网模板，包含完整的页面结构和功能模块',
    category: '企业官网',
    categoryId: 'business',
    price: '免费',
    rating: 4.8,
    downloads: '2.3k',
    icon: '🏢'
  },
  {
    id: 2,
    name: '电商购物平台',
    description: '功能完善的电商模板，支持商品展示、购物车、订单管理',
    category: '电商',
    categoryId: 'ecommerce',
    price: '免费',
    rating: 4.7,
    downloads: '1.8k',
    icon: '🛒'
  },
  {
    id: 3,
    name: '个人博客模板',
    description: '简洁优雅的博客模板，支持文章分类、标签、评论功能',
    category: '博客',
    categoryId: 'blog',
    price: '免费',
    rating: 4.9,
    downloads: '3.1k',
    icon: '📝'
  },
  {
    id: 4,
    name: '创意作品集',
    description: '展示个人或团队作品的创意模板，适合设计师和开发者',
    category: '作品集',
    categoryId: 'portfolio',
    price: '免费',
    rating: 4.6,
    downloads: '1.5k',
    icon: '🎨'
  },
  {
    id: 5,
    name: '产品落地页',
    description: '高转化率的产品落地页模板，适合产品推广和营销',
    category: '落地页',
    categoryId: 'landing',
    price: '免费',
    rating: 4.8,
    downloads: '2.7k',
    icon: '🚀'
  },
  {
    id: 6,
    name: '科技公司官网',
    description: '专为科技公司设计的现代化官网模板，突出技术实力',
    category: '企业官网',
    categoryId: 'business',
    price: '免费',
    rating: 4.7,
    downloads: '1.9k',
    icon: '💻'
  }
]

// 筛选后的模板
const filteredTemplates = computed(() => {
  if (selectedCategory.value === 'all') {
    return templates
  }
  return templates.filter(template => template.categoryId === selectedCategory.value)
})
</script>

<style scoped lang="scss">
.templates-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
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
    color: #c4b5fd;
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
      background-color: #7c3aed;
      color: white;
    }
  }
}

.templates-section {
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
  
  .templates-grid {
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
  
  .template-card {
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
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
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
  
  .price {
    font-size: 1.125rem;
    font-weight: 700;
    color: #7c3aed;
  }
  
  .meta-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .rating, .downloads {
      font-size: 0.875rem;
      color: #6b7280;
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
      background-color: #7c3aed;
      color: white;
      
      &:hover {
        background-color: #6d28d9;
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