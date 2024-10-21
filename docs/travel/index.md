---
layoutClass: nav-layout
outline: [2, 3, 4]
---

<script setup>
import NavLinks from './components/NavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 驴友攻略

<!-- ## 常用工具 -->

<NavLinks v-for="{title,items, icon, isShow} in NAV_DATA" :title='title' :icon='icon' :items="items" :isShow='isShow'/>
<div style='text-align: center; font-size: 26px;margin-top:40px;color: #1B9CFC;'>待更新，敬请期待。。。。</div>
