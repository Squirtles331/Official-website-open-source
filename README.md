# 开源官网项目

## 🌐 在线预览

[https://official-website-open-source-ks6h.vercel.app/](https://official-website-open-source-ks6h.vercel.app/)

## 📖 项目介绍

这是一个基于 **Nuxt.js 3** 和 **Vue.js 3** 的现代化开源官网解决方案。项目采用最新的前端技术栈，提供完整的企业官网功能，包括响应式设计、SEO优化、深色模式等特性。

### ✨ 主要特性

- 🚀 **现代化技术栈**: Nuxt.js 3 + Vue.js 3 + TypeScript
- 🎨 **美观的设计**: 基于 Headless UI 和 Heroicons 的现代化组件
- 📱 **响应式布局**: 完美适配桌面端、平板和移动设备
- 🌙 **深色模式**: 内置深色/浅色主题切换
- 🔍 **SEO 优化**: 完整的 SEO 配置和优化
- ⚡ **性能优异**: 优化的加载速度和用户体验
- 🛠️ **易于定制**: 组件化架构，便于扩展和定制
- 📊 **状态管理**: 集成 Pinia 进行状态管理
- 🎭 **图标库**: 使用 Lucide 和 Heroicons 图标库

### 🎯 适用场景

- 企业官网
- 产品展示网站
- 个人品牌网站
- 初创公司官网
- 开源项目主页

## 🛠️ 技术栈

### 前端框架
- **Nuxt.js 3**: 基于 Vue.js 的全栈框架
- **Vue.js 3**: 渐进式 JavaScript 框架
- **TypeScript**: 类型安全的 JavaScript

### UI 组件和样式
- **@headlessui/vue**: 无样式的可访问性组件库
- **@heroicons/vue**: 精美的 SVG 图标库
- **lucide-vue-next**: 现代化的图标库
- **Sass**: CSS 预处理器

### 功能特性
- **@nuxtjs/seo**: SEO 优化和元数据管理
- **@nuxtjs/google-fonts**: Google 字体集成
- **@vueuse/nuxt**: Vue 组合式函数库
- **@pinia/nuxt**: 状态管理
- **swiper**: 轮播图组件

### 开发工具
- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **TypeScript**: 类型检查
- **pnpm**: 高效的包管理器

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装步骤

1. **安装依赖**
```bash
pnpm install
```

2. **启动开发服务器**
```bash
pnpm dev
```

3. **构建生产版本**
```bash
pnpm build
```

4. **预览生产版本**
```bash
pnpm preview
```

5. **生成静态站点**
```bash
pnpm generate
```

### 开发命令

```bash
# 代码质量检查
pnpm lint

# 自动修复代码问题
pnpm lint:fix

# 代码格式化
pnpm format

# 检查代码格式
pnpm format:check

# 类型检查
pnpm type-check
```

## 📁 项目结构

```
官网/
├── app.vue                 # 应用根组件
├── assets/                 # 静态资源
│   └── css/
│       └── main.scss      # 全局样式文件
├── components/             # Vue 组件
│   ├── AppHeader.vue      # 头部导航组件
│   └── AppFooter.vue      # 底部组件
├── images/                 # 图片资源
├── layouts/                # 布局模板
│   └── default.vue        # 默认布局
├── middleware/             # 中间件
├── pages/                  # 页面文件
│   ├── index.vue          # 首页
│   ├── about.vue          # 关于我们
│   ├── careers.vue        # 招聘信息
│   ├── components.vue     # 组件展示
│   ├── contact.vue        # 联系我们
│   ├── cookies.vue        # Cookie 政策
│   ├── investors.vue      # 投资者信息
│   ├── news/              # 新闻资讯
│   │   ├── index.vue      # 新闻列表
│   │   └── [id].vue       # 新闻详情
│   ├── plugins.vue        # 插件展示
│   ├── privacy.vue        # 隐私政策
│   ├── products.vue       # 产品展示
│   ├── team.vue           # 团队介绍
│   ├── templates.vue      # 模板展示
│   ├── terms.vue          # 服务条款
│   └── themes.vue         # 主题展示
├── plugins/                # 插件目录
├── public/                 # 公共静态文件
│   └── images/
├── stores/                 # Pinia 状态管理
├── types/                  # TypeScript 类型定义
├── nuxt.config.ts         # Nuxt 配置文件
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
├── 需求文档.md            # 项目需求文档
└── README.md              # 项目说明文档
```

## 🎨 自定义配置

### 字体配置

Google Fonts 配置：

```typescript
googleFonts: {
  families: {
    'Inter': [400, 500, 600, 700],
    'Noto Sans SC': [400, 500, 600, 700]
  }
}
```

### SEO 配置

在页面组件中使用 `useSeoMeta` 配置 SEO：

```vue
<script setup>
useSeoMeta({
  title: '页面标题',
  description: '页面描述',
  ogTitle: 'Open Graph 标题',
  ogDescription: 'Open Graph 描述',
})
</script>
```

### 运行时配置

在 `nuxt.config.ts` 中配置环境变量：

```typescript
runtimeConfig: {
  // 服务端私有配置
  apiSecret: '',
  
  // 客户端公共配置
  public: {
    apiBase: '/api',
    siteUrl: 'https://your-domain.com'
  }
}
```

## 📝 页面功能

### 🏠 首页 (/)
- Hero 展示区域
- 特性介绍模块
- 产品/服务展示
- 客户案例推荐
- 最新动态资讯

### 👥 关于我们 (/about)
- 公司介绍
- 发展历程
- 团队展示
- 企业价值观

### 🛍️ 产品页面 (/products)
- 产品展示
- 功能特性
- 使用案例
- 技术规格

### 📰 新闻资讯 (/news)
- 新闻列表
- 新闻详情
- 分类筛选
- 搜索功能

### 👥 团队介绍 (/team)
- 团队成员
- 职位介绍
- 个人简介
- 联系方式

### 💼 招聘信息 (/careers)
- 职位列表
- 职位描述
- 申请流程
- 公司福利

### 📞 联系我们 (/contact)
- 联系表单
- 联系信息
- 地理位置
- 社交媒体

### 🎨 其他页面
- 组件展示 (/components)
- 插件展示 (/plugins)
- 模板展示 (/templates)
- 主题展示 (/themes)
- 投资者信息 (/investors)
- 隐私政策 (/privacy)
- 服务条款 (/terms)
- Cookie 政策 (/cookies)

## 🚀 部署

### Vercel 部署

1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署完成

### Netlify 部署

1. 连接 GitHub 仓库
2. 设置构建命令: `pnpm build`
3. 设置发布目录: `.output/public`
4. 部署完成

### 静态站点部署

```bash
# 生成静态站点
pnpm generate

# 部署 .output/public 目录到任何静态托管服务
```

### 服务器部署

```bash
# 构建应用
pnpm build

# 启动生产服务器
node .output/server/index.mjs
```

## 🔧 开发指南

### 添加新页面

1. 在 `pages/` 目录下创建 Vue 文件
2. 使用 `useSeoMeta` 配置 SEO
3. 遵循组件化开发原则

### 创建组件

1. 在 `components/` 目录下创建组件
2. 使用 TypeScript 进行类型定义
3. 遵循 Vue 3 Composition API

### 状态管理

使用 Pinia 进行状态管理：

```typescript
// stores/example.ts
export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 🆘 常见问题

### Q: 如何更改主题颜色？
A: 修改 `assets/css/main.scss` 文件中的 CSS 变量。

### Q: 如何添加新的语言支持？
A: 项目目前为单语言版本，如需多语言支持，可以集成 `@nuxtjs/i18n` 模块。

### Q: 如何优化性能？
A: 项目已经内置了性能优化，包括图片懒加载、代码分割、SEO 优化等。

### Q: 如何自定义组件样式？
A: 使用 Sass 变量和 CSS 类进行样式定制，遵循 BEM 命名规范。

---

**⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！** 