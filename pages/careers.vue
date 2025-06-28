<template>
  <div class="careers-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          招聘信息
        </h1>
        <p class="hero-description">
          加入我们的团队，一起创造有意义的产品，推动技术创新
        </p>
      </div>
    </section>

    <!-- 公司文化 -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">为什么选择我们？</h2>
          <p class="section-description">了解我们的公司文化和员工福利</p>
        </div>
        <div class="benefits-grid">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="benefit-card"
          >
            <div class="benefit-icon">
              <span>{{ benefit.icon }}</span>
            </div>
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 职位列表 -->
    <section class="jobs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">开放职位</h2>
          <p class="section-description">找到适合你的职业机会</p>
        </div>
        <div class="jobs-list">
          <div
            v-for="job in openPositions"
            :key="job.id"
            class="job-card"
          >
            <div class="job-content">
              <div class="job-header">
                <h3 class="job-title">{{ job.title }}</h3>
                <span class="job-department">{{ job.department }}</span>
              </div>
              <p class="job-description">{{ job.description }}</p>
              <div class="job-details">
                <span class="job-detail">
                  <span class="detail-icon">📍</span>{{ job.location }}
                </span>
                <span class="job-detail">
                  <span class="detail-icon">💼</span>{{ job.type }}
                </span>
                <span class="job-detail">
                  <span class="detail-icon">💰</span>{{ job.salary }}
                </span>
              </div>
            </div>
            <div class="job-action">
              <button class="btn btn-primary">
                申请职位
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 申请流程 -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">申请流程</h2>
          <p class="section-description">简单的四步申请流程</p>
        </div>
        <div class="process-grid">
          <div
            v-for="(step, index) in applicationSteps"
            :key="step.id"
            class="process-step"
          >
            <div class="step-number">
              {{ index + 1 }}
              <div
                v-if="index < applicationSteps.length - 1"
                class="step-connector"
              ></div>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: '招聘信息 - 开源官网',
  description: '加入我们的团队，一起创造有意义的产品。查看开放职位和申请流程。',
  ogTitle: '招聘信息 - 开源官网',
  ogDescription: '加入我们的团队，一起创造有意义的产品。查看开放职位和申请流程',
})

// 员工福利
const benefits = [
  {
    id: 1,
    title: '弹性工作',
    description: '灵活的工作时间和远程办公机会',
    icon: '⏰'
  },
  {
    id: 2,
    title: '学习成长',
    description: '技术培训、会议参与和学习资源支持',
    icon: '📚'
  },
  {
    id: 3,
    title: '健康保障',
    description: '完善的医疗保险和健康检查',
    icon: '🏥'
  },
  {
    id: 4,
    title: '团队活动',
    description: '定期的团建活动和公司聚餐',
    icon: '🎉'
  }
]

// 开放职位
const openPositions = [
  {
    id: 1,
    title: '高级前端工程师',
    department: '技术部',
    description: '负责前端架构设计和核心功能开发，要求熟练掌握Vue.js、React等现代前端框架。',
    location: '北京/远程',
    type: '全职',
    salary: '20k-35k'
  },
  {
    id: 2,
    title: '产品经理',
    department: '产品部',
    description: '负责产品规划和需求分析，具备良好的用户洞察能力和产品思维。',
    location: '北京',
    type: '全职',
    salary: '18k-30k'
  },
  {
    id: 3,
    title: 'UI/UX设计师',
    department: '设计部',
    description: '负责产品界面设计和用户体验优化，有扎实的设计功底和审美能力。',
    location: '北京/上海',
    type: '全职',
    salary: '15k-25k'
  },
  {
    id: 4,
    title: '后端工程师',
    department: '技术部',
    description: '负责服务端开发和系统架构设计，熟练掌握Node.js、Python等技术栈。',
    location: '北京/远程',
    type: '全职',
    salary: '18k-32k'
  }
]

// 申请流程
const applicationSteps = [
  {
    id: 1,
    title: '在线申请',
    description: '提交简历和求职信'
  },
  {
    id: 2,
    title: '简历筛选',
    description: 'HR初步筛选和评估'
  },
  {
    id: 3,
    title: '技术面试',
    description: '技术能力和经验考察'
  },
  {
    id: 4,
    title: '入职确认',
    description: '确定薪资和入职时间'
  }
]
</script>

<style scoped lang="scss">
.careers-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #d97706 0%, #ea580c 100%);
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
    color: #fed7aa;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.benefits-section, .process-section {
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
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }
  
  .section-description {
    font-size: 1.25rem;
    color: #6b7280;
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.benefit-card {
  text-align: center;
  
  .benefit-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    span {
      font-size: 1.875rem;
    }
  }
  
  .benefit-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
  }
  
  .benefit-description {
    color: #6b7280;
    line-height: 1.5;
  }
}

.jobs-section {
  padding: 5rem 0;
  background-color: #f9fafb;
  
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
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }
  
  .section-description {
    font-size: 1.25rem;
    color: #6b7280;
  }
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.job-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: box-shadow 0.15s ease-in-out;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.job-content {
  flex: 1;
}

.job-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  .job-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
  
  .job-department {
    padding: 0.25rem 0.75rem;
    background-color: #fef3c7;
    color: #92400e;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
  }
}

.job-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.job-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-detail {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  
  .detail-icon {
    margin-right: 0.5rem;
  }
}

.job-action {
  @media (min-width: 1024px) {
    margin-left: 2rem;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    border: none;
    text-decoration: none;
    width: 100%;
    
    @media (min-width: 1024px) {
      width: auto;
    }
    
    &.btn-primary {
      background-color: #d97706;
      color: white;
      
      &:hover {
        background-color: #b45309;
      }
    }
  }
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.process-step {
  text-align: center;
  position: relative;
}

.step-number {
  width: 4rem;
  height: 4rem;
  background-color: #d97706;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  position: relative;
  
  .step-connector {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 100%;
    height: 2px;
    background-color: #fed7aa;
    transform: translateY(-50%);
    
    @media (max-width: 1023px) {
      display: none;
    }
  }
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.step-description {
  color: #6b7280;
  line-height: 1.5;
}
</style> 