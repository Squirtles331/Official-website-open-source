<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in">
            <span class="badge-text">关于我们</span>
          </div>
          <h1 class="hero-title animate-text-reveal">
            打造未来的数字化体验
          </h1>
          <p class="hero-description animate-fade-in-up">
            我们是一群充满激情的创新者，致力于为企业和个人提供卓越的
            <span class="highlight">官网解决方案</span>
          </p>
          <div class="hero-stats animate-slide-up">
            <div class="stat-item">
              <div class="stat-number">3000+</div>
              <div class="stat-label">满意客户</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">产品模块</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">稳定运行</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content animate-slide-in-left">
            <div class="content-header">
              <h2 class="section-title">我们的使命</h2>
              <div class="title-decoration"></div>
            </div>
            <p class="mission-text">
              我们相信技术应该让世界变得更美好。通过开源的力量，我们致力于为每个人
              提供专业级的网站解决方案，让创意无界，让想法落地。
            </p>
            <p class="mission-text">
              无论您是初创企业还是成熟公司，无论您是个人创作者还是团队协作，
              我们都能为您提供最适合的数字化解决方案。
            </p>
            <div class="mission-features">
              <div class="feature-item">
                <div class="feature-icon">🎯</div>
                <span>专业可靠</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🚀</div>
                <span>快速部署</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">💡</div>
                <span>持续创新</span>
              </div>
            </div>
          </div>
          <div class="mission-visual animate-slide-in-right">
            <div class="visual-container">
              <div class="visual-card card-1">
                <div class="card-content">
                  <div class="card-icon">🌟</div>
                  <h3>创新驱动</h3>
                  <p>引领行业技术发展</p>
                </div>
              </div>
              <div class="visual-card card-2">
                <div class="card-content">
                  <div class="card-icon">🤝</div>
                  <h3>用户至上</h3>
                  <p>以用户体验为核心</p>
                </div>
              </div>
              <div class="visual-card card-3">
                <div class="card-content">
                  <div class="card-icon">🌍</div>
                  <h3>开放共享</h3>
                  <p>构建开源生态社区</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="timeline-background">
        <div class="timeline-pattern"></div>
      </div>
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title light">发展历程</h2>
          <p class="section-description light">见证我们的成长足迹</p>
        </div>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          <div
            v-for="(milestone, index) in milestones"
            :key="milestone.id"
            class="timeline-item animate-fade-in-up"
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="milestone-card">
              <div class="milestone-year">{{ milestone.year }}</div>
              <div class="milestone-content">
                <div class="milestone-icon">{{ milestone.icon }}</div>
                <h3 class="milestone-title">{{ milestone.title }}</h3>
                <p class="milestone-description">{{ milestone.description }}</p>
              </div>
            </div>
            <div class="timeline-dot"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title">核心团队</h2>
          <p class="section-description">优秀的人才成就卓越的产品</p>
        </div>
        <div class="team-grid">
          <div
            v-for="(member, index) in teamMembers"
            :key="member.id"
            class="team-member animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="member-card">
              <div class="member-avatar">
                <div class="avatar-image">{{ member.name.charAt(0) }}</div>
                <div class="avatar-ring"></div>
              </div>
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <p class="member-bio">{{ member.bio }}</p>
              </div>
              <div class="member-social">
                <button class="social-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button class="social-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="values-background">
        <div class="values-overlay"></div>
      </div>
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title light">我们的价值观</h2>
          <p class="section-description light">指导我们前行的核心理念</p>
        </div>
        <div class="values-grid">
          <div
            v-for="(value, index) in values"
            :key="value.id"
            class="value-card animate-float-up"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="value-icon">
              <div class="icon-background"></div>
              <span class="icon-emoji">{{ value.icon }}</span>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
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
          <h2 class="cta-title">准备开始您的数字化之旅？</h2>
          <p class="cta-description">
            让我们一起创造属于您的专业网站，开启无限可能
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn btn-white">
              <span>联系我们</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="/products" class="btn btn-outline-white">
              查看产品
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: '关于我们 - 开源官网',
  description: '了解我们的故事、团队和价值观。我们致力于为企业和个人提供现代化、高质量的官网解决方案。',
  ogTitle: '关于我们 - 开源官网',
  ogDescription: '了解我们的故事、团队和价值观。我们致力于为企业和个人提供现代化、高质量的官网解决方案。',
})

// 发展历程数据
const milestones = [
  {
    id: 1,
    year: '2023',
    title: '项目构想',
    description: '团队成立，开始构思现代化官网解决方案，确定技术方向和产品定位。',
    icon: '💡'
  },
  {
    id: 2,
    year: '2024 Q1',
    title: '核心架构',
    description: '完成技术架构设计，搭建开发环境，建立代码规范和协作流程。',
    icon: '🏗️'
  },
  {
    id: 3,
    year: '2024 Q2',
    title: '功能开发',
    description: '完成核心功能开发，包括响应式设计、SEO优化、国际化等关键特性。',
    icon: '⚡'
  },
  {
    id: 4,
    year: '2024 Q3',
    title: '开源发布',
    description: '正式开源发布，建立社区，与全球开发者共同完善产品功能。',
    icon: '🚀'
  },
  {
    id: 5,
    year: '2024 Q4',
    title: '生态建设',
    description: '构建完整的开发者生态，提供更多模板、组件和插件选择。',
    icon: '🌟'
  }
]

// 团队成员数据
const teamMembers = [
  {
    id: 1,
    name: 'AAAA',
    role: '创始人 & CEO',
    bio: '10年互联网产品经验，专注于用户体验和产品创新，致力于打造世界级的开源产品。'
  },
  {
    id: 2,
    name: 'BBBB',
    role: '技术总监',
    bio: '资深全栈工程师，Vue.js 核心贡献者，在前端架构和性能优化方面有深厚造诣。'
  },
  {
    id: 3,
    name: 'CCCC',
    role: '设计总监',
    bio: '拥有丰富的UI/UX设计经验，擅长创造现代化的用户界面和流畅的交互体验。'
  },
  {
    id: 4,
    name: 'DDDD',
    role: '产品经理',
    bio: '敏锐的市场洞察力，深度理解用户需求，专注于产品规划和用户体验优化。'
  },
  {
    id: 5,
    name: 'EEEE',
    role: '运营总监',
    bio: '多年社区运营经验，擅长开发者生态建设和开源项目推广。'
  },
  {
    id: 6,
    name: 'FFFF',
    role: '前端工程师',
    bio: '专注于现代前端技术，在组件化开发和工程化实践方面有丰富经验。'
  }
]

// 价值观数据
const values = [
  {
    id: 1,
    title: '用户至上',
    description: '始终以用户需求为导向，持续优化产品体验，创造真正的价值。',
    icon: '👥'
  },
  {
    id: 2,
    title: '开放共享',
    description: '拥抱开源精神，与全球开发者共同建设更好的数字世界。',
    icon: '🤝'
  },
  {
    id: 3,
    title: '创新驱动',
    description: '保持技术敏感度，不断探索新技术，引领行业发展趋势。',
    icon: '🚀'
  },
  {
    id: 4,
    title: '品质卓越',
    description: '严格的质量标准，精益求精的工匠精神，打造卓越的产品品质。',
    icon: '⭐'
  },
  {
    id: 5,
    title: '团队协作',
    description: '相互信任，高效协作，发挥团队的集体智慧和创造力。',
    icon: '🎯'
  },
  {
    id: 6,
    title: '持续学习',
    description: '保持好奇心，拥抱变化，在快速发展的技术领域中不断成长。',
    icon: '📚'
  }
]
</script>

<style scoped lang="scss">
.about-page {
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

.floating-shapes {
  position: absolute;
  inset: 0;
  
  .shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float-shapes 15s ease-in-out infinite;
    
    &.shape-1 {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &.shape-2 {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: -5s;
    }
    
    &.shape-3 {
      width: 60px;
      height: 60px;
      bottom: 30%;
      left: 70%;
      animation-delay: -10s;
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

// Mission Section
.mission-section {
  padding: 8rem 0;
  background: #fafbfc;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-content {
  .content-header {
    margin-bottom: 2rem;
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }
    
    .title-decoration {
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 2px;
    }
  }
  
  .mission-text {
    font-size: 1.125rem;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  .mission-features {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    
    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      
      .feature-icon {
        font-size: 1.5rem;
      }
      
      span {
        font-weight: 600;
        color: #1e293b;
      }
    }
  }
}

.mission-visual {
  .visual-container {
    position: relative;
    height: 400px;
  }
  
  .visual-card {
    position: absolute;
    background: white;
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    &.card-1 {
      top: 0;
      left: 0;
      z-index: 3;
      animation: float-card 6s ease-in-out infinite;
    }
    
    &.card-2 {
      top: 50%;
      right: 0;
      z-index: 2;
      animation: float-card 6s ease-in-out infinite;
      animation-delay: -2s;
    }
    
    &.card-3 {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      animation: float-card 6s ease-in-out infinite;
      animation-delay: -4s;
    }
  }
  
  .card-content {
    text-align: center;
    
    .card-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #64748b;
      font-size: 0.875rem;
    }
  }
}

// Timeline Section
.timeline-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  overflow: hidden;
}

.timeline-background {
  position: absolute;
  inset: 0;
  
  .timeline-pattern {
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

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    &.light {
      color: white;
    }
  }
  
  .section-description {
    font-size: 1.125rem;
    
    &.light {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea, #764ba2);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  
  &.timeline-left {
    .milestone-card {
      margin-right: 50%;
      padding-right: 2rem;
      text-align: right;
    }
  }
  
  &.timeline-right {
    .milestone-card {
      margin-left: 50%;
      padding-left: 2rem;
      text-align: left;
    }
  }
}

.milestone-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
  
  .milestone-year {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .milestone-content {
    .milestone-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .milestone-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.5rem;
    }
    
    .milestone-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
  }
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 2rem;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  transform: translateX(-50%);
  border: 4px solid #1e293b;
  z-index: 10;
}

// Team Section
.team-section {
  padding: 8rem 0;
  background: #f8fafc;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  .member-card {
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
  }
  
  .member-avatar {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
    
    .avatar-image {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }
    
    .avatar-ring {
      position: absolute;
      inset: -8px;
      border: 2px solid #667eea;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    &:hover .avatar-ring {
      opacity: 1;
      animation: pulse-ring 2s ease-in-out infinite;
    }
  }
  
  .member-info {
    margin-bottom: 1.5rem;
    
    .member-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }
    
    .member-role {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .member-bio {
      color: #64748b;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
  
  .member-social {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    
    .social-btn {
      width: 40px;
      height: 40px;
      background: #f1f5f9;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
      }
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}

// Values Section  
.values-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.values-background {
  position: absolute;
  inset: 0;
  
  .values-overlay {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
  
  .value-icon {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
    
    .icon-background {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
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
  
  .value-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .value-description {
    opacity: 0.9;
    line-height: 1.6;
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
    border-color: rgba(255, 255, 255, 0.3);
    
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
}

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-shapes {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-30px) rotate(120deg); }
  66% { transform: translateY(15px) rotate(240deg); }
}

@keyframes float-card {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.3); opacity: 0; }
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

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

.animate-float-up {
  animation: floatUp 0.8s ease-out;
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

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes floatUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

// Responsive Design
@media (max-width: 1024px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .timeline-item {
    &.timeline-left,
    &.timeline-right {
      .milestone-card {
        margin: 0;
        padding: 2rem;
        text-align: left;
      }
    }
  }
  
  .timeline-line {
    left: 2rem;
  }
  
  .timeline-dot {
    left: 2rem;
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
  
  .mission-features {
    flex-direction: column;
    gap: 1rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
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
}

@media (max-width: 640px) {
  .hero-section {
    padding: 6rem 0 4rem;
  }
  
  .mission-section,
  .timeline-section,
  .team-section,
  .values-section {
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
}
</style> 