<!-- 26_tailwind_vn_docker/vue/front_v_tail/src/components/FooterTest01_tablernpm.vue -->
<script setup>
import { ref } from 'vue'
// tabler.ioのアイコンから特定のアイコンだけインポート
import { IconBrandGithub,IconBrandX } from '@tabler/icons-vue';
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <!-- 左側のアイコンとロゴ -->
      <RouterLink to="/blogs" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <!-- <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> -->
        <!-- 自作アイコン -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
          <circle cx="12" cy="12" r="10" fill="none" stroke="black" stroke-width="2"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="black" text-anchor="middle" dy=".3em">r</text>
        </svg>
        <span class="ml-3 text-xl">roo's memosite</span>
      <!-- </a> -->
      </RouterLink>
      <!-- コピーライトと(スマホ以上幅で)左側ボーダー -->
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 roo_reckless</p>
      <!-- ここからはsnsアイコン スマホ以上幅で左側マージンがauto -->
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <!-- 1つめ -->
        <a class="text-gray-500 hover:text-gray-900" href="https://github.com/rooreckless/mdblog-flask">
          <IconBrandGithub class="w-5 h-5" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></IconBrandGithub>
        </a>
        <!-- 2つめ -->
        <a class="ml-3 text-gray-500">
          <IconBrandX class="w-5 h-5" viewBox="0 0 24 24" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></IconBrandX>
        </a>
      </span>
    </div>
  </footer>
</template>

<style scoped>

</style>
