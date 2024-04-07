<!-- 26_tailwind_vn_docker/vue/front_v_tail/src/App.vue -->
<script setup>
// Header、Footerのコンポーネントをインポート
import HeaderTest01 from './components/HeaderTest01_tablernpm.vue'
import FooterTest01 from './components/FooterTest01_tablernpm.vue'

// tabler.ioのアイコンから特定のアイコンだけインポート
import { IconBrandVue } from '@tabler/icons-vue';
</script>

<template>

<!-- Header -->
<HeaderTest01></HeaderTest01>

<main>
  <div class="container mx-auto border-2 border-red-500 h-max"> 
    <RouterView></RouterView>
  </div>
  
</main>

<!-- Footer -->
<FooterTest01></FooterTest01>


</template>
<style scoped>

</style>