/**
 *后端接口api
 * */

import Vue from 'vue';

const API = {
  // 查询文章列表
  newsQuery: "/tobacco-safe/portals/newsSet/page",
  // 查询轮播
  carouselQuery: "/tobacco-safe/portals/groupData/page",
  
};

Vue.prototype.$API = API;