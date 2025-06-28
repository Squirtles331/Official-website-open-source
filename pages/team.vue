<template>
  <div class="team-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          团队介绍
        </h1>
        <p class="hero-description">
          优秀的人才成就卓越的产品，了解我们的核心团队成员
        </p>
      </div>
    </section>

    <!-- 团队成员 -->
    <section class="team-section">
      <div class="container">
        <div class="team-grid">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="member-card"
          >
            <div class="member-content">
              <div class="member-avatar">
                {{ member.name.charAt(0) }}
              </div>
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-position">{{ member.position }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-socials">
                <a
                  v-for="social in member.socials"
                  :key="social.platform"
                  :href="social.url"
                  class="social-link"
                >
                  <span>{{ social.icon }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 招聘信息 -->
    <section class="join-section">
      <div class="container">
        <h2 class="join-title">加入我们</h2>
        <p class="join-description">
          我们正在寻找有才华的开发者、设计师和产品经理加入我们的团队
        </p>
        <NuxtLink
          to="/careers"
          class="join-btn"
        >
          查看职位
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: '团队介绍 - 开源官网',
  description: '了解我们的核心团队成员，优秀的人才成就卓越的产品。',
  ogTitle: '团队介绍 - 开源官网',
  ogDescription: '了解我们的核心团队成员，优秀的人才成就卓越的产品',
})

// 团队成员数据
const teamMembers = [
  {
    id: 1,
    name: 'AAAA',
    position: '首席技术官',
    bio: '10年全栈开发经验，专注于系统架构设计和团队管理，致力于构建高性能、可扩展的技术解决方案。',
    socials: [
      { platform: 'github', icon: '💻', url: '#' },
      { platform: 'linkedin', icon: '💼', url: '#' },
      { platform: 'twitter', icon: '🐦', url: '#' }
    ]
  },
  {
    id: 2,
    name: 'BBBB',
    position: '产品总监',
    bio: '8年产品管理经验，擅长用户体验设计和产品策略制定，帮助团队打造用户喜爱的产品。',
    socials: [
      { platform: 'linkedin', icon: '💼', url: '#' },
      { platform: 'twitter', icon: '🐦', url: '#' },
      { platform: 'dribbble', icon: '🎨', url: '#' }
    ]
  },
  {
    id: 3,
    name: 'CCCC',
    position: '设计总监',
    bio: '资深UI/UX设计师，拥有丰富的品牌设计和用户界面设计经验，追求完美的视觉效果和用户体验。',
    socials: [
      { platform: 'dribbble', icon: '🎨', url: '#' },
      { platform: 'behance', icon: '📐', url: '#' },
      { platform: 'instagram', icon: '📷', url: '#' }
    ]
  },
  {
    id: 4,
    name: 'DDDD',
    position: '前端工程师',
    bio: '专注于现代前端技术栈，精通Vue.js、React等框架，致力于构建高质量的用户界面。',
    socials: [
      { platform: 'github', icon: '💻', url: '#' },
      { platform: 'codepen', icon: '📝', url: '#' },
      { platform: 'twitter', icon: '🐦', url: '#' }
    ]
  },
  {
    id: 5,
    name: 'EEEE',
    position: '后端工程师',
    bio: '专业的后端开发工程师，精通Node.js、Python等技术，专注于API设计和数据库优化。',
    socials: [
      { platform: 'github', icon: '💻', url: '#' },
      { platform: 'stackoverflow', icon: '💡', url: '#' },
      { platform: 'linkedin', icon: '💼', url: '#' }
    ]
  },
  {
    id: 6,
    name: 'FFFF',
    position: '运营经理',
    bio: '负责产品运营和市场推广，擅长数据分析和用户增长策略，帮助产品获得更多用户认可。',
    socials: [
      { platform: 'linkedin', icon: '💼', url: '#' },
      { platform: 'twitter', icon: '🐦', url: '#' },
      { platform: 'medium', icon: '📚', url: '#' }
    ]
  }
]
</script>

<style scoped lang="scss">
.team-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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

.team-section {
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

.team-grid {
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

.member-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  text-align: center;
  transition: box-shadow 0.15s ease-in-out;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    .member-avatar {
      transform: scale(1.05);
    }
  }
}

.member-content {
  padding: 2rem;
}

.member-avatar {
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  transition: transform 0.15s ease-in-out;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.member-position {
  color: #8b5cf6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.member-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background-color: #ddd6fe;
    color: #8b5cf6;
  }
  
  span {
    font-size: 1.125rem;
  }
}

.join-section {
  padding: 5rem 0;
  background-color: #f9fafb;
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
  
  .join-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
  
  .join-description {
    font-size: 1.25rem;
    color: #6b7280;
    margin-bottom: 2rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .join-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: #8b5cf6;
    color: white;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: background-color 0.15s ease-in-out;
    text-decoration: none;
    
    &:hover {
      background-color: #7c3aed;
    }
  }
}
</style> 