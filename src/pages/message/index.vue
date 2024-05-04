<template>
  <div class="container">
    <div class style="height: 72px">
      <div class="reds-sticky">
        <div class="reds-tabs-list ">
          <div :class="[active==0?'active':'','reds-tab-item  tab-item']">
            <div class="badge-container"  @click="toMessage()">
              <span>我的消息</span>
            </div>
          </div>
          <div :class="[active==1?'active':'','reds-tab-item  tab-item']">
            <div class="badge-container" @click="toComment()">
              <span>评论和@</span>
            </div>
          </div>
          <div :class="[active==2?'active':'','reds-tab-item  tab-item']">
            <div class="badge-container" @click="toAgree()">
              <span>赞和收藏</span>
            </div>
          </div>
          <div :class="[active==3?'active':'','reds-tab-item  tab-item']">
            <div class="badge-container" @click="toFollower()">
              <span>新增关注</span>
            </div>
          </div>
        </div>
        <div class="divider" ></div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const active = ref(0);

const toComment = () => {
  router.push({ path: "/comment" });
    active.value= 1;
};
const toMessage = () => {
    router.push({ path: "/message" });
    active.value= 0;
};
const toAgree = () => {
  router.push({ path: "/agreeCollection" });
    active.value= 2;
};
const toFollower = () => {
  router.push({ path: "/follower" });
    active.value= 3;
};
</script>
<style lang="less" scoped>
.container {
  flex: 1;
  padding-top: 72px;
  width: calc(90vw - 24px);
  max-width: 840px;
  margin: 0 auto;
}
.container .reds-sticky {
  top: 72px;
  position: fixed;
  z-index: 5;
  width: calc(90vw - 24px);
  max-width: 840px;
  box-sizing: border-box;
  height: 72px;
  padding-top: 16px;
  justify-content: center;
  flex-direction: column;
  background: #fff;
}
.container .reds-sticky .reds-tabs-list {
  justify-content: flex-start;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  font-size: 16px;
}
.container .reds-sticky .reds-tabs-list .active {
  font-weight: 600;
  color: #333;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
.container .reds-sticky .reds-tabs-list .reds-tab-item {
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
.container .reds-sticky .reds-tabs-list .reds-tab-item .badge-container {
  position: relative;
}
.container .reds-sticky .divider {

  width: 100%;
  list-style: none;
  height: 0;
  border: solid rgba(0, 0, 0, 0.08);
  border-width: 1px 0 0;
}

</style>
