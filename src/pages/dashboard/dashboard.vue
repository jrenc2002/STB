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
            <Waterfall :crossOrigin="false"  :hasAroundGutter="false" :list="list" :width="240" style="max-width: 1260px">
                <template #item="{  url,index }">
                    <div class="card">
                        <LazyImg :url="url" style="border-radius: 8px"/>
                        <div class="footer">
                            <a class="title"><span>{{ titles[index] }}</span></a>
                            <div class="author-wrapper">
                                <a class="author">
                                    <img :src="url" class="author-avatar"/>
                                    <span class="name">{{ usernames[index] }}</span>
                                </a>
                                <span class="like-wrapper like-active">
                  <Search style="width: 1em; height: 1em"/>
                  <span class="count">{{ Math.floor(Math.random() * 10) }}</span>
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
    { src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png" },
    { src: "https://picui.cn/i/2024/05/05/6636653f9c3e5.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636653f96b60.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636653fa0ad9.png" },
    { src: "https://picui.cn/i/2024/05/05/6636653f7172e.png" },
    { src: "https://picui.cn/i/2024/05/05/6636653fc72dd.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366540128e6.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png" },
    { src: "https://picui.cn/i/2024/05/05/66366540a4bb7.png" },
    { src: "https://picui.cn/i/2024/05/05/66366540a56c8.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636654476da4.png" },
    { src: "https://picui.cn/i/2024/05/05/6636654715020.png" },
    { src: "https://picui.cn/i/2024/05/05/66366542590e9.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665449a1c6.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636654756ecc.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665487ff86.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636654983b06.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636654995b41.png" },
    { src: "https://picui.cn/i/2024/05/05/66366549ef6f2.jpg" },
    { src: "https://picui.cn/i/2024/05/05/6636654a00b27.png" },
    { src: "https://picui.cn/i/2024/05/05/663665749ae40.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665747e4ee.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665753f279.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366575126ca.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665749d1e6.png" },
    { src: "https://picui.cn/i/2024/05/05/66366575c721a.jpg" },
    { src: "https://picui.cn/i/2024/05/05/663665757d426.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd195428.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd18f4f2.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd18c37b.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd1919f8.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd19cfe9.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd2b5c1e.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd320b7f.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd3257d6.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd326df1.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd326212.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd351fe7.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd3ac172.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd60a2a4.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd602d86.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd19cfe9.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd606cea.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd60556d.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd77c8a4.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd775fe6.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd7246ea.jpg" },
    { src: "https://picui.cn/i/2024/05/05/66366cd785a06.png" },
    { src: "https://picui.cn/i/2024/05/05/66366cd787376.png" },
    {src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653f9c3e5.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653f96b60.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653fa0ad9.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653f7172e.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653fc72dd.jpg"},
    {src: "https://picui.cn/i/2024/05/05/66366540128e6.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png"},
    {src: "https://picui.cn/i/2024/05/05/66366540a4bb7.png"},
    {src: "https://picui.cn/i/2024/05/05/66366540a56c8.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653f9c3e5.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653f96b60.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653fa0ad9.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653f7172e.png"},
    {src: "https://picui.cn/i/2024/05/05/6636653fc72dd.jpg"},
    {src: "https://picui.cn/i/2024/05/05/66366540128e6.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636653f1efbe.png"},
    {src: "https://picui.cn/i/2024/05/05/66366540a4bb7.png"},
    {src: "https://picui.cn/i/2024/05/05/66366540a56c8.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636654476da4.png"},
    {src: "https://picui.cn/i/2024/05/05/6636654715020.png"},
    {src: "https://picui.cn/i/2024/05/05/66366542590e9.jpg"},
    {src: "https://picui.cn/i/2024/05/05/663665449a1c6.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636654756ecc.jpg"},
    {src: "https://picui.cn/i/2024/05/05/663665487ff86.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636654983b06.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636654995b41.png"},
    {src: "https://picui.cn/i/2024/05/05/66366549ef6f2.jpg"},
    {src: "https://picui.cn/i/2024/05/05/6636654a00b27.png"}

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
