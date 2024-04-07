<script setup>
import {ref,onMounted,onUpdated} from "vue"

import {useBackend} from '../js/useBackend.js'
import {useUtil} from "../js/useUtil.js"
// const {get_allarticles} =useBackend()
const {get_blogstop} =useBackend()
const {create_dom_for_blogsvue} = useUtil()

// 追加コンポーネントのインポート
import Tags from './Tags.vue'



const AllArticlesRef =ref([])
let returnvalue
// DOMが読み込まれた時点で、記事の一覧を取得
onMounted(async ()=>{
  // jsで全記事表示用にdbから取得しref変数にいれる
  AllArticlesRef.value = create_dom_for_blogsvue(
    await get_blogstop()
  )
})

// 引数のファイル名から画像ファイルへのパスをかえす
const getImagePath=((ImgFileName)=>{
  // 画像ファイルはpublicディレクトリにあることを前提とする
  return `/${ImgFileName}`
  
});

</script>

<template>
  <!-- この画面を描画するときのタイトル -->
  <h1>Blogs : {{AllArticlesRef.top_title}}</h1>
  <p>総数 : {{ AllArticlesRef.count }}件</p>
  <!-- <pre>{{ AllArticlesRef }}</pre> -->
  <div class="border-4 border-solid border-slate-500 m-4" v-for="article in AllArticlesRef.md_contents">
    
    <!-- 各記事へのリンク先 と画像-->
    <RouterLink :to="{ name: 'show_blog', params: { filename: article.filename,contenttype: article.content_type} }" class="flex justify-start space-x-8 items-center">
      <img class="w-24 m-4 bg-slate-500" :src="getImagePath(article.img)">
      <div>
        <h3>{{ article.title }}</h3>
        <p v-html="article.summary"></p>
      </div>
      
    </RouterLink>
    <div class="flex justify-end">
      <Tags :tags="article.tags"></Tags>
    </div> 
  </div>
</template>

<style scoped>

</style>