import { createRouter, createWebHistory } from "vue-router";
// ①ルーティングの対象となるコンポーネントを追加
import About from "../components/About.vue"
import BlogsTop from "../components/BlogsTop.vue"
// import BlogsToplocal from "../components/BlogsToplocal.vue"
import Blog from "../components/Blog.vue"
// import Bloglocal from "../components/Bloglocal.vue"
import BlogsByTag from "../components/BlogsByTag.vue"
// import BlogsByTaglocal from "../components/BlogsByTaglocal.vue"
// import Blog from "../components/ignoreTailwind/Blog.vue"
// ② 1の追加コンポーネントを表示するためのルートを、配列変数routesに、オブジェクトとして入れていく。
const routes = [
  {
    path: "/",
    component: BlogsTop,
  },
  {
    path: "/blogs",
    component: BlogsTop,
  },
  // {
  //   path: "/local_blogs",
  //   component: BlogsToplocal,
  // },
  // {
  //   path: "/local_blogs_by_tag/:tag_name",
  //   component: BlogsByTaglocal,
  //   name:"local_blogs_by_tag"
  // },
  {
    path: "/blogs_by_tag/:tag_name",
    component: BlogsByTag,
    name:"blogs_by_tag"
  },
  // {
  //   path: "/show_blog/:filename/:content_type",
  //   children:[
  //     {
  //       path: 'content_type',
  //       component: Blog
  //     }
  //   ],
  //   name:"show_blog"
  // },
  {
    path: "/show_blog/:filename/:contenttype",
    component: Blog,
    name:"show_blog"
  },
  // {
  //   path: "/local_show_blog/:filename",
  //   component: Bloglocal,
  //   name:"local_show_blog"
  // },
  {
    path: "/about",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;