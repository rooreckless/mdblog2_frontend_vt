<!-- 26_tailwind_vn_docker/vue/front_v_tail/src/components/HeaderTest01_tablernpm.vue -->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header class="text-gray-600 body-font">
    <!-- flex -->
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <!-- 左のアイコンとロゴ -->
      <RouterLink to="/blogs" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
      <!-- <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer" href="http://localhost:8880/blogs"> -->
        <!-- 自作アイコン -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
          <circle cx="12" cy="12" r="10" fill="none" stroke="black" stroke-width="2"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="black" text-anchor="middle" dy=".3em">r</text>
        </svg>
        <span class="ml-3 text-xl">roo's memosite</span>
      <!-- </a> -->
      </RouterLink>
      <!-- nav タブレット以上幅で左マージンauto -->
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <RouterLink to="/blogs" class="mr-5 hover:text-gray-900 hover:cursor-pointer">Blogs</RouterLink>
        <RouterLink to="/about" class="mr-5 hover:text-gray-900 hover:cursor-pointer">About</RouterLink>
        <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Contact(mock)</a>
      </nav>
      <!-- 最後のボタン -->
    </div>
</header>
</template>

<style scoped>

</style>
