<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="news-hero">
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <svg class="badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
            </svg>
            <span>最新资讯</span>
          </div>
          <h1 class="hero-title">新闻动态中心</h1>
          <p class="hero-description">
            掌握行业前沿动态，洞察技术发展趋势，分享产品创新成果
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ totalArticles }}</span>
              <span class="stat-label">篇文章</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ categories.length - 1 }}</span>
              <span class="stat-label">个分类</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ monthlyViews }}</span>
              <span class="stat-label">月阅读量</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section v-if="featuredArticle" class="featured-section">
      <div class="container">
        <div class="featured-article">
          <div class="featured-image">
            <div class="image-placeholder featured">
              <div class="featured-icon">⭐</div>
            </div>
            <div class="featured-badge">精选文章</div>
          </div>
          <div class="featured-content">
            <div class="featured-meta">
              <span class="featured-category">{{ featuredArticle.category }}</span>
              <span class="featured-date">{{ formatDate(featuredArticle.date) }}</span>
            </div>
            <h2 class="featured-title">
              <NuxtLink :to="`/news/${featuredArticle.id}`">
                {{ featuredArticle.title }}
              </NuxtLink>
            </h2>
            <p class="featured-excerpt">{{ featuredArticle.excerpt }}</p>
            <div class="featured-footer">
              <div class="author-section">
                <div class="author-avatar featured">{{ featuredArticle.author.charAt(0) }}</div>
                <div class="author-details">
                  <span class="author-name">{{ featuredArticle.author }}</span>
                  <span class="author-role">{{ featuredArticle.authorRole }}</span>
                </div>
              </div>
              <NuxtLink :to="`/news/${featuredArticle.id}`" class="featured-link">
                立即阅读
                <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="filters-section">
      <div class="container">
        <div class="content-header">
          <div class="filters-wrapper">
            <h3 class="section-subtitle">浏览分类</h3>
            <div class="filter-buttons">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="selectedCategory = category.id"
                :class="['filter-btn', { active: selectedCategory === category.id }]"
              >
                <span class="filter-icon">{{ category.icon }}</span>
                <span class="filter-text">{{ category.name }}</span>
                <span class="filter-count">{{ category.count }}</span>
              </button>
            </div>
          </div>
          
          <div class="search-wrapper">
            <h3 class="section-subtitle">搜索文章</h3>
            <div class="search-box">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="输入关键词搜索..."
                class="search-input"
              />
              <button v-if="searchQuery" @click="clearSearch" class="clear-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Results Info -->
        <div class="results-info">
          <p class="results-text">
            <span v-if="searchQuery">搜索 "{{ searchQuery }}" 找到</span>
            <span v-else-if="selectedCategory !== 'all'">{{ getCurrentCategoryName() }} 分类下</span>
            <span v-else>全部</span>
            <strong>{{ filteredArticles.length }}</strong> 篇文章
          </p>
          <div class="sort-options">
            <label class="sort-label">排序方式：</label>
            <select v-model="sortBy" class="sort-select">
              <option value="date">最新发布</option>
              <option value="popular">最受欢迎</option>
              <option value="title">标题排序</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="articles-section">
      <div class="container">
        <div class="articles-grid">
          <article
            v-for="(article, index) in paginatedArticles"
            :key="article.id"
            class="article-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="article-image">
              <div class="image-placeholder">
                <div class="article-icon">{{ article.icon }}</div>
              </div>
              <div class="article-category-badge">{{ article.category }}</div>
              <div class="article-trending" v-if="article.trending">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                </svg>
              </div>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <time class="article-date">{{ formatDate(article.date) }}</time>
                <div class="meta-divider">•</div>
                <span class="reading-time">{{ article.readTime }} 分钟阅读</span>
                <div class="meta-divider">•</div>
                <span class="view-count">{{ article.views }} 次阅读</span>
              </div>
              <h3 class="article-title">
                <NuxtLink :to="`/news/${article.id}`">
                  {{ article.title }}
                </NuxtLink>
              </h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <div class="article-tags" v-if="article.tags">
                <span
                  v-for="tag in article.tags.slice(0, 3)"
                  :key="tag"
                  class="article-tag"
                >
                  #{{ tag }}
                </span>
              </div>
              <div class="article-footer">
                <div class="author-info">
                  <div class="author-avatar">{{ article.author.charAt(0) }}</div>
                  <div class="author-details">
                    <span class="author-name">{{ article.author }}</span>
                    <span class="author-role">{{ article.authorRole }}</span>
                  </div>
                </div>
                <NuxtLink :to="`/news/${article.id}`" class="read-more-link">
                  阅读全文
                  <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="load-more-section" v-if="hasMoreArticles">
          <button @click="loadMore" class="load-more-btn" :disabled="loading">
            <span v-if="!loading">加载更多文章</span>
            <span v-else>加载中...</span>
            <svg v-if="!loading" class="load-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-icon">📧</div>
          <h3 class="newsletter-title">订阅我们的新闻通讯</h3>
          <p class="newsletter-description">第一时间获取最新资讯和深度分析</p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input
              v-model="email"
              type="email"
              placeholder="输入您的邮箱地址"
              class="newsletter-input"
              required
            />
            <button type="submit" class="newsletter-btn" :disabled="subscribing">
              {{ subscribing ? '订阅中...' : '立即订阅' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: '新闻动态中心 - 开源官网',
  description: '掌握行业前沿动态，洞察技术发展趋势，分享产品创新成果。获取最新的产品更新、技术文章和行业洞察。',
  ogTitle: '新闻动态中心 - 开源官网',
  ogDescription: '掌握行业前沿动态，洞察技术发展趋势，分享产品创新成果',
})

// 响应式状态
const selectedCategory = ref('all')
const searchQuery = ref('')
const sortBy = ref('date')
const currentPage = ref(1)
const pageSize = ref(6)
const loading = ref(false)
const email = ref('')
const subscribing = ref(false)

// 统计数据
const totalArticles = ref(24)
const monthlyViews = ref('2.5万')

// 分类数据
const categories = [
  { id: 'all', name: '全部', icon: '📰', count: 24 },
  { id: 'product', name: '产品更新', icon: '🚀', count: 6 },
  { id: 'tutorial', name: '教程指南', icon: '📚', count: 8 },
  { id: 'insight', name: '行业洞察', icon: '📈', count: 5 },
  { id: 'tech', name: '技术分享', icon: '⚡', count: 5 }
]

// 扩展的文章数据
const articles = [
  {
    id: 1,
    title: '开源官网 v2.0 正式发布 - 全新体验升级',
    excerpt: '全新版本带来更多功能和更好的用户体验，包括全新的组件库、优化的性能表现和现代化的设计语言。',
    category: '产品更新',
    categoryId: 'product',
    date: '2024-12-27',
    author: '产品团队',
    authorRole: '产品经理',
    readTime: 5,
    views: 1250,
    icon: '🚀',
    trending: true,
    tags: ['产品发布', '新功能', 'UI升级'],
    featured: true
  },
  {
    id: 2,
    title: '如何快速搭建现代化企业官网 - 完整指南',
    excerpt: '本文将详细介绍如何使用我们的模板快速搭建一个现代化的企业官网，包括设计要点、技术实现和最佳实践。',
    category: '教程指南',
    categoryId: 'tutorial',
    date: '2024-12-25',
    author: '开发团队',
    authorRole: '前端架构师',
    readTime: 8,
    views: 980,
    icon: '📚',
    tags: ['企业官网', '快速开发', '最佳实践']
  },
  {
    id: 3,
    title: '2024年企业数字化转型趋势深度分析',
    excerpt: '随着数字化浪潮的到来，企业如何适应变化，利用技术优势提升竞争力成为关键。本文深入分析当前趋势。',
    category: '行业洞察',
    categoryId: 'insight',
    date: '2024-12-20',
    author: '行业分析师',
    authorRole: '资深分析师',
    readTime: 6,
    views: 1560,
    icon: '📈',
    trending: true,
    tags: ['数字化转型', '行业趋势', '企业战略']
  },
  {
    id: 4,
    title: 'Vue 3 组件开发最佳实践与性能优化',
    excerpt: '深入探讨 Vue 3 组件开发的最佳实践，包括 Composition API 的使用技巧、性能优化方法和代码组织策略。',
    category: '技术分享',
    categoryId: 'tech',
    date: '2024-12-18',
    author: '技术专家',
    authorRole: '高级前端工程师',
    readTime: 12,
    views: 2100,
    icon: '⚡',
    tags: ['Vue3', 'Composition API', '性能优化']
  },
  {
    id: 5,
    title: 'TypeScript 在前端项目中的深度应用',
    excerpt: 'TypeScript 为前端开发带来了类型安全和更好的开发体验，本文分享在大型项目中的实际应用经验和踩坑总结。',
    category: '技术分享',
    categoryId: 'tech',
    date: '2024-12-15',
    author: '前端工程师',
    authorRole: '技术专家',
    readTime: 10,
    views: 1800,
    icon: '🛠️',
    tags: ['TypeScript', '类型安全', '开发体验']
  },
  {
    id: 6,
    title: '网站性能优化完全指南 - 从0到100',
    excerpt: '从加载速度到用户体验，全面解析网站性能优化的策略和技术手段，包括代码分割、缓存策略和监控方法。',
    category: '教程指南',
    categoryId: 'tutorial',
    date: '2024-12-12',
    author: '性能专家',
    authorRole: '性能优化专家',
    readTime: 15,
    views: 2350,
    icon: '⚡',
    trending: true,
    tags: ['性能优化', 'Web性能', '用户体验']
  },
  {
    id: 7,
    title: '微前端架构设计与实践经验分享',
    excerpt: '分享微前端架构在大型企业级应用中的设计思路、技术选型和实施过程中遇到的挑战与解决方案。',
    category: '技术分享',
    categoryId: 'tech',
    date: '2024-12-10',
    author: '架构师',
    authorRole: '技术架构师',
    readTime: 18,
    views: 1650,
    icon: '🏗️',
    tags: ['微前端', '架构设计', '企业应用']
  },
  {
    id: 8,
    title: 'AI时代下的前端开发新趋势',
    excerpt: '探讨人工智能技术如何影响前端开发，从代码生成到智能化UI设计，展望未来前端开发的新方向。',
    category: '行业洞察',
    categoryId: 'insight',
    date: '2024-12-08',
    author: '技术顾问',
    authorRole: 'AI技术专家',
    readTime: 12,
    views: 2800,
    icon: '🤖',
    trending: true,
    tags: ['人工智能', '前端趋势', '技术展望']
  }
]

// 精选文章
const featuredArticle = computed(() => {
  return articles.find(article => article.featured)
})

// 筛选和搜索后的文章
const filteredArticles = computed(() => {
  let filtered = articles

  // 分类筛选
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => article.categoryId === selectedCategory.value)
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // 排序
  if (sortBy.value === 'date') {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (sortBy.value === 'popular') {
    filtered.sort((a, b) => b.views - a.views)
  } else if (sortBy.value === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  }

  return filtered
})

// 分页后的文章
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredArticles.value.slice(0, end)
})

// 是否有更多文章
const hasMoreArticles = computed(() => {
  return paginatedArticles.value.length < filteredArticles.value.length
})

// 获取当前分类名称
const getCurrentCategoryName = () => {
  const category = categories.find(cat => cat.id === selectedCategory.value)
  return category?.name || '全部'
}

// 清除搜索
const clearSearch = () => {
  searchQuery.value = ''
}

// 加载更多
const loadMore = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  currentPage.value++
  loading.value = false
}

// 订阅新闻通讯
const subscribeNewsletter = async () => {
  subscribing.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert('订阅成功！感谢您的关注。')
  email.value = ''
  subscribing.value = false
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

// 监听搜索和分类变化，重置分页
watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})
</script>

<style scoped lang="scss">
.news-page {
  min-height: 100vh;
  background: #fafbfc;
}

/* Hero Section */
.news-hero {
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
  animation: fadeInUp 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  color: white;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  .badge-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 48rem;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  color: white;
  
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    opacity: 0.8;
  }
}

/* Featured Section */
.featured-section {
  padding: 4rem 0;
  background: white;
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.featured-image {
  position: relative;
  
  .image-placeholder.featured {
    height: 20rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .featured-icon {
      font-size: 4rem;
    }
  }
  
  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    color: #f59e0b;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 0.875rem;
    backdrop-filter: blur(10px);
  }
}

.featured-content {
  .featured-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .featured-category {
      background: #667eea;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 600;
    }
    
    .featured-date {
      color: #64748b;
      font-size: 0.875rem;
    }
  }
  
  .featured-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    line-height: 1.3;
    
    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #667eea;
      }
    }
  }
  
  .featured-excerpt {
    color: #475569;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.author-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .author-avatar.featured {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.125rem;
  }
  
  .author-details {
    display: flex;
    flex-direction: column;
    
    .author-name {
      font-weight: 600;
      color: #1e293b;
    }
    
    .author-role {
      font-size: 0.875rem;
      color: #64748b;
    }
  }
}

.featured-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  .link-icon {
    width: 1rem;
    height: 1rem;
  }
}

/* Filters Section */
.filters-section {
  padding: 3rem 0;
  background: white;
  border-bottom: 1px solid #e2e8f0;
}

.content-header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.section-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  color: #475569;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
    transform: translateY(-1px);
  }
  
  &.active {
    background: #667eea;
    border-color: #667eea;
    color: white;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
  
  .filter-icon {
    font-size: 1rem;
  }
  
  .filter-count {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  &:not(.active) .filter-count {
    background: #cbd5e1;
    color: #475569;
  }
}

.search-box {
  position: relative;
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    font-size: 1rem;
    background: #f8fafc;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }
  
  .clear-btn {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    background: #e2e8f0;
    border: none;
    border-radius: 50%;
    color: #64748b;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #cbd5e1;
      color: #475569;
    }
    
    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
}

.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid #f1f5f9;
  
  .results-text {
    color: #64748b;
    
    strong {
      color: #1e293b;
      font-weight: 600;
    }
  }
  
  .sort-options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .sort-label {
      color: #64748b;
      font-size: 0.875rem;
    }
    
    .sort-select {
      padding: 0.5rem 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      background: white;
      color: #1e293b;
      font-size: 0.875rem;
      cursor: pointer;
      
      &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
    }
  }
}

/* Articles Section */
.articles-section {
  padding: 4rem 0;
  background: #fafbfc;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.6s ease-out both;
  border: 1px solid #f1f5f9;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: #e2e8f0;
  }
}

.article-image {
  position: relative;
  height: 12rem;
  overflow: hidden;
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
      transform: translateX(-100%);
      animation: shimmer 3s infinite;
    }
  }
  
  .article-icon {
    font-size: 3rem;
    z-index: 2;
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .article-category-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.9);
    color: #667eea;
    padding: 0.375rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    z-index: 3;
  }
  
  .article-trending {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    background: #ef4444;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    
    svg {
      width: 1rem;
      height: 1rem;
      color: white;
    }
  }
}

.article-card:hover .article-icon {
  transform: scale(1.1) rotate(5deg);
}

.article-content {
  padding: 1.5rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
  
  .meta-divider {
    opacity: 0.5;
  }
}

.article-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.4;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #667eea;
    }
  }
}

.article-excerpt {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.article-tag {
  background: #f1f5f9;
  color: #667eea;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
}

.author-details {
  display: flex;
  flex-direction: column;
  
  .author-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.875rem;
  }
  
  .author-role {
    font-size: 0.75rem;
    color: #64748b;
  }
}

.read-more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #5a67d8;
    
    .read-more-icon {
      transform: translateX(2px);
    }
  }
  
  .read-more-icon {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
}

/* Load More */
.load-more-section {
  text-align: center;
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #5a67d8;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .load-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

/* Newsletter */
.newsletter-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.newsletter-content {
  text-align: center;
  color: white;
  max-width: 32rem;
  margin: 0 auto;
}

.newsletter-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.newsletter-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter-description {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 24rem;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.15);
  }
}

.newsletter-btn {
  padding: 0.875rem 1.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background: #f8fafc;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .featured-article {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-header {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-buttons {
    justify-content: center;
  }
  
  .results-info {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
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
</style> 