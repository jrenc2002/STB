<template>
  <div class="user-page">
    <div class="user">
      <div class="user-info max-md:flex max-md:flex-col max-md:w-[80vw]">
        <div class="avatar flex center justify-center item-center mb-3">
          <div class="avatar-wrapper">
            <img
              src="../../assets/imgs/ee4ad9b89f4e67125e74e484e10a1688.jpg"
              class="user-image"
              style="border: 1px solid rgba(0, 0, 0, 0.08)"
            />
          </div>
        </div>
        <div class="info-part">
          <div class="info md:ml-20">
            <div class="basic-info">
              <div class="user-basic">
                <div class="user-nickname">
                  <div class="user-name my-2 text-2xl">写代码写的</div>
                </div>
                <div class="user-content  ">
                  <span class="user-redId text-sm">小科号：862055705</span><span class="user-IP text-sm"> IP属地：山东</span>
                </div>
              </div>
            </div>
            <div class="user-desc  text-base-100">
              君子报仇 十年不晚
            </div>
            <div class="user-tags">
              <div class="tag-item">
                <div>射手座</div>
              </div>
              <div class="tag-item"><div>山东青岛</div></div>
              <div class="tag-item"><div>程序员</div></div>
            </div>
            <div class="data-info">
              <div class="user-interactions">
                <div><span class="count">80</span><span class="shows">关注</span></div>
                <div><span class="count">575</span><span class="shows">粉丝</span></div>
                <div><span class="count">2445</span><span class="shows">获赞与收藏</span></div>
              </div>
            </div>
            <!---->
          </div>
          <div class="follow"><!----></div>
        </div>
      </div>
    </div>
    <div class="reds-sticky-box user-page-sticky" style="--1ee3a37c: all 0.4s cubic-bezier(0.2, 0, 0.25, 1) 0s">
      <div class="reds-sticky" style="">
        <div class="tertiary center reds-tabs-list" style="padding: 0px 12px">
          <div class="reds-tab-item active" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span>笔记</span>
          </div>
          <div class="reds-tab-item" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span>收藏</span>
          </div>
          <div class="reds-tab-item" style="padding: 0px 16px; margin-right: 0px; font-size: 16px">
            <!----><!----><span @click="toAgree">点赞</span>
          </div>
          <!---->
          <div class="active-tag" style="width: 64px; left: 627px"></div>
        </div>
      </div>
    </div>
    <div class="feeds-tab-container" style="--1ee3a37c: all 0.4s cubic-bezier(0.2, 0, 0.25, 1) 0s">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { Star } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toAgree = () => {
  router.push({ path: "/agree" });
};
</script>
<style lang="less" scoped>
.user-page {
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
}
.user-page .user {
  padding-top: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-page .user .user-info {
  display: flex;
  justify-content: center;
  padding: 12px 0;
}
.user-page .user .user-info .avatar .avatar-wrapper {
  text-align: center;
  width: 250.66667px;
  height: 175.46667px;
}
.user-page .user .user-info .avatar .avatar-wrapper .user-image {
  border-radius: 50%;
  margin: 0 auto;
  width: 70%;
  height: 100%;
  object-fit: cover;
}
.user-page .user .user-info .info-part {
  position: relative;
  width: 100%;
}
.user-page .user .user-info .info-part .info {
  margin-left: 32px;
}
@media screen and (min-width: 1728px) {
  .user-page .user .user-info .info-part .info {
    width: 533.33333px;
  }
}
.user-page .user .user-info .info-part .info .basic-info {
  display: flex;
  align-items: center;
}
.user-page .user .user-info .info-part .info .basic-info .user-basic {
  width: 100%;
}
.user-page .user .user-info .info-part .info .basic-info .user-basic .user-nickname {
  width: 100%;
  display: flex;
  align-items: center;
  max-width: calc(100% - 96px);
}
.user-page .user .user-info .info-part .info .basic-info .user-basic .user-nickname .user-name {
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #333;
}
.user-page .user .user-info .info-part .info .basic-info .user-basic .user-content {
  width: 100%;
  font-size: 12px;
  line-height: 120%;
  color: rgba(51, 51, 51, 0.6);
  display: flex;
  margin-top: 8px;
}
.user-page .user .user-info .info-part .info .basic-info .user-basic .user-content .user-redId {
  padding-right: 12px;
}
.user-page .user .user-info .info-part .info .user-desc {
  width: 100%;
  font-size: 14px;
  line-height: 140%;
  color: #333;
  margin-top: 16px;
  white-space: pre-line;
}
.user-page .user .user-info .info-part .info .user-tags {
  height: 24px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333;
  text-align: center;
  font-weight: 400;
  line-height: 120%;
}
.user-page .user .user-info .info-part .info .user-tags .tag-item :first-child {
  padding: 3px 6px;
}
.user-page .user .user-info .info-part .info .user-tags .tag-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  grid-gap: 4px;
  gap: 4px;
  height: 18px;
  border-radius: 41px;
  background: rgba(0, 0, 0, 0.03);
  height: 24px;
  line-height: 24px;
  margin-right: 6px;
  color: rgba(51, 51, 51, 0.6);
}
.user-page .user .user-info .info-part .info .data-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.user-page .user .user-info .info-part .info .data-info .user-interactions {
  width: 100%;
  display: flex;
  align-items: center;
}
.user-page .user .user-info .info-part .info .data-info .user-interactions .count {
  font-weight: 500;
  font-size: 14px;
  margin-right: 4px;
}
.user-page .user .user-info .info-part .info .data-info .user-interactions .shows {
  color: rgba(51, 51, 51, 0.6);
  font-size: 14px;
  line-height: 120%;
}
.user-page .user .user-info .info-part .info .data-info .user-interactions > div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 16px;
}
.user-page .user .user-info .info-part .follow {
  position: absolute;
  margin-left: auto;
  display: block;
  right: 0;
  top: 0;
}
.user-page .reds-sticky {
  padding: 16px 0;
  z-index: 5 !important;
  background: hsla(0, 0%, 100%, 0.98);
}
.user-page .reds-sticky .reds-tabs-list {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  font-size: 16px;
  justify-content: center;
}
.user-page .reds-sticky .reds-tabs-list screen and (min-width: 1728px) {
  width: 1445.33333px;
}
.user-page .reds-sticky .reds-tabs-list .reds-tab-item {
  padding: 0px 16px;
  margin-right: 0px;
  font-size: 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  cursor: pointer;
  color: rgba(51, 51, 51, 0.8);
  white-space: nowrap;
  transition: transform 0.3s cubic-bezier(0.2, 0, 0.25, 1);
  z-index: 1;
}
.user-page .reds-sticky .reds-tabs-list .reds-tab-item.active {
  background-color: rgba(144, 178, 217, 0.15);
  border-radius: 20px;
  font-weight: 600;
  color: rgba(51, 51, 51, 0.8);
}
.user-page .feeds-tab-container {
  padding: 1rem;
}

</style>
