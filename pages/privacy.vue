<template>
  <div class="privacy-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          隐私政策
        </h1>
        <p class="hero-description">
          我们重视您的隐私，致力于保护您的个人信息安全
        </p>
      </div>
    </section>

    <!-- 隐私政策内容 -->
    <section class="content-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="notice-box">
            <p class="notice-date">最后更新：2024年12月27日</p>
            <p class="notice-text">本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。</p>
          </div>

          <div
            v-for="section in privacySections"
            :key="section.id"
            class="policy-section"
          >
            <h2 class="section-title">{{ section.title }}</h2>
            <div class="section-content">
              <p
                v-for="(paragraph, index) in section.content"
                :key="index"
                class="paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- 联系信息 -->
          <div class="contact-box">
            <h3 class="contact-title">如有疑问，请联系我们</h3>
            <div class="contact-info">
              <p>邮箱：abcd@example.com</p>
              <p>电话：+86 AAA-BBB-CCCC</p>
              <p>地址：A市B区C路DDD号</p>
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
  title: '隐私政策 - 开源官网',
  description: '了解我们的隐私政策，我们如何收集、使用、存储和保护您的个人信息。',
  ogTitle: '隐私政策 - 开源官网',
  ogDescription: '了解我们的隐私政策，我们如何收集、使用、存储和保护您的个人信息',
})

// 隐私政策内容
const privacySections = [
  {
    id: 1,
    title: '1. 信息收集',
    content: [
      '我们可能收集以下类型的信息：',
      '• 个人身份信息：如姓名、邮箱地址、电话号码等您主动提供的信息',
      '• 技术信息：如IP地址、浏览器类型、操作系统、访问时间等',
      '• 使用信息：如您在我们网站上的浏览行为、点击记录等',
      '我们只在必要时收集个人信息，并确保收集的信息与提供服务的目的相关。'
    ]
  },
  {
    id: 2,
    title: '2. 信息使用',
    content: [
      '我们使用收集的信息用于以下目的：',
      '• 提供和改进我们的服务',
      '• 与您沟通，回应您的询问和请求',
      '• 发送服务更新、技术通知和安全警报',
      '• 进行数据分析以改善用户体验',
      '• 遵守法律要求和义务',
      '我们不会将您的个人信息用于未经您同意的其他目的。'
    ]
  },
  {
    id: 3,
    title: '3. 信息共享',
    content: [
      '我们承诺不会出售、交易或转让您的个人信息给第三方，除非：',
      '• 获得您的明确同意',
      '• 为了提供您请求的服务而需要与合作伙伴共享',
      '• 法律要求或政府部门的合法要求',
      '• 保护我们的权利、财产或安全，或保护其他用户的权利、财产或安全',
      '在任何情况下，我们都会要求第三方采取适当的安全措施保护您的信息。'
    ]
  },
  {
    id: 4,
    title: '4. 数据安全',
    content: [
      '我们采取多种安全措施来保护您的个人信息：',
      '• 使用SSL加密技术保护数据传输',
      '• 实施访问控制和身份验证机制',
      '• 定期进行安全审计和漏洞评估',
      '• 员工接受隐私和安全培训',
      '• 制定数据泄露应急响应计划',
      '尽管我们努力保护您的信息，但请注意互联网传输无法保证100%安全。'
    ]
  }
]
</script>

<style scoped lang="scss">
.privacy-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
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
    color: #d1d5db;
    max-width: 48rem;
    margin: 0 auto;
  }
}

.content-section {
  padding: 5rem 0;
  
  .container {
    max-width: 64rem;
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

.content-wrapper {
  max-width: none;
  font-size: 1.125rem;
  line-height: 1.75;
}

.notice-box {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #dbeafe;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
  
  .notice-date {
    color: #1e40af;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .notice-text {
    color: #1d4ed8;
  }
}

.policy-section {
  margin-bottom: 3rem;
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
  
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .paragraph {
    color: #374151;
    line-height: 1.625;
  }
}

.contact-box {
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  
  .contact-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #374151;
  }
}
</style> 