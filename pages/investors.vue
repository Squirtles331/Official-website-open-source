<template>
  <div class="investors-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          投资者关系
        </h1>
        <p class="hero-description">
          了解我们的发展历程、财务状况和未来规划
        </p>
      </div>
    </section>

    <!-- 公司概况 -->
    <section class="metrics-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">公司概况</h2>
          <p class="section-description">稳健发展，持续创新</p>
        </div>
        <div class="metrics-grid">
          <div
            v-for="metric in companyMetrics"
            :key="metric.id"
            class="metric-card"
          >
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 财务亮点 -->
    <section class="financial-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">财务亮点</h2>
          <p class="section-description">健康的财务状况和增长趋势</p>
        </div>
        <div class="financial-grid">
          <div class="chart-card">
            <h3 class="chart-title">收入增长</h3>
            <div class="chart-data">
              <div
                v-for="year in revenueData"
                :key="year.year"
                class="data-row"
              >
                <span class="data-year">{{ year.year }}年</span>
                <div class="data-bar">
                  <div class="bar-bg">
                    <div 
                      class="bar-fill" 
                      :style="{ width: year.percentage + '%' }"
                    ></div>
                  </div>
                  <span class="data-amount">{{ year.amount }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="chart-card">
            <h3 class="chart-title">用户增长</h3>
            <div class="chart-data">
              <div
                v-for="year in userGrowthData"
                :key="year.year"
                class="data-row"
              >
                <span class="data-year">{{ year.year }}年</span>
                <div class="data-bar">
                  <div class="bar-bg">
                    <div 
                      class="bar-fill" 
                      :style="{ width: year.percentage + '%' }"
                    ></div>
                  </div>
                  <span class="data-amount">{{ year.users }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 投资者资源 -->
    <section class="resources-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">投资者资源</h2>
          <p class="section-description">获取最新的财务报告和投资信息</p>
        </div>
        <div class="resources-grid">
          <div
            v-for="resource in investorResources"
            :key="resource.id"
            class="resource-card"
          >
            <div class="resource-icon">
              <span>{{ resource.icon }}</span>
            </div>
            <h3 class="resource-title">{{ resource.title }}</h3>
            <p class="resource-description">{{ resource.description }}</p>
            <button class="resource-link">
              下载资料 →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO设置
useSeoMeta({
  title: '投资者关系 - 开源官网',
  description: '了解我们的发展历程、财务状况和未来规划，获取投资者相关资源。',
  ogTitle: '投资者关系 - 开源官网',
  ogDescription: '了解我们的发展历程、财务状况和未来规划',
})

// 公司指标
const companyMetrics = [
  { id: 1, value: '100万+', label: '注册用户' },
  { id: 2, value: '50+', label: '团队成员' },
  { id: 3, value: '99.9%', label: '服务可用性' },
  { id: 4, value: '24/7', label: '技术支持' }
]

// 收入数据
const revenueData = [
  { year: 2022, amount: '500万', percentage: 60 },
  { year: 2023, amount: '800万', percentage: 80 },
  { year: 2024, amount: '1200万', percentage: 100 }
]

// 用户增长数据
const userGrowthData = [
  { year: 2022, users: '20万', percentage: 50 },
  { year: 2023, users: '60万', percentage: 75 },
  { year: 2024, users: '100万', percentage: 100 }
]

// 投资者资源
const investorResources = [
  {
    id: 1,
    title: '年度报告',
    description: '详细的年度财务报告和业务发展总结',
    icon: '📊'
  },
  {
    id: 2,
    title: '季度财报',
    description: '最新的季度财务数据和经营状况',
    icon: '📈'
  },
  {
    id: 3,
    title: '投资者演示',
    description: '公司战略规划和市场前景分析',
    icon: '📋'
  },
  {
    id: 4,
    title: '公司治理',
    description: '董事会结构和公司治理相关信息',
    icon: '🏛️'
  },
  {
    id: 5,
    title: '财务日历',
    description: '重要财务事件和公告发布时间表',
    icon: '📅'
  },
  {
    id: 6,
    title: '联系我们',
    description: '投资者关系团队联系方式和服务',
    icon: '📞'
  }
]
</script>

<style scoped lang="scss">
.investors-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #475569 0%, #64748b 100%);
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
    color: #cbd5e1;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.metrics-section, .resources-section {
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

.metrics-grid {
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

.metric-card {
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  .metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #475569;
    margin-bottom: 0.5rem;
  }
  
  .metric-label {
    color: #6b7280;
  }
}

.financial-section {
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

.financial-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.chart-card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  .chart-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1.5rem;
  }
}

.chart-data {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.data-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.data-year {
  color: #6b7280;
  min-width: 4rem;
}

.data-bar {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 1rem;
}

.bar-bg {
  width: 8rem;
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  margin-right: 1rem;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background-color: #475569;
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
}

.data-amount {
  color: #111827;
  font-weight: 500;
  min-width: 4rem;
  text-align: right;
}

.resources-grid {
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

.resource-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.15s ease-in-out;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .resource-icon {
    width: 3rem;
    height: 3rem;
    background-color: #f1f5f9;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    
    span {
      font-size: 1.5rem;
    }
  }
  
  .resource-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
  }
  
  .resource-description {
    color: #6b7280;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .resource-link {
    color: #475569;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.15s ease-in-out;
    
    &:hover {
      color: #334155;
    }
  }
}
</style> 