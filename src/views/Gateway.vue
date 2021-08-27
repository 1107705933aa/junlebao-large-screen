<template>
  <div class="content">
    <el-backtop target=".content .backtop"></el-backtop>
    <div class="backtop" id="gateway-container">
      <Head :introduceArr="introduceArr" />
      <!-- 中部 -->
      <div class="bodybg">
        <div class="inContent w1200 auto pdlr20">
          <!-- 头条 -->
          <div class="intopNews">
            <div class="fl inTopNewsTit">
              <a>头条</a>
            </div>
            <dl class="fr inTopNewsRight">
              <dt>
                <a>习近平向巴基斯坦世界环境日主题活动致贺信</a>
              </dt>
              <dd>
                新华社北京6月5日电
                6月5日，国家主席习近平致信祝贺世界环境日主题活动在巴基斯坦伊斯兰堡举办。
                <a class="more">[更多]</a>
              </dd>

              <div class="inTopImg">
                <a
                  >国家局党组召开党组（扩大）会议
                  传达学习中共中央政治局会议精神和习近平总书记在中共中央政治局第二十九次集体学习时的重要讲话精神</a
                >
              </div>
            </dl>
            <div class="cl"></div>
          </div>
          <!-- 轮播行 -->
          <div class="inBlock1">
            <div class="fl inJdt">
              <div class="focusBox">
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item
                    v-for="(item, index) in carouselArr"
                    :key="item + index"
                  >
                    <img :src="item.imgUrl" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="fr inYwGwyNews">
              <div class="slideTxtBox">
                <div class="hd">
                  <ul class="flexcenter">
                    <li class="on lione">
                      <a>行业动态</a>
                    </li>
                    <li class="litwo disnone">
                      <a>时政要闻</a>
                    </li>
                  </ul>
                </div>
                <div class="bd">
                  <ul class="inTyList tabtwo" id="govnews">
                    <li
                      @click="jump(item)"
                      v-for="(item, index) in industryArr"
                      :key="index + item"
                    >
                      <a>{{ item.newsTitle }}</a
                      ><span class="date">{{ item.updateTime }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="cl"></div>
          </div>
          <!-- 标签行 -->
          <div class="inYcxw"></div>
          <!-- 内容 -->
          <div class="inBlock1-1">
            <!-- 科技纵览 -->
            <div class="w383 fl">
              <div class="lmtit">科技纵览<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in scienceArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <!-- 质检资讯 -->
            <div class="w383 fl ml25">
              <div class="lmtit">质检资讯<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in qualityArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <!-- 机构动念 -->
            <div class="w383 fr">
              <div class="lmtit">机构动念<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in mechanismArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <img
              class="intervalpic"
              src="../assets/image/intervalpic.jpg"
              alt=""
            />
            <!-- 办事服务 -->
            <div class="w383 fl mt15">
              <div class="lmtit">办事服务<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in workArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <!-- 公益事业 -->
            <div class="w383 fl ml25 mt15">
              <div class="lmtit">公益事业<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in publicArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <!-- 信息发布 -->
            <div class="w383 fr mt15">
              <div class="lmtit">信息发布<a>更多</a></div>
              <ul class="inTyList">
                <li
                  @click="jump(item)"
                  v-for="(item, index) in inforArr"
                  :key="index + item"
                >
                  <a>{{ item.newsTitle }}</a
                  ><span class="date">{{ item.updateTime }}</span>
                </li>
              </ul>
            </div>
            <div class="cl"></div>
          </div>
          <!-- 外网 -->
          <div class="inXglj">
            <ul>
              <li>
                <a href="http://www.gov.cn" target="_blank"
                  ><img src="../assets/image/extranet1.jpeg" />
                </a>
              </li>
              <li>
                <a href="http://www.miit.gov.cn/" target="_blank"
                  ><img src="../assets/image/extranet2.jpeg" />
                </a>
              </li>
              <li>
                <a href="http://www.xinhuanet.com/" target="_blank"
                  ><img src="../assets/image/extranet3.jpg" />
                </a>
              </li>
              <li>
                <a href="http://www.people.com.cn/" target="_blank"
                  ><img src="../assets/image/extranet4.jpg" />
                </a>
              </li>
              <li>
                <a href="http://www.qstheory.cn/" target="_blank"
                  ><img src="../assets/image/extranet5.jpeg" />
                </a>
              </li>
            </ul>
          </div>
          <div class="cl"></div>
        </div>
      </div>
      <Bottom />
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
import Bottom from "./Bottom.vue";
export default {
  name: "Gateway",
  components: {
    Head,
    Bottom,
  },
  data() {
    return {
      carouselArr: [
        // { imgUrl: require("../assets/image/carousel1.jpg") },
        // { imgUrl: require("../assets/image/carousel2.jpg") },
        // { imgUrl: require("../assets/image/carousel3.jpg") },
        // { imgUrl: require("../assets/image/carousel4.jpg") },
        // { imgUrl: require("../assets/image/carousel5.jpg") },
        // { imgUrl: require("../assets/image/carousel6.jpg") },
        // { imgUrl: require("../assets/image/carousel7.jpg") },
      ],
      industryArr: [],
      scienceArr: [],
      qualityArr: [],
      mechanismArr: [],
      workArr: [],
      publicArr: [],
      inforArr: [],
      introduceArr: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const self = this;
      self.axios.get(self.$API.newsQuery).then(({ data }) => {
        data.rows.map((item) => {
          switch (item.newsType) {
            case "industry_status":
              item.name = "行业动态";
              self.industryArr.push(item);
              break;
            case "technology_view":
              item.name = "科技纵览";
              self.scienceArr.push(item);
              break;
            case "quality_control_news":
              item.name = "质检资讯";
              self.qualityArr.push(item);
              break;
            case "org_condition_state":
              item.name = "机构动态";
              self.mechanismArr.push(item);
              break;
            case "provide_service":
              item.name = "办事服务";
              self.workArr.push(item);
              break;
            case "public_welfare":
              item.name = "公益事业";
              self.publicArr.push(item);
              break;
            case "news_publish":
              item.name = "信息发布";
              self.inforArr.push(item);
              break;
            case "org_introduce":
              item.name = "机构简介";
              self.introduceArr.push(item);
              break;
            default:
              "";
          }
        });
      });

      self.axios.get(self.$API.carouselQuery).then(({ data }) => {
        data.rows.forEach((item) => {
          item.map.imageUrl =
            process.env.VUE_APP_URL +
            item.map.imageUrl.substring(1, item.map.imageUrl.length);
          this.carouselArr.push({ imgUrl: item.map.imageUrl });
        });
      });
    },
    jump(item) {
      this.$router.push({
        name: "NewsDetail",
        params: { sendData: item },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/gateway.scss";
</style>
