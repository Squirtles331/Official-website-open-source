<template>
  <div class="article-page">
    <!-- Article Hero -->
    <section class="article-hero" v-if="article">
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <nav class="breadcrumb">
            <NuxtLink to="/" class="breadcrumb-link">首页</NuxtLink>
            <span class="breadcrumb-separator">›</span>
            <NuxtLink to="/news" class="breadcrumb-link">新闻动态</NuxtLink>
            <span class="breadcrumb-separator">›</span>
            <span class="breadcrumb-current">{{ article.category }}</span>
          </nav>
          
          <div class="article-meta-header">
            <div class="meta-badges">
              <span class="category-badge">{{ article.category }}</span>
              <span class="trending-badge" v-if="article.trending">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                </svg>
                热门
              </span>
            </div>
            <time class="publish-date">{{ formatDate(article.date) }}</time>
          </div>
          
          <h1 class="article-title">{{ article.title }}</h1>
          <p class="article-subtitle">{{ article.excerpt }}</p>
          
          <div class="article-stats">
            <div class="stat-item">
              <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{{ article.readTime }} 分钟阅读</span>
            </div>
            <div class="stat-item">
              <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>{{ article.views }} 次阅读</span>
            </div>
            <div class="stat-item">
              <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span>{{ article.likes }} 个赞</span>
            </div>
          </div>
          
          <div class="author-section">
            <div class="author-avatar">{{ article.author.charAt(0) }}</div>
            <div class="author-info">
              <div class="author-name">{{ article.author }}</div>
              <div class="author-role">{{ article.authorRole }}</div>
            </div>
            <div class="social-share">
              <button class="share-btn" @click="shareArticle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                </svg>
                分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="article-content-section" v-if="article">
      <div class="container">
        <div class="content-layout">
          <!-- Main Content -->
          <article class="main-content">
            <!-- Table of Contents -->
            <div class="toc-section">
              <h3 class="toc-title">目录</h3>
              <nav class="toc-nav">
                <a 
                  v-for="(heading, index) in tableOfContents" 
                  :key="index"
                  :href="`#heading-${index}`"
                  class="toc-link"
                  @click="scrollToHeading($event, `heading-${index}`)"
                >
                  {{ heading.text }}
                </a>
              </nav>
            </div>

            <!-- Article Body -->
            <div class="article-body">
              <div 
                v-for="(section, index) in article.content" 
                :key="index" 
                class="content-section"
              >
                <h2 
                  v-if="section.type === 'heading'" 
                  :id="`heading-${getHeadingIndex(section.text || '')}`"
                  class="content-heading"
                >
                  {{ section.text }}
                </h2>
                <p v-else-if="section.type === 'paragraph'" class="content-paragraph">
                  {{ section.text }}
                </p>
                <ul v-else-if="section.type === 'list'" class="content-list">
                  <li v-for="(item, i) in section.items" :key="i" class="list-item">
                    {{ item }}
                  </li>
                </ul>
                <div v-else-if="section.type === 'code'" class="code-block">
                  <div class="code-header">
                    <span class="code-language">{{ section.language || 'Code' }}</span>
                    <button class="copy-btn" @click="copyCode(section.text || '')">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                      </svg>
                      复制
                    </button>
                  </div>
                  <pre><code v-html="section.text"></code></pre>
                </div>
                <blockquote v-else-if="section.type === 'quote'" class="quote-block">
                  <p>{{ section.text }}</p>
                  <cite v-if="section.type === 'quote' && section.author">— {{ section.author }}</cite>
                </blockquote>
              </div>
            </div>

            <!-- Article Tags -->
            <div class="tags-section">
              <h3 class="tags-title">相关标签</h3>
              <div class="tags-container">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="tag"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Article Actions -->
            <div class="article-actions">
              <button 
                class="action-btn like-btn"
                :class="{ liked: isLiked }"
                @click="toggleLike"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                {{ isLiked ? '已赞' : '点赞' }} ({{ article.likes }})
              </button>
              <button class="action-btn bookmark-btn" @click="toggleBookmark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                收藏
              </button>
              <button class="action-btn share-btn" @click="shareArticle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                </svg>
                分享
              </button>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="sidebar">
            <!-- Author Card -->
            <div class="author-card">
              <div class="author-avatar-large">{{ article.author.charAt(0) }}</div>
              <h4 class="author-name-large">{{ article.author }}</h4>
              <p class="author-bio">{{ article.authorBio || '专注于技术分享和产品创新，致力于为用户提供优质内容。' }}</p>
              <div class="author-stats">
                <div class="stat">
                  <span class="stat-number">{{ article.authorStats?.articles || 12 }}</span>
                  <span class="stat-label">篇文章</span>
                </div>
                <div class="stat">
                  <span class="stat-number">{{ article.authorStats?.followers || '2.5k' }}</span>
                  <span class="stat-label">关注者</span>
                </div>
              </div>
            </div>

            <!-- Related Articles -->
            <div class="related-articles">
              <h3 class="sidebar-title">相关文章</h3>
              <div class="related-list">
                <article
                  v-for="relatedArticle in relatedArticles"
                  :key="relatedArticle.id"
                  class="related-item"
                >
                  <div class="related-image">
                    <div class="related-icon">{{ relatedArticle.icon }}</div>
                  </div>
                  <div class="related-content">
                    <h4 class="related-title">
                      <NuxtLink :to="`/news/${relatedArticle.id}`">
                        {{ relatedArticle.title }}
                      </NuxtLink>
                    </h4>
                    <p class="related-meta">{{ formatDate(relatedArticle.date) }}</p>
                  </div>
                </article>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="newsletter-card">
              <div class="newsletter-icon">📧</div>
              <h3 class="newsletter-title">订阅更新</h3>
              <p class="newsletter-description">获取最新文章和资讯推送</p>
              <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
                <input
                  v-model="email"
                  type="email"
                  placeholder="输入邮箱地址"
                  class="newsletter-input"
                  required
                />
                <button type="submit" class="newsletter-btn" :disabled="subscribing">
                  {{ subscribing ? '订阅中...' : '订阅' }}
                </button>
              </form>
            </div>
          </aside>
        </div>

        <!-- Navigation -->
        <div class="article-navigation">
          <NuxtLink to="/news" class="nav-btn back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            返回新闻列表
          </NuxtLink>
          
          <div class="nav-articles">
            <NuxtLink 
              v-if="previousArticle" 
              :to="`/news/${previousArticle.id}`" 
              class="nav-btn prev-btn"
            >
              <span class="nav-label">上一篇</span>
              <span class="nav-title">{{ previousArticle.title }}</span>
            </NuxtLink>
            
            <NuxtLink 
              v-if="nextArticle" 
              :to="`/news/${nextArticle.id}`" 
              class="nav-btn next-btn"
            >
              <span class="nav-label">下一篇</span>
              <span class="nav-title">{{ nextArticle.title }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Not Found -->
    <section v-else class="not-found-section">
      <div class="container">
        <div class="not-found-content">
          <div class="not-found-icon">📄</div>
          <h2 class="not-found-title">文章未找到</h2>
          <p class="not-found-description">抱歉，您访问的文章不存在或已被删除。</p>
          <NuxtLink to="/news" class="back-button">
            返回新闻列表
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 类型定义
interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'code' | 'quote'
  text?: string
  items?: string[]
  language?: string
  author?: string
}

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  authorRole: string
  authorBio?: string
  authorStats?: { articles: number; followers: string }
  readTime: number
  views: number
  likes: number
  trending?: boolean
  slug: string
  tags: string[]
  content: ContentSection[]
}

// 获取路由参数
const route = useRoute()
const id = Number(route.params.id)

// 响应式状态
const isLiked = ref(false)
const email = ref('')
const subscribing = ref(false)

// 扩展的文章数据
const articles: Article[] = [
  {
    id: 1,
    title: '开源官网 v2.0 正式发布 - 全新体验升级',
    excerpt: '全新版本带来更多功能和更好的用户体验，包括全新的组件库、优化的性能表现和现代化的设计语言。',
    category: '产品更新',
    date: '2024-12-27',
    author: '产品团队',
    authorRole: '产品经理',
    authorBio: '专注于产品创新和用户体验优化，致力于打造优秀的开源产品。',
    authorStats: { articles: 15, followers: '3.2k' },
    readTime: 5,
    views: 1250,
    likes: 89,
    trending: true,
    slug: 'v2-release',
    tags: ['产品发布', 'v2.0', '新功能', '性能优化'],
    content: [
      {
        type: 'heading',
        text: '重大更新亮点'
      },
      {
        type: 'paragraph',
        text: '经过数月的精心开发，我们很高兴地宣布开源官网 v2.0 正式发布。这个版本包含了许多激动人心的新功能和改进，旨在为用户提供更好的体验。'
      },
      {
        type: 'list',
        items: [
          '全新的用户界面设计，更加现代化和易用',
          '性能优化，页面加载速度提升50%',
          '新增组件库，包含20+常用UI组件',
          '增强的SEO功能，提升搜索引擎排名',
          '移动端适配优化，完美支持各种设备'
        ]
      },
      {
        type: 'heading',
        text: '技术架构升级'
      },
      {
        type: 'paragraph',
        text: 'v2.0版本采用了最新的技术栈，包括Vue 3、Nuxt 3和TypeScript，确保了代码的可维护性和扩展性。'
      },
      {
        type: 'code',
        language: 'bash',
        text: 'npm install @our-org/ui-components@2.0.0\n# 或者使用 yarn\nyarn add @our-org/ui-components@2.0.0'
      },
      {
        type: 'quote',
        text: '这次更新真正体现了我们对用户体验的重视，每一个细节都经过精心打磨。',
        author: '首席设计师'
      }
    ]
  },
  {
    id: 2,
    title: '如何快速搭建现代化企业官网 - 完整指南',
    excerpt: '本文将详细介绍如何使用我们的模板快速搭建一个现代化的企业官网，包括设计要点、技术实现和最佳实践。',
    category: '教程指南',
    date: '2024-12-25',
    author: '开发团队',
    authorRole: '前端架构师',
    authorBio: '拥有10年前端开发经验，专注于现代化Web技术和最佳实践。',
    authorStats: { articles: 28, followers: '5.1k' },
    readTime: 8,
    views: 980,
    likes: 67,
    slug: 'quick-setup-guide',
    tags: ['教程', '企业官网', '快速搭建', '最佳实践'],
    content: [
      {
        type: 'heading',
        text: '准备工作'
      },
      {
        type: 'paragraph',
        text: '在开始搭建企业官网之前，我们需要做一些准备工作。首先确定网站的目标和定位，然后选择合适的模板和技术栈。'
      },
      {
        type: 'list',
        items: [
          '明确网站目标和受众群体',
          '选择合适的域名和主机服务',
          '准备企业相关的内容和素材',
          '确定网站的功能需求'
        ]
      },
      {
        type: 'heading',
        text: '模板选择指南'
      },
      {
        type: 'paragraph',
        text: '选择合适的模板是成功的关键。我们提供了多种企业官网模板，每个模板都有其特定的适用场景。'
      },
      {
        type: 'code',
        language: 'javascript',
        text: '// 初始化项目\nnpx create-nuxt-app my-company-website\n\n// 安装依赖\ncd my-company-website\nnpm install'
      }
    ]
  },
  {
    id: 3,
    title: '2024年企业数字化转型趋势深度分析',
    excerpt: '随着数字化浪潮的到来，企业如何适应变化，利用技术优势提升竞争力成为关键。本文深入分析当前趋势。',
    category: '行业洞察',
    date: '2024-12-20',
    author: '行业分析师',
    authorRole: '资深分析师',
    authorBio: '专注于企业数字化转型研究，为众多企业提供战略咨询服务。',
    authorStats: { articles: 22, followers: '4.8k' },
    readTime: 6,
    views: 1560,
    likes: 134,
    trending: true,
    slug: 'digital-transformation',
    tags: ['数字化转型', '企业发展', '技术趋势', '商业洞察'],
    content: [
      {
        type: 'heading',
        text: '数字化转型的必要性'
      },
      {
        type: 'paragraph',
        text: '在当今快速变化的商业环境中，数字化转型已经不再是选择题，而是企业生存和发展的必要条件。'
      },
      {
        type: 'list',
        items: [
          '提升运营效率和降低成本',
          '改善客户体验和服务质量',
          '增强数据驱动的决策能力',
          '提高市场响应速度和竞争力'
        ]
      },
      {
        type: 'heading',
        text: '实施策略建议'
      },
      {
        type: 'paragraph',
        text: '成功的数字化转型需要明确的战略规划和分步实施。企业应该从自身实际情况出发，制定适合的转型路径。'
      },
      {
        type: 'quote',
        text: '数字化转型不仅仅是技术的升级，更是思维模式和组织文化的变革。',
        author: '麦肯锡咨询'
      }
    ]
  },
  {
    id: 4,
    title: 'Vue 3 组件开发最佳实践与性能优化',
    excerpt: '深入探讨 Vue 3 组件开发的最佳实践，包括 Composition API 的使用技巧、性能优化方法和代码组织策略。',
    category: '技术分享',
    date: '2024-12-18',
    author: '技术专家',
    authorRole: '高级前端工程师',
    authorBio: 'Vue.js 核心贡献者，专注于前端架构设计和性能优化。',
    authorStats: { articles: 35, followers: '8.2k' },
    readTime: 12,
    views: 2100,
    likes: 256,
    slug: 'vue3-best-practices',
    tags: ['Vue3', 'Composition API', '性能优化', '最佳实践'],
    content: [
      {
        type: 'heading',
        text: 'Composition API 核心概念'
      },
      {
        type: 'paragraph',
        text: 'Vue 3 的 Composition API 为我们提供了更灵活的代码组织方式，让逻辑复用变得更加简单和直观。'
      },
      {
        type: 'code',
        language: 'vue',
        text: '&lt;script setup&gt;\nimport { ref, computed, onMounted } from \'vue\'\n\nconst count = ref(0)\nconst doubleCount = computed(() => count.value * 2)\n\nonMounted(() => {\n  console.log(\'组件已挂载\')\n})\n&lt;/script&gt;'
      }
    ]
  }
]

// 查找当前文章
const article = computed(() => {
  return articles.find(a => a.id === id) || null
})

// 获取目录
const tableOfContents = computed(() => {
  if (!article.value) return []
  return article.value.content
    .filter(section => section.type === 'heading')
    .map(section => ({ text: section.text }))
})

// 相关文章
const relatedArticles = computed(() => {
  if (!article.value) return []
  return articles
    .filter(a => a.id !== article.value!.id && a.category === article.value!.category)
    .slice(0, 3)
    .map(a => ({
      id: a.id,
      title: a.title,
      date: a.date,
      icon: getArticleIcon(a.category)
    }))
})

// 上一篇和下一篇文章
const previousArticle = computed(() => {
  const currentIndex = articles.findIndex(a => a.id === id)
  return currentIndex > 0 ? articles[currentIndex - 1] : null
})

const nextArticle = computed(() => {
  const currentIndex = articles.findIndex(a => a.id === id)
  return currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
})

// 获取文章图标
const getArticleIcon = (category: string) => {
  const icons: { [key: string]: string } = {
    '产品更新': '🚀',
    '教程指南': '📚',
    '行业洞察': '📈',
    '技术分享': '⚡'
  }
  return icons[category] || '📰'
}

// 获取标题索引
const getHeadingIndex = (text: string) => {
  if (!article.value) return 0
  return article.value.content
    .filter(section => section.type === 'heading')
    .findIndex(section => section.text === text)
}

// 滚动到标题
const scrollToHeading = (event: Event, headingId: string) => {
  event.preventDefault()
  const element = document.getElementById(headingId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 复制代码
const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    alert('代码已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 点赞功能
const toggleLike = () => {
  isLiked.value = !isLiked.value
  if (article.value) {
    article.value.likes += isLiked.value ? 1 : -1
  }
}

// 收藏功能
const toggleBookmark = () => {
  alert('文章已收藏')
}

// 分享功能
const shareArticle = async () => {
  if (navigator.share && article.value) {
    try {
      await navigator.share({
        title: article.value.title,
        text: article.value.excerpt,
        url: window.location.href
      })
    } catch (err) {
      console.log('分享失败:', err)
    }
  } else {
    // 复制链接作为备选方案
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('链接已复制到剪贴板')
    } catch (err) {
      console.error('复制失败:', err)
    }
  }
}

// 订阅新闻通讯
const subscribeNewsletter = async () => {
  subscribing.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert('订阅成功！感谢您的关注。')
  email.value = ''
  subscribing.value = false
}

// SEO设置
useSeoMeta({
  title: () => article.value ? `${article.value.title} - 开源官网` : '文章未找到 - 开源官网',
  description: () => article.value?.excerpt || '文章未找到',
  ogTitle: () => article.value?.title || '文章未找到',
  ogDescription: () => article.value?.excerpt || '文章未找到',
})

// 格式化日期
const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped lang="scss">
.article-page {
  min-height: 100vh;
}

/* Article Hero Section */
.article-hero {
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
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  color: white;
  animation: fadeInUp 1s ease-out;
}

.breadcrumb {
  margin-bottom: 1.5rem;
}

.breadcrumb-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #dbeafe;
  }
}

.breadcrumb-separator {
  margin: 0 0.5rem;
}

.breadcrumb-current {
  font-weight: 600;
}

.article-meta-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.meta-badges {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.trending-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
}

.publish-date {
  font-size: 0.875rem;
  opacity: 0.9;
}

.article-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.article-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.article-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  .stat-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.author-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

.author-info {
  text-align: left;
  
  .author-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-size: 1.125rem;
  }
  
  .author-role {
    font-size: 0.875rem;
    opacity: 0.8;
  }
}

.social-share {
  .share-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
    
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
}

/* Article Content Section */
.article-content-section {
  padding: 4rem 0;
  background: #fafbfc;
}

.content-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.main-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Table of Contents */
.toc-section {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  border-left: 4px solid #667eea;
}

.toc-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.toc-link {
  color: #64748b;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    color: #667eea;
    padding-left: 0.5rem;
  }
  
  &:last-child {
    border-bottom: none;
  }
}

/* Article Body */
.article-body {
  line-height: 1.8;
}

.content-section {
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.6s ease-out;
}

.content-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  scroll-margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }
}

.content-paragraph {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.content-list {
  margin-bottom: 2rem;
  padding-left: 0;
}

.list-item {
  color: #475569;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  line-height: 1.7;
  font-size: 1.125rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: 700;
    font-size: 1.25rem;
  }
}

.code-block {
  background: #1e293b;
  border-radius: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #334155;
  border-bottom: 1px solid #475569;
}

.code-language {
  color: #e2e8f0;
  font-size: 0.875rem;
  font-weight: 600;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #475569;
  color: #e2e8f0;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #64748b;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  
  code {
    color: #10b981;
    font-family: 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }
}

.quote-block {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-left: 4px solid #667eea;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 0 1rem 1rem 0;
  font-style: italic;
  
  p {
    color: #475569;
    font-size: 1.25rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  cite {
    color: #64748b;
    font-size: 1rem;
    font-weight: 600;
  }
}

/* Tags Section */
.tags-section {
  margin: 3rem 0;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
}

.tags-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
  }
}

/* Article Actions */
.article-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
    transform: translateY(-2px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.like-btn {
  &.liked {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
    
    &:hover {
      background: #dc2626;
    }
  }
}

.bookmark-btn:hover {
  background: #fbbf24;
  color: white;
  border-color: #fbbf24;
}

.share-btn:hover {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.author-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.author-avatar-large {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.author-name-large {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.author-bio {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.author-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.stat {
  text-align: center;
  
  .stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: #64748b;
  }
}

/* Related Articles */
.related-articles {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.related-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
  }
}

.related-image {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.related-icon {
  font-size: 1.25rem;
}

.related-content {
  flex: 1;
  min-width: 0;
}

.related-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
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

.related-meta {
  font-size: 0.75rem;
  color: #64748b;
}

/* Newsletter Card */
.newsletter-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  text-align: center;
}

.newsletter-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.newsletter-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.newsletter-description {
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.newsletter-input {
  padding: 0.75rem 1rem;
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
  padding: 0.75rem 1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #f8fafc;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

/* Article Navigation */
.article-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  gap: 2rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: white;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateY(-2px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.back-btn {
  background: #667eea;
  color: white;
  border-color: #667eea;
  
  &:hover {
    background: #5a67d8;
    border-color: #5a67d8;
  }
}

.nav-articles {
  display: flex;
  gap: 1rem;
}

.prev-btn,
.next-btn {
  flex-direction: column;
  align-items: flex-start;
  max-width: 12rem;
  
  .nav-label {
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }
  
  .nav-title {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
}

.next-btn {
  align-items: flex-end;
  text-align: right;
}

/* Not Found Section */
.not-found-section {
  padding: 8rem 0;
  background: #f8fafc;
}

.not-found-content {
  text-align: center;
  max-width: 32rem;
  margin: 0 auto;
}

.not-found-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.not-found-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.not-found-description {
  color: #64748b;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .article-title {
    font-size: 2.5rem;
  }
  
  .article-stats {
    gap: 1rem;
  }
  
  .nav-articles {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .article-hero {
    padding: 6rem 0 4rem;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-stats {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .main-content {
    padding: 2rem;
  }
  
  .content-heading {
    font-size: 1.5rem;
  }
  
  .article-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-articles {
    width: 100%;
    justify-content: space-between;
  }
  
  .prev-btn,
  .next-btn {
    max-width: none;
    flex: 1;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    font-size: 0.875rem;
  }
  
  .meta-badges {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .author-section {
    flex-direction: column;
    gap: 1rem;
  }
  
  .article-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
