<template>
  <div class="container">
    <Head />
    <div class="content w1200 auto">
      <img src="../assets/image/listtlbg.png" alt="" />
      <el-tabs tab-position="left">
        <el-tab-pane
          v-for="(item, index) in contentArr"
          :key="index + item"
          :label="item.newsTitle"
        >
          <div>
            <div>
              <a class="right-title">简介内容</a>
            </div>
            <div class="content-right" v-html="item.newsContent"></div></div
        ></el-tab-pane>
      </el-tabs>
      <div style="clear: both"></div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Head from "./Head.vue";
import Bottom from "./Bottom.vue";
export default {
  components: {
    Head,
    Bottom,
  },
  data() {
    return {
      contentArr: this.$route.params.introduceArr,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/mechanism.scss";
</style>