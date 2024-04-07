<script setup>
import {ref,onMounted,onUpdated, nextTick } from "vue"

import {useBackend} from '../js/useBackend.js'
import {useUtil} from "../js/useUtil.js"
const {get_article} =useBackend()
const {create_dom_for_showblogvue} = useUtil()

// 追加コンポーネントのインポート
import Tags from './Tags.vue'

// show_blogの後に入れられた文字を取得するには、vue-routerのuseRoute()を使えるようにしておく必要がある。
import { useRoute } from 'vue-router'
const route = useRoute()

const AllArticlesRef =ref('')
let returnvalue

const generateDynamicHtml = () => {
  // 動的にHTMLを生成する処理（例えば、APIからデータを取得してHTMLを生成するなど）
  // ここでは仮にHTML文字列を直接設定していますが、実際のアプリケーションでは適切な方法でHTMLを生成してください
  // const generatedHtml = "<p>ここに数式を記述します: $$\\mu = \\frac{1}{N}\\sum^{N}_{i=1}x_i$$</p><p>別の数式: $E=mc^2$</p>";

  // MathJaxを再度初期化して数式を描画
  MathJax.typesetPromise().then(() => {
    AllArticlesRef.value = AllArticlesRef.value;
  });
};

// DOMが読み込まれた時点で、記事の一覧を取得
onMounted(async ()=>{
  // jsで全記事表示用にdbから取得しref変数にいれる
  
  AllArticlesRef.value = create_dom_for_showblogvue(
    await get_article(route.params.filename,route.params.contenttype)
  )
  
  // 表示するhtml中から数式部分をMathJaxでレンダリングする
  nextTick(() => {
    generateDynamicHtml();
  });
})






</script>

<template>
  <div v-html="AllArticlesRef" class="md_content"></div>
  <!-- <h1>Blog一画面</h1> -->
  <!-- {{ AllArticlesRef }} -->
  
</template>

<style>
  .md_content p > code,
  .md_content li > code,
  .md_content div > code,
  .md_content details > code,
  .md_content td > code,
  .md_content th > code,
  .md_content section > code
  {
    color:#888800;
  }
  
  .md_content a
  {
    color:#5555ff;
  }
  .md_content a:hover{
    color: #ff2288;
  }

  .md_content .codehilitetable .code > div code{
    color: rgb(248,248,242)
  }

  .md_content pre {
    line-height: 1.02rem;
  }
  .md_content .codehilite,
  .md_content img{
    overflow: auto;
    border: 2px solid #ffffff;
  }
  .md_content img{
    cursor:pointer;
  }
  .md_content img:active{
    width:100%;
  }
  .md_content > h1,
  .md_content > h2,
  .md_content > h3,
  .md_content > h4,
  .md_content > h5,
  .md_content > h6{
    /* position: sticky; */
    /* background-color: #181a1b; */
    /* top: 0px; */
    color:#444444;
    border-bottom : 3px solid #444444;
    font-weight: 800;
    /* height: 3rem; */
  }
  .md_content table{
    border-top:1px solid white;
    border-left:1px solid white;
    border-right:1px solid white;
  }

  .md_content th,
  .md_content tr,
  .md_content td{
    border-bottom:1px solid white;
  }
  .md_content pre {
    border:2px solid #444444;
  }

  .hl-ipython3 pre{
    overflow: scroll;
  }
  
</style>