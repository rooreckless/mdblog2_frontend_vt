<script setup>
import {ref,onMounted,watch} from "vue"

import {useBackend} from '../js/useBackend.js'
import {useUtil} from "../js/useUtil.js"

const {get_articles_by_tag} =useBackend()
const {create_dom_for_blogsvue} = useUtil()

// show_blogの後に入れられた文字を取得するには、vue-routerのuseRoute()を使えるようにしておく必要がある。
import { useRoute } from 'vue-router'
const route = useRoute()

// // 追加コンポーネントのインポート(いらない)
// import Tags from './Tags.vue'


const search_tag_name=ref('') // 検索されたタグ名
const AllArticlesRef =ref([]) // 検索結果のデータ全体

// 初めてこのvueが読み込まれたとき=DOMが読み込まれた時点で、記事の一覧を取得
onMounted(async ()=>{
  search_tag_name.value = route.params.tag_name
  AllArticlesRef.value = create_dom_for_blogsvue(
    await get_articles_by_tag(search_tag_name.value)
  )
})

// この画面で再度タグがクリックされたときの処理
const handleTagClick = (event) => {
  const clickedText = event.target.innerText;
  // search_tag_nameの値を変更
  search_tag_name.value = clickedText;
};

// search_tag_nameの変更を監視
watch(search_tag_name, async(newValue, oldValue) => {
  if (newValue !== oldValue) {
    // search_tag_nameが変更されたら「タグの記事一覧を取得」を再実行
    AllArticlesRef.value = create_dom_for_blogsvue(
      await get_articles_by_tag(search_tag_name.value)
    )
  }
});




// 引数のファイル名から画像ファイルへのパスをかえす
const getImagePath=((ImgFileName)=>{
  // 画像ファイルはpublicディレクトリにあることを前提とする
  return `/${ImgFileName}`
  
});

</script>

<template>
  <!-- この画面を描画するときのタイトル -->
  <h1>「{{AllArticlesRef.search_tag_name}}」タグの記事一覧</h1>
  <p>総数 : {{ AllArticlesRef.count }}件</p>
  <div class="border-4 border-solid border-slate-500 m-4" v-for="article in AllArticlesRef.searched_contents">
    <!-- 各記事へのリンク先 と画像-->
    <RouterLink :to="{ name: 'show_blog', params: { filename: article.filename,contenttype: article.content_type } }" class="flex justify-start space-x-8 items-center">
      <img class="w-24 m-4 bg-slate-500" :src="getImagePath(article.img)">
      <div>
        <h3>{{ article.title }}</h3>
        <p v-html="article.summary"></p>
      </div>
      
    </RouterLink>
    <div class="flex justify-end space-x-8 mr-4">
      <!-- <Tags :tags="article.tags"></Tags> -->
      <div v-for="tag in article.tags">
        <span @click="handleTagClick" class="block border-4 border-sky-500 rounded-md bg-sky-300/30 hover:bg-sky-300 p-2">
          {{tag}}
        </span>
      </div>
    </div> 
  </div>
</template>

<style scoped>

</style>