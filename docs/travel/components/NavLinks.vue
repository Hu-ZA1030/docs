<template>
  <div>
    <h2 class="title" v-if="title" :id="formatTitle" tabindex="-1">
      <img v-if="icon" :src="icon" alt="" srcset="" />
      <span>{{ title }}</span>
    </h2>
    <!-- <div class="showBtn" @click="showHandel()">{{isShowBtn?'收起':'展开'}}</div>{{isShowBtn}} -->
  </div>

  <div class="m-nav-links" v-if="isShowBtn">
    <NavLink
      v-for="{ icon, title, desc, link, isTrip } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
      :isTrip="isTrip"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted } from 'vue'
import { slugify } from '@mdit-vue/shared'
import NavLink from './NavLink.vue'
import type { NavType } from './type'
const props = defineProps<{
  title: string
  icon: String
  isShow: Boolean,
  items: NavType[]
}>()
const formatTitle = computed(() => {
  return slugify(props.title)
})
onMounted(()=>{
  console.log('props', props)
})
let isShowBtn = ref(props.isShow)
const showHandel = function(){
  console.log('isShow', props.isShow)
  isShowBtn = !isShowBtn
  console.log('isShowBtn', isShowBtn)
}
</script>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
}
.showBtn{
  cursor: pointer;
}
@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}
@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
