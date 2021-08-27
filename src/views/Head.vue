<template>
  <div>
    <!-- 顶部 -->
    <div class="inTop">
      <div class="intopbg"></div>
      <div class="w1200 auto">
        <div class="inTopHead">
          <div class="guohui"><img src="../assets/image/guohui.png" /></div>
        </div>
        <div class="inTopBot">
          <div class="fl inLogo">
            <a><img src="../assets/image/inlogo.png" /></a>
            <img class="intopby" src="../assets/image/intopby.png" />
          </div>
          <div class="fl inLiyi">国家利益至上<br />  消费者利益至上</div>
          <div class="fr inSearch">
            <div class="inSearchForm">
              <form
                action="/so/s"
                method="get"
                name="form1"
                target="_blank"
                id="form1"
              >
                <input
                  name="siteCode"
                  type="hidden"
                  id="siteCode"
                  value="bm64000012"
                />
                <input
                  id="qt1"
                  name="qt"
                  value="请输入关键字"
                  type="text"
                  class="input_1"
                  autocomplete="off"
                  onfocus="if(this.value==this.defaultValue)this.value=''"
                  onblur="if(this.value.replace(/ /ig,'')=='')this.value=this.defaultValue"
                />
                <input type="submit" id="btn1" class="button_1" value="" />
              </form>
            </div>
            <div class="inHotSearch">
              热搜词：
              <a>专卖</a>
              <a>许可</a>
              <a>卷烟</a>
              <a>烟叶</a>
              <a>招聘</a>
            </div>
            <div class="inTopTishi">本网站含有烟草内容 谢绝未成年人访问!</div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="inNavs bg015293">
      <div class="w1200 auto">
        <ul>
          <li class="sy">
            <a
              class="menu"
              @click="
                () => {
                  $router.push({
                    name: 'Mechanism',
                    params: { introduceArr: introduceArr },
                  });
                }
              "
              >机构简介</a
            >
            <div class="navZlist">
              <div class="w1200 auto">
                <div class="fl syLdxx">
                  <h3>
                    <a> 领导信息 </a>
                  </h3>
                  <ul style="background: #fff">
                    <li>
                      <a>
                        <span>张建民</span>
                        工业和信息化部党组成员，国家烟草专卖局局长、党组书记，中国烟草总公司总经理
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>徐　莹</span>
                        国家烟草专卖局党组成员、副局长
                      </a>
                    </li>
                    <li>
                      <a> <span>段铁力</span>国家烟草专卖局党组成员、副局长 </a>
                    </li>
                    <li>
                      <a> <span>张天峰</span>国家烟草专卖局党组成员、副局长 </a>
                    </li>
                    <li>
                      <a> <span>韩占武</span>国家烟草专卖局党组成员、副局长 </a>
                    </li>
                  </ul>
                </div>
                <div class="fr syJggk">
                  <h3>
                    <a> 概况信息 </a>
                  </h3>
                  <dl>
                    <dt class="fl">
                      <a>
                        <img
                          src="../assets/image/7536ff58c14d4efb9ae355914c1113e7.jpg"
                        />
                      </a>
                    </dt>
                    <dd class="fr">
                      <a
                        >中国烟草行业实行统一领导、垂直管理、专卖专营的管理体制。国家烟草专卖局、中国烟草总公司对全国烟草行业“人、财、物、产、供、销、内、外、贸”进行集中统一管理。</a
                      >
                    </dd>
                    <div class="cl"></div>
                  </dl>
                </div>
                <div class="cl"></div>
              </div>
            </div>
          </li>
          <li>
            <a class="menu">科技纵览</a>
            <ul v-if="false">
              <li>
                <a>烟草新闻</a>
              </li>
              <li>
                <a>扶贫工作</a>
              </li>
              <li>
                <a>专卖管理</a>
              </li>
              <li>
                <a>数字化转型</a>
              </li>
              <li>
                <a>人事与培训</a>
              </li>
              <li>
                <a>统计信息</a>
              </li>
              <li>
                <a>互联网+政务服务</a>
              </li>
              <li>
                <a>采购信息</a>
              </li>
              <li>
                <a>计划规划</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="menu">质检资讯</a>
            <ul v-if="false">
              <li>
                <a>行政许可</a>
              </li>
              <li>
                <a>监管信息</a>
              </li>
              <li>
                <a>政策文件</a>
              </li>
              <li>
                <a>政策解读</a>
              </li>
              <li>
                <a>监督检查</a>
              </li>
              <li>
                <a>应急预案</a>
              </li>
              <li>
                <a>建议、提案答复</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="menu">机构动态</a>
            <ul v-if="false">
              <li>
                <a>我要办</a>
              </li>
              <li>
                <a>我要查</a>
              </li>
              <li>
                <a>我要看</a>
              </li>
              <li>
                <a>我要问</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="menu">办事服务</a>
            <ul v-if="false">
              <li>
                <a>热点问答</a>
              </li>
              <li>
                <a>我要留言 </a>
              </li>
              <li>
                <a>留言统计</a>
              </li>
              <li>
                <a>在线访谈</a>
              </li>
              <li>
                <a>留言列表 </a>
              </li>
              <li>
                <a>网上调查 </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="menu">公益事业</a>
          </li>
          <li>
            <a class="menu">信息发布 </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['introduceArr'],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
// 顶部
.inTop {
  background: #fff;
  .intopbg {
    background: #015293;
    height: 48px;
  }

  .inTopHead {
    color: #8a8a8a;
    font-size: 14px;
    .guohui {
      text-align: center;
      margin-top: -32px;
      background: url(../assets/image/inguohuibg.png) no-repeat center 66px;
    }
  }
  .inTopBot {
    padding: 12px 0;
    .inLogo {
      margin: 14px 0 20px;
      .intopby {
        margin-left: 30px;
        display: none;
      }
    }
    .inLiyi {
      background: url(../assets/image/top_lybg.jpg) no-repeat;
      width: 248px;
      height: 68px;
      margin-left: 80px;
      margin-top: 12px;
      font-size: 24px;
      color: #fff;
      line-height: 30px;
      padding-left: 20px;
      padding-top: 8px;
      font-family: "黑体";
    }
    .inSearch {
      width: 304px;
      margin: 12px 0 0;
      .inSearchForm {
        border: 1px solid #d9d9d9;
        height: 33px;
        line-height: 33px;
        border-radius: 38px;
        .input_1 {
          width: 258px;
          font-size: 14px;
          color: #8a8a8a;
          text-indent: 15px;
          outline: none;
          height: 33px;
          padding: 0;
          border: 0;
          background: none;
          float: left;
        }
        .button_1 {
          background: url(../assets/image/serchico.png) no-repeat center;
          padding: 0;
          border: 0;
          width: 33px;
          height: 33px;
          float: right;
          cursor: pointer;
        }
      }
      .inHotSearch {
        color: #8a8a8a;
        font-size: 14px;
        margin-top: 5px;
        a {
          color: #8a8a8a;
          font-size: 14px;
          padding: 0 4px 0 0;
        }
      }
      .inTopTishi {
        font-size: 14px;
        color: #8a8a8a;
        text-indent: 1em;
      }
    }
  }
}
// 菜单
.inNavs {
  position: relative;
  li:hover .menu {
    cursor: pointer;
    background: #0f73c4;
  }
  li {
    ul {
      position: absolute;
      z-index: 100;
      display: none;
      padding: 5px 0;
      background: rgba(236, 246, 255, 0.9);
      li {
        height: 34px;
        line-height: 34px;
        background: none;
        display: block;
        cursor: pointer;
        a {
          color: #333;
          font-size: 18px;
          font-weight: normal;
        }
      }
    }
  }
  li > ul li:hover a {
    color: #0f73c4;
  }

  li:hover .navZlist {
    display: block;
  }

  li:hover ul {
    display: block;
  }
  .sy {
    width: 189px;
    background: none;
    padding: 0px;
  }
  li {
    display: inline-block;
    width: 164px;
    background: url(../assets/image/navline.jpg) no-repeat left center;
    text-align: center;
    height: 56px;
    line-height: 56px;

    a {
      color: #fff;
      font-size: 22px;
      display: block;
      font-weight: bold;
    }

    .navZlist {
      position: absolute;
      left: 0;
      top: 56px;
      width: 100%;
      background: #fff;
      display: none;
      z-index: 4;
      text-align: left;
      .syLdxx {
        width: 56%;
        margin: 20px 0;
        border-right: 1px solid #d9d9d9;
        h3 a {
          color: #015293;
          border-bottom: 1px solid #015293;
          display: inline-block;
          font-weight: normal;
          background: none;
        }
      }
      .syJggk {
        width: 43%;
        margin: 20px 0;
        margin: 20px 0;
        h3 a {
          color: #015293;
          border-bottom: 1px solid #015293;
          display: inline-block;
          font-weight: normal;
          background: none;
        }
        dl {
          padding-top: 14px;
          a {
            background: none;
            padding: 0;
            color: #333;
            font-size: 16px;
            font-weight: normal;
          }
          dt {
            width: 176px;
            margin-top: 6px;
            img {
              width: 100%;
            }
          }
          dd {
            width: 330px;
            line-height: 32px;
            height: auto;
            text-align: justify;
          }
        }
      }

      li {
        background: none;
        width: 100%;
        height: 32px;
        line-height: 32px;
        text-align: left;
        display: block;
        a {
          background: none;
          color: #333;
          font-weight: normal;
          font-size: 16px;
        }
      }
    }
  }
}
</style>