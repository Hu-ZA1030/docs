<script setup lang="ts">
import { inject, Ref } from 'vue'
import { useRoute } from 'vitepress'

const DEV = inject('DEV') as Ref<boolean>
const route = useRoute()
</script>

<template>
  <div class="copyright">
    <img
      v-if="!DEV"
      class="visitor"
      :src="`https://visitor-badge.laobi.icu/badge?page_id=lining.notes.${route.path}`"
      title="当前页面累计访问数"
      onerror="this.style.display='none'"
    />
    Copyright © 2024-present xiaosu
  </div>
</template>

<style scoped>
.copyright {
  margin-top: 24px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.visitor {
  margin-right: 8px;
}

@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
