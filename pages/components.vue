<template>
  <div class="components-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          组件库
        </h1>
        <p class="hero-description">
          可复用的UI组件，提升开发效率，构建一致的用户体验
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

    <!-- 组件展示 -->
    <section class="components-section">
      <div class="container">
        <div class="components-grid">
          <div
            v-for="component in filteredComponents"
            :key="component.id"
            class="component-card"
          >
            <div class="card-preview">
              <div class="preview-content">
                <div class="preview-icon">{{ component.icon }}</div>
                <p class="preview-category">{{ component.category }}</p>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ component.name }}</h3>
              <p class="card-description">{{ component.description }}</p>
              <div class="card-meta">
                <div class="tech-tags">
                  <span
                    v-for="tech in component.technologies"
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
                <span class="usage-count">{{ component.usage }} 使用</span>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary">
                  查看文档
                </button>
                <button class="btn btn-outline">
                  示例
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
  title: '组件库 - 开源官网',
  description: '丰富的UI组件库，包含按钮、表单、导航、数据展示等各类组件，提升开发效率。',
  ogTitle: '组件库 - 开源官网',
  ogDescription: '丰富的UI组件库，包含按钮、表单、导航、数据展示等各类组件',
})

// 响应式状态
const selectedCategory = ref('all')

// 分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'basic', name: '基础组件' },
  { id: 'form', name: '表单组件' },
  { id: 'navigation', name: '导航组件' },
  { id: 'data', name: '数据展示' },
  { id: 'feedback', name: '反馈组件' }
]

// 组件数据
const components = [
  {
    id: 1,
    name: 'Button 按钮',
    description: '支持多种样式和状态的按钮组件，包含主要、次要、危险等类型',
    category: '基础组件',
    categoryId: 'basic',
    usage: '5.2k',
    technologies: ['Vue 3', 'TypeScript'],
    icon: '🔘'
  },
  {
    id: 2,
    name: 'Form 表单',
    description: '功能完善的表单组件，支持验证、自动布局、多种输入类型',
    category: '表单组件',
    categoryId: 'form',
    usage: '4.1k',
    technologies: ['Vue 3', 'Validation'],
    icon: '📝'
  },
  {
    id: 3,
    name: 'Navigation 导航',
    description: '响应式导航组件，支持多级菜单、面包屑、侧边栏等形式',
    category: '导航组件',
    categoryId: 'navigation',
    usage: '3.8k',
    technologies: ['Vue 3', 'Router'],
    icon: '🧭'
  },
  {
    id: 4,
    name: 'Table 表格',
    description: '强大的数据表格组件，支持排序、筛选、分页、导出功能',
    category: '数据展示',
    categoryId: 'data',
    usage: '6.3k',
    technologies: ['Vue 3', 'Pinia'],
    icon: '📊'
  },
  {
    id: 5,
    name: 'Modal 对话框',
    description: '灵活的对话框组件，支持多种尺寸、位置和交互方式',
    category: '反馈组件',
    categoryId: 'feedback',
    usage: '4.7k',
    technologies: ['Vue 3', 'Portal'],
    icon: '💬'
  },
  {
    id: 6,
    name: 'Card 卡片',
    description: '通用的卡片容器组件，适用于展示各种内容和信息',
    category: '基础组件',
    categoryId: 'basic',
    usage: '7.1k',
    technologies: ['Vue 3', 'CSS'],
    icon: '🃏'
  }
]

// 筛选后的组件
const filteredComponents = computed(() => {
  if (selectedCategory.value === 'all') {
    return components
  }
  return components.filter(component => component.categoryId === selectedCategory.value)
})
</script>

<style scoped lang="scss">
.components-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
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
    color: #c7d2fe;
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
      background-color: #4f46e5;
      color: white;
    }
  }
}

.components-section {
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
  
  .components-grid {
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
  
  .component-card {
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
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
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
  
  .tech-tags {
    display: flex;
    gap: 0.5rem;
  }
  
  .tech-tag {
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    background-color: #e0e7ff;
    color: #3730a3;
    border-radius: 0.25rem;
  }
  
  .usage-count {
    font-size: 0.875rem;
    color: #6b7280;
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
      background-color: #4f46e5;
      color: white;
      
      &:hover {
        background-color: #4338ca;
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