<template>
  <div class="feeds-container">
    <Waterfall :crossOrigin="false" :list="list" :width="220" :hasAroundGutter="false" style="max-width: 1260px">
      
      <template #item="{ url,index }">
        <div class="card">
          <LazyImg :url="url" style="border-radius: 8px" />
          <div class="footer">
            <a class="title"><span>{{sentences[index]}}</span></a>
            
            
            <div class="author-wrapper">
          
              <span class="like-wrapper like-active">
                <Search style="width: 1em; height: 1em" />
                <span class="count">12</span>
              </span>
            </div>
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>
<script lang="ts" setup>

import { Search } from "@element-plus/icons-vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import { ref } from "vue";

const list = ref([
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
const sentences = [
    "她拥有温暖如春的笑容。",
    "她的眼眸如星辰般闪耀。",
    "她的秀发如瀑布般柔顺。",
    "她的声音宛如天籁之音。",
    "她的身姿优雅如白鹤翩翩起舞。",
    "她的微笑能融化所有人的心。",
    "她的双眸仿佛藏着无尽的故事。",
    "她的肌肤如白玉般晶莹剔透。",
    "她的智慧与美貌兼具。",
    "她的气质优雅迷人。",
    "她的身姿曼妙如柳枝轻扬。",
    "她的眼睛仿佛会说话。",
    "她的容颜如初春的花朵般美丽。",
    "她的微笑如阳光般灿烂。",
    "她的面容如一幅绝美的画作。",
    "她的嗓音宛若夜莺歌唱。",
    "她的气质高贵如兰花。",
    "她的举止优雅大方。",
    "她的笑容如明月般皎洁。",
    "她的发丝轻柔如风。",
    "她的目光温柔而坚定。",
    "她的脸庞如瓷器般精致。",
    "她的睫毛如蝶翼轻颤。",
    "她的嘴角微扬，魅力十足。",
    "她的灵魂如阳光般纯净。",
    "她的双颊泛起红润的光泽。",
    "她的美貌令人无法移开目光。",
    "她的存在如同晨曦般令人愉悦。",
    "她的举手投足充满优雅。",
    "她的身影让人无法忘怀。"
];

</script>
<style lang="less" scoped>
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
</style>
