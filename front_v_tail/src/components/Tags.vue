<script setup>
import {ref,onMounted} from "vue"


const props = defineProps({
  tags: {
    type :Array,
  }
})

const AllTagsRef =ref([])

onMounted(async ()=>{
  //親コンポーネント=Blogs.vueから渡された値(記事のid)を、DOMが読み込まれた時点で抽出する
  AllTagsRef.value = props.tags
  
})
</script>

<template>
  <div class="flex space-x-4 mr-4">
    <!-- <p>タグの件数={{ AllTagsRef.count }}</p> -->
    <div v-for="tag in AllTagsRef">
      <!-- tagボタンのspanバージョン 成功 -->
      <!-- <span @click="local_get_articles_by_tag(tag)" class="inline-block border-4 border-sky-500 rounded-md bg-sky-300/30 hover:bg-sky-300 p-2">{{ tag }}</span> -->
      <RouterLink :to="{ name: 'blogs_by_tag', params: { tag_name: tag } }" class="block border-4 border-sky-500 rounded-md bg-sky-300/30 hover:bg-sky-300 p-2">{{ tag }} </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>