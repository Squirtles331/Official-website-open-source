<template>
  <div class="layout">
    <!-- 导航栏 -->
    <AppHeader />
    
    <!-- 主要内容 -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- 底部 -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// 基础布局，包含通用的头部和底部组件
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style> 