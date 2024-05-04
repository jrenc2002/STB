<template>
    <div class="feeds-page ">
        <div class="channel-container">
            <div class="scroll-container channel-scroll-container">
                <div class="content-container">
                    <div class="channel active">推荐</div>
                    <div class="channel ">山科日常</div>
                    <div class="channel">美食</div>
                    <div class="channel">考试</div>
                    <div class="channel ">吃瓜</div>
                    <div class="channel">恋爱</div>
                </div>
            </div>
        </div>
        <div class="loading-container"></div>
        <div class="feeds-container">
            <Waterfall :hasAroundGutter="false" :list="list" :width="240" style="max-width: 1260px">
                <template #item="{  url,index }">
                    <div class="card">
                        <LazyImg :url="url" style="border-radius: 8px"/>
                        <div class="footer">
                            <a class="title"><span>{{titles[index]}}</span></a>
                            <div class="author-wrapper">
                                <a class="author">
                                    <img :src="url" class="author-avatar"/>
                                    <span class="name">{{  usernames[index]}}</span>
                                </a>
                                <span class="like-wrapper like-active">
                  <Search style="width: 1em; height: 1em"/>
                  <span class="count">{{Math.floor(Math.random()*10)}}</span>
                </span>
                            </div>
                        </div>
                    </div>
                </template>
            </Waterfall>
        </div>
        <div class="feeds-loading"></div>
    </div>
</template>
<script lang="ts" setup>
import {Search} from "@element-plus/icons-vue";
import {LazyImg, Waterfall} from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";

import {ref} from "vue";


const list = ref([

    {src: "../../src/assets/imgs/图片9.jpg"},
    {src: "../../src/assets/imgs/图片8.jpg"},
    {src: "../../src/assets/imgs/图片10.jpg"},
    {src: "../../src/assets/imgs/图片11.jpg"},
    {src: "../../src/assets/imgs/图片12.jpg"},
    {src: "../../src/assets/imgs/图片13.png"},
    {src: "../../src/assets/imgs/图片14.jpg"},
    {src: "../../src/assets/imgs/图片14.jpg"},
    {src: "../../src/assets/imgs/图片15.png"},
    {src: "../../src/assets/imgs/图片16.png"},
    {src: "../../src/assets/imgs/图片17.png"},
    {src: "../../src/assets/imgs/图片18.jpg"},
    {src: "../../src/assets/imgs/图片19.png"},
    {src: "../../src/assets/imgs/图片20.jpg"},
    {src: "../../src/assets/imgs/图片21.png"},
    {src: "../../src/assets/imgs/e4a16ff3-ba21-47bb-aa80-80ca98e89c3b.webp"},
    {src: "../../src/assets/imgs/b_55b6379d2a7e8227de40159de11311c8.jpg"},
    {src: "../../src/assets/imgs/IMG_2090(20240315-013315).JPG"},
    {src: "../../src/assets/imgs/IMG_2089(20240315-013312).JPG"},
    {src: "../../src/assets/imgs/IMG_2092(20240315-013319).JPG"},
]);
const titles = [
    "开创未来的科技", "探索宇宙的奥秘", "创新与挑战", "智能时代的生活", "数字化转型", "可持续发展",
    "新媒体艺术", "创业与机遇", "全球贸易新趋势", "虚拟现实的未来",
    "无人驾驶与自动化", "绿色能源革命", "区块链技术应用", "人工智能与医疗", "网络安全与隐私",
    "机器人技术进展", "深度学习与大数据", "社交媒体的力量", "未来教育模式", "太空探索的愿景",
    "量子计算时代", "智能家居的崛起", "生物技术与健康", "新材料革命", "5G与物联网",
    "个性化数字营销", "城市规划与智慧城市", "金融科技创新", "可穿戴设备与健康监测", "新一代通信技术"
];

const usernames = [
    "孤影残月", "风中追风", "月下听风", "清风明月", "流年似水", "梦里花落", "夜色如墨", "星辰大海",
    "海天一色", "醉卧红尘", "云端漫步", "落花无情", "寒江独钓", "浅笑安然", "潇洒走一回", "花开彼岸",
    "一世浮生", "烟雨迷离", "天涯海角", "静谧之夜", "尘世之旅", "寻梦者", "日月同辉", "风华绝代",
    "沧海一粟", "日落黄昏", "轻舞飞扬", "晨曦微露", "锦绣年华", "飞扬的风筝"
];

</script>
<style lang="less" scoped>
.feeds-page {
  flex: 1;
  padding: 0 24px;
  padding-top: 72px;

  .channel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;

    .channel-scroll-container {
      backdrop-filter: blur(20px);
      background-color: transparent;
      width: calc(100vw - 24px);

      position: relative;
      overflow: hidden;
      display: flex;
      user-select: none;
      -webkit-user-select: none;
      align-items: center;
      font-size: 16px;
      color: rgba(51, 51, 51, 0.8);
      height: 40px;
      white-space: nowrap;
      height: 72px;

      .content-container::-webkit-scrollbar {
        display: none;
      }

      .content-container {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        color: rgba(51, 51, 51, 0.8);

        .active {
          font-weight: 600;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 999px;
          color: #333;
        }

        .channel {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
        }
      }
    }
  }

  .feeds-container {
    position: relative;
    transition: width 0.5s;
    margin: 0 auto;

    .footer {
      padding: 12px;

      .title {
        margin-bottom: 8px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #333;
      }

      .author-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20px;
        color: rgba(51, 51, 51, 0.8);
        font-size: 12px;
        transition: color 1s;

        .author {
          display: flex;
          align-items: center;
          color: inherit;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 12px;

          .author-avatar {
            margin-right: 6px;
            width: 20px;
            height: 20px;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            flex-shrink: 0;
          }

          .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .like-wrapper {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;

          .count {
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
