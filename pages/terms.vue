<template>
  <div class="terms-page">
    <!-- 页面头部 -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          服务条款
        </h1>
        <p class="hero-description">
          使用我们的服务前，请仔细阅读并同意以下条款
        </p>
      </div>
    </section>

    <!-- 服务条款内容 -->
    <section class="content-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="notice-box">
            <p class="notice-date">最后更新：2024年12月27日</p>
            <p class="notice-text">本服务条款构成您与我们之间具有法律约束力的协议。</p>
          </div>

          <div
            v-for="section in termsSections"
            :key="section.id"
            class="terms-section"
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
  title: '服务条款 - 开源官网',
  description: '了解我们的服务条款，使用我们的服务前请仔细阅读相关条款和条件。',
  ogTitle: '服务条款 - 开源官网',
  ogDescription: '了解我们的服务条款，使用我们的服务前请仔细阅读相关条款和条件',
})

// 服务条款内容
const termsSections = [
  {
    id: 1,
    title: '1. 接受条款',
    content: [
      '通过访问和使用我们的网站和服务，您同意受本服务条款的约束。',
      '如果您不同意这些条款，请不要使用我们的服务。',
      '我们有权随时修改这些条款，修改后的条款将在网站上公布后生效。',
      '您继续使用服务将被视为接受修改后的条款。'
    ]
  },
  {
    id: 2,
    title: '2. 服务描述',
    content: [
      '我们提供网站建设相关的产品和服务，包括但不限于：',
      '• 网站模板和主题',
      '• UI组件和插件',
      '• 技术支持和咨询服务',
      '• 其他相关的数字产品和服务',
      '我们保留随时修改、暂停或终止任何服务的权利。'
    ]
  },
  {
    id: 3,
    title: '3. 用户责任',
    content: [
      '作为我们服务的用户，您同意：',
      '• 提供准确、完整的注册信息',
      '• 保护您的账户安全，不与他人共享登录凭据',
      '• 不从事任何违法、有害或滥用的活动',
      '• 不侵犯他人的知识产权或其他权利',
      '• 遵守所有适用的法律法规',
      '违反这些责任可能导致您的账户被暂停或终止。'
    ]
  },
  {
    id: 4,
    title: '4. 知识产权',
    content: [
      '我们的服务包含受知识产权法保护的内容：',
      '• 所有网站内容、设计、代码均为我们的财产',
      '• 用户生成的内容仍归用户所有，但您授予我们使用许可',
      '• 禁止未经授权复制、分发或修改我们的内容',
      '• 我们尊重他人的知识产权，也要求用户同样如此',
      '如发现侵权行为，请及时通知我们。'
    ]
  },
  {
    id: 5,
    title: '5. 付费服务',
    content: [
      '对于付费服务，以下条款适用：',
      '• 所有价格均以人民币计价，可能随时调整',
      '• 付款通过安全的第三方支付平台处理',
      '• 除法律另有规定外，所有销售均为最终销售',
      '• 我们提供有限的退款政策，具体条件请查看退款政策',
      '• 未付费用户可能无法访问某些高级功能'
    ]
  },
  {
    id: 6,
    title: '6. 免责声明',
    content: [
      '我们的服务按"现状"提供，我们不提供任何明示或暗示的保证：',
      '• 不保证服务的不间断性或无错误性',
      '• 不保证通过服务获得的结果的准确性或可靠性',
      '• 不对因使用或无法使用服务而造成的损害承担责任',
      '• 不对第三方内容或服务承担责任',
      '在法律允许的最大范围内，我们排除所有责任。'
    ]
  },
  {
    id: 7,
    title: '7. 责任限制',
    content: [
      '在任何情况下，我们的责任均不超过：',
      '• 您在过去12个月内向我们支付的费用总额',
      '• 对于免费用户，责任限制为100元人民币',
      '我们不对以下损害承担责任：',
      '• 间接损害、后果性损害或惩罚性损害',
      '• 利润损失、数据丢失或业务中断',
      '某些司法管辖区不允许限制责任，因此上述限制可能不适用于您。'
    ]
  },
  {
    id: 8,
    title: '8. 争议解决',
    content: [
      '与本服务条款相关的争议将按以下方式解决：',
      '• 首先通过友好协商解决',
      '• 如协商不成，提交有管辖权的人民法院解决',
      '• 适用中华人民共和国法律（不包括冲突法原则）',
      '• 如条款的任何部分被认定无效，其余部分仍然有效',
      '这些条款构成您与我们之间关于服务的完整协议。'
    ]
  }
]
</script>

<style scoped lang="scss">
.terms-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
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
  background-color: #fef3c7;
  border-radius: 0.5rem;
  border-left: 4px solid #f59e0b;
  
  .notice-date {
    color: #92400e;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .notice-text {
    color: #d97706;
  }
}

.terms-section {
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