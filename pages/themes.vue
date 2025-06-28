<template>
  <div class="themes-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          主题市场
        </h1>
        <p class="hero-description">
          精美的设计主题，个性化定制，打造独特的品牌形象
        </p>
      </div>
    </section>

    <!-- 主题展示 -->
    <section class="themes-section">
      <div class="container">
        <div class="themes-grid">
          <div
            v-for="theme in themes"
            :key="theme.id"
            class="theme-card"
          >
            <div class="theme-preview" :style="{ background: theme.preview }">
              <div class="preview-content">
                <div class="preview-icon">{{ theme.icon }}</div>
                <p class="preview-style">{{ theme.style }}</p>
              </div>
            </div>
            <div class="theme-content">
              <h3 class="theme-title">{{ theme.name }}</h3>
              <p class="theme-description">{{ theme.description }}</p>
              <div class="theme-meta">
                <div class="color-palette">
                  <span
                    v-for="color in theme.colors"
                    :key="color"
                    class="color-dot"
                    :style="{ backgroundColor: color }"
                  ></span>
                </div>
                <span class="download-count">{{ theme.downloads }} 下载</span>
              </div>
              <div class="theme-actions">
                <button class="btn btn-primary">
                  应用主题
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
  title: '主题市场 - 开源官网',
  description: '精美的设计主题市场，提供多种风格和配色方案，打造独特的品牌形象。',
  ogTitle: '主题市场 - 开源官网',
  ogDescription: '精美的设计主题市场，提供多种风格和配色方案',
})

// 主题数据
const themes = [
  {
    id: 1,
    name: '现代简约',
    description: '简洁现代的设计风格，注重留白和清晰的层次结构',
    style: '简约风',
    preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    colors: ['#667eea', '#764ba2', '#f093fb', '#f5f7fa'],
    downloads: '3.2k',
    icon: '✨'
  },
  {
    id: 2,
    name: '商务专业',
    description: '适合企业和商务场景的专业主题，传达信任和可靠性',
    style: '商务风',
    preview: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    colors: ['#2c3e50', '#34495e', '#3498db', '#ecf0f1'],
    downloads: '2.8k',
    icon: '💼'
  },
  {
    id: 3,
    name: '创意艺术',
    description: '充满创意和艺术感的主题，适合设计师和创意工作者',
    style: '艺术风',
    preview: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'],
    downloads: '1.9k',
    icon: '🎨'
  },
  {
    id: 4,
    name: '科技未来',
    description: '科技感十足的未来主义设计，适合科技公司和创新企业',
    style: '科技风',
    preview: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
    colors: ['#0c0c0c', '#1a1a1a', '#00ff88', '#007bff'],
    downloads: '2.1k',
    icon: '🚀'
  },
  {
    id: 5,
    name: '自然清新',
    description: '灵感来自大自然的清新主题，营造舒适和谐的视觉体验',
    style: '自然风',
    preview: 'linear-gradient(135deg, #74b9ff 0%, #00b894 100%)',
    colors: ['#74b9ff', '#00b894', '#55a3ff', '#26de81'],
    downloads: '2.5k',
    icon: '🌿'
  },
  {
    id: 6,
    name: '暗黑模式',
    description: '护眼的深色主题，适合长时间使用，减少视觉疲劳',
    style: '暗黑风',
    preview: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
    colors: ['#1e1e1e', '#2d2d2d', '#6c5ce7', '#74b9ff'],
    downloads: '4.1k',
    icon: '🌙'
  }
]
</script>

<style scoped lang="scss">
.themes-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
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
    color: #fce7f3;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.themes-section {
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
}

.themes-grid {
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

.theme-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.15s ease-in-out;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
}

.theme-preview {
  height: 12rem;
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
  
  .preview-style {
    font-size: 0.875rem;
    font-weight: 500;
  }
}

.theme-content {
  padding: 1.5rem;
}

.theme-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.theme-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.theme-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.color-palette {
  display: flex;
  gap: 0.5rem;
}

.color-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.download-count {
  font-size: 0.875rem;
  color: #6b7280;
}

.theme-actions {
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
    background-color: #ec4899;
    color: white;
    
    &:hover {
      background-color: #db2777;
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
</style> 