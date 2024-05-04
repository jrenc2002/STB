<template>
    <div class="container ">
        <div class="top">
            <header class="mask-paper">
                <a class="w-[10rem] ml-4 " style="display: flex;">
                    <svg fill="none" height="46" viewBox="0 0 117.103515625 46.56005859375"
                         width="80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path d="M8.30377 8.54396L4.84777 41.136L12.2878 41.136L16.6078 -3.43323e-05L21.0238 -3.43323e-05L16.7038 41.136L23.4718 41.136L27.0718 8.54396L31.4398 8.54396L27.4558 45.408L-0.000226498 45.408L3.88777 8.54396L8.30377 8.54396ZM50.0798 38.112Q50.9918 42.096 52.8638 42.096Q54.0158 42.096 54.6398 41.112Q55.2638 40.128 55.4558 37.728L58.8638 -3.43323e-05L63.4238 -3.43323e-05L60.0158 38.208Q59.6798 42 58.0238 44.256Q56.3678 46.512 53.1518 46.512Q50.1278 46.512 48.3998 44.544Q46.6718 42.576 45.9518 39.072L50.0798 38.112ZM52.9598 9.35997Q51.6158 15.792 49.6238 21.864Q47.6318 27.936 44.6078 33.984L40.5278 31.92Q43.3598 26.448 45.3278 20.52Q47.2958 14.592 48.6398 8.35197L52.9598 9.35997ZM69.2798 34.944Q68.1278 28.704 67.5518 22.224Q66.9758 15.744 66.6878 9.64796L70.9598 9.07197Q71.1998 15.264 71.8718 21.648Q72.5438 28.032 73.6478 34.176L69.2798 34.944ZM106.88 46.56L108.224 33.84L97.1358 35.472L96.9918 31.344L108.656 29.616L111.776 0.0959663L116 0.0959663L112.976 28.944L116.96 28.368L117.104 32.496L112.496 33.168L111.104 46.56L106.88 46.56ZM82.6398 36.336Q84.9918 32.112 86.7918 27.288Q88.5918 22.464 89.7438 16.512L86.4318 16.512L86.8638 12.48L91.6638 12.48L92.3358 6.33597Q90.3198 6.81597 88.3518 7.19997L87.2478 3.31197Q90.1758 2.78397 93.1998 1.99197Q96.2238 1.19997 98.7198 0.287968L100.112 3.93597Q98.3838 4.55997 96.4638 5.18397L95.6478 12.48L99.8718 12.48L99.4398 16.512L95.2158 16.512L94.8798 19.776Q96.0318 20.976 97.1358 22.2Q98.2398 23.424 99.4398 24.912L96.9438 27.696Q95.5998 25.824 94.3998 24.336L92.0478 46.464L87.9198 46.464L91.0398 20.64Q90.0318 25.632 88.7118 30Q87.3918 34.368 85.5678 38.4L82.6398 36.336ZM105.392 2.63997Q107.744 6.38396 109.52 10.368L106.16 12.336Q105.296 10.512 104.24 8.37597Q103.184 6.23997 102.08 4.60797L105.392 2.63997ZM104.192 26.208Q103.472 24.096 102.488 21.912Q101.504 19.728 100.448 17.952L103.952 16.08Q105.056 18 106.04 20.184Q107.024 22.368 107.744 24.432L104.192 26.208Z"
                                  fill="#2A82E4">
                            </path>
                        </g>
                    </svg>
                </a>
                
                <div class="tool-box"></div>
                <div class="input-box">
                    <input class="search-input" placeholder="探索山小科" type="text"/>
                    <div class="input-button">
                        <div class="close-icon">
                            <Close style="width: 1em; height: 1em; margin-right: 8px"/>
                        </div>
                        <div class="search-icon">
                            <Search style="width: 1em; height: 1em; margin-right: 8px"/>
                        </div>
                    </div>
                </div>
                <div class="right max-[960px]:cursor-pointer min-[960px]:hidden  " @click="updataMenu()">
                    <svg aria-hidden="true" fill="none" height="24" width="24">
                        <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5"></path>
                    </svg>
                </div>
                <Menu v-show="AppGlobal.isDrawerState" @click-child="close"></Menu>
            </header>
        </div>
        <div class="main">
            <Transition>
                
                <div class="side-bar">
                    <ul class="channel-list">
                        <li :class="AppGlobal.pageChance==0?'active-channel':''" @click="toDashboard()">
                            <a class="link-wrapper ">
                                <svg fill="none" height="48" style="width: 1em; height: 1em; margin-right: 8px"
                                     viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
                                          fill="none" stroke="#333" stroke-linejoin="bevel" stroke-width="3"/>
                                    <path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"
                                          fill="none" stroke="#333" stroke-linejoin="bevel" stroke-width="3"/>
                                    <path d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"
                                          fill="none" stroke="#333" stroke-linejoin="bevel" stroke-width="3"/>
                                    <path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
                                          fill="none" stroke="#333" stroke-linejoin="bevel" stroke-width="3"/>
                                </svg>
                                <span class="channel"
                                >发现</span
                                ></a
                            >
                        </li>
                        <li :class="AppGlobal.pageChance==1?'active-channel':''" @click="toTrend()">
                            
                            <svg fill="none" height="48" style="width: 1em; height: 1em; margin-right: 8px"
                                 viewBox="0 0 48 48"
                                 width="48"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 7H4V37H11V42L21 37H44V7Z" fill="none" stroke="#333" stroke-linecap="round"
                                      stroke-linejoin="bevel" stroke-width="3"/>
                                <path d="M31 16V17" stroke="#333" stroke-linecap="round" stroke-linejoin="bevel"
                                      stroke-width="3"/>
                                <path d="M17 16V17" stroke="#333" stroke-linecap="round" stroke-linejoin="bevel"
                                      stroke-width="3"/>
                                <path d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25" stroke="#333"
                                      stroke-linecap="round"
                                      stroke-linejoin="bevel" stroke-width="3"/>
                            </svg>
                            <span class="channel">
              动态</span
                            >
                        </li>
                        <li :class="AppGlobal.pageChance==2?'active-channel':''" @click="toMessage()">
                            
                            <svg fill="none" height="48" style="width: 1em; height: 1em; margin-right: 8px"
                                 viewBox="0 0 48 48"
                                 width="48"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="#333"
                                      stroke-linecap="round"
                                      stroke-linejoin="bevel" stroke-width="3"/>
                                <path d="M23 21H25.0025" stroke="#333" stroke-linecap="round" stroke-width="3"/>
                                <path d="M33.001 21H34.9999" stroke="#333" stroke-linecap="round" stroke-width="3"/>
                                <path d="M13.001 21H14.9999" stroke="#333" stroke-linecap="round" stroke-width="3"/>
                            </svg>
                            <span class="channel">
              消息</span
                            >
                        </li>
                        
                        <li :class="AppGlobal.pageChance==4?'active-channel ':''" @click="toUser()">
                           
                            <svg fill="none" height="48" viewBox="0 0 48 48" width="48" style="width: 1em; height: 1em; margin-right: 8px"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"
                                      fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="bevel"
                                      stroke-width="3"/>
                                <path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"
                                      fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="bevel"
                                      stroke-width="3"/>
                            </svg>
                            <span class="channel">
              用户</span
                            >
                        </li>
                    </ul>
                    
                    <div class="information-container ml-2">
                        <Transition>
                            <div v-if="isMore" class="information-pad  ">
                                <div class="container">
                                    <div>
                                        <div>
                                            <div class="group-wrapper">
                                                <div class="menu-item hover-effect">
                                                    <span>关于山小科</span>
                                                    <div class="icon">
                                                        <ArrowRight style="width: 1em; height: 1em; margin-right: 8px"/>
                                                    </div>
                                                </div>
                                                <div class="menu-item hover-effect">
                                                    <span>隐私，协议</span>
                                                    <div class="icon">
                                                        <ArrowRight style="width: 1em; height: 1em; margin-right: 8px"/>
                                                    </div>
                                                </div>
                                                <div class="menu-item hover-effect">
                                                    <span>帮助与客服</span>
                                                </div>
                                            </div>
                                            <div class="divider"></div>
                                        </div>
                                        
                                        <div>
                                            <div class="group-wrapper">
                                                <div class="group-header">设置</div>
                                                <div class="menu-item hover-effect">
                                                    <span>深色模式</span>
                                                    <div class="multistage-toggle component">
                                                        <button class="toggle-item active">
                                                            <div class="icon-wrapper">
                                                                <Sunny style="width: 1em; height: 1em"/>
                                                            </div>
                                                        </button>
                                                        <button class="toggle-item">
                                                            <div class="icon-wrapper">
                                                                <Moon style="width: 1em; height: 1em"/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="menu-item hover-effect">
                                                    <span>退出登录</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <div class="information-wrapper " @click="isMore=!isMore;">
                            <More style="width: 1em; height: 1em; margin-right: 8px"/>
                            <span class="channel ml-1"> 更多</span>
                        </div>
                    </div>
                </div>
            </Transition>
            
            <div class="main-content with-side-bar">
                <router-view/>
            </div>
        </div>
        <div class="max-[1024px]:hidden">
            
            <Login v-show="isLogin" @click-child="close"></Login>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ArrowRight, Close, Moon, More, Search, Sunny,} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import Login from "@/pages/login.vue";
import {ref} from "vue";
import {useAppGlobal} from "@/store/AppGlobal";
import Menu from "@/pages/menu.vue";


const router = useRouter();
const isMore = ref(false)
const isLogin = ref(true);
const AppGlobal = useAppGlobal()
const toDashboard = () => {
    AppGlobal.pageChance = 0
    router.push({path: "/"});
};

const toTrend = () => {
    AppGlobal.pageChance = 1
    
    router.push({path: "/followTrend"});
};

const toMessage = () => {
    AppGlobal.pageChance = 2
    router.push({path: "/message"});
};
const updataMenu = () => {
    console.log('updataMenu')
    AppGlobal.isDrawerState = !AppGlobal.isDrawerState
}

const toUser = () => {
    AppGlobal.pageChance = 4
    router.push({path: "/user"});
};


const close = (val: boolean) => {
    isLogin.value = val;
};
</script>

<style lang="less" scoped>
.container {
  max-width: 1728px;
  background-color: #fff;
  margin: 0 auto;
}

.container .top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 72px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  align-items: center;
  background: #fff;
}

.container .top header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1728px;
  height: 72px;
  padding: 0 16px 0 24px;
  z-index: 10;
}

.container .top header .tool-box {
  width: 24px;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
}

.container .top header .input-box {
  height: 40px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
}

@media screen and (max-width: 695px) {
  .container .top header .input-box {
    display: none;
  }
}

@media screen and (min-width: 960px) and (max-width: 1191px) {
  .container .top header .input-box {
    width: calc(-36px + 50vw);
  }
}

@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .container .top header .input-box {
    width: calc(-33.6px + 40vw);
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .container .top header .input-box {
    width: calc(-42.66667px + 33.33333vw);
  }
}

@media screen and (min-width: 1728px) {
  .container .top header .input-box {
    width: 533.33333px;
  }
}

.container .top header .input-box .search-input {
  padding: 0 84px 0 16px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 120%;
  color: #333;
  caret-color: #005abd;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 999px;
}

.container .top header .input-box .input-button {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(51, 51, 51, 0.8);
}

.container .top header .input-box .input-button .close-icon .search-icon {
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(51, 51, 51, 0.8);
}

.container .main {
  display: flex;
}

.container .main .side-bar {
  height: calc(100vh - 72px);
  overflow-y: scroll;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 16px;
  margin-top: 72px;
  position: fixed;
  overflow: visible;
  transition-property: all;
}

@media screen and (max-width: 695px) {
  .container .main .side-bar {
    display: none;
  }
}

@media screen and (min-width: 696px) and (max-width: 959px) {
  .container .main .side-bar {
    display: none;
  }
}

@media screen and (min-width: 960px) and (max-width: 1191px) {
  .container .main .side-bar {
    width: calc(-18px + 25vw);
    margin-left: 12px;
  }
}

@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .container .main .side-bar {
    width: calc(-16.8px + 20vw);
    margin-left: 12px;
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .container .main .side-bar {
    width: calc(-21.33333px + 16.66667vw);
    margin-left: 16px;
  }
}

@media screen and (min-width: 1728px) {
  .container .main .side-bar {
    width: 266.66667px;
    margin-left: 16px;
  }
}

.container .main .side-bar .channel-list {
  min-height: auto;
  -webkit-user-select: none;
  user-select: none;
}

.container .main .side-bar .channel-list .active-channel {
  background-color: rgba(144, 178, 217, 0.15);
  border-radius: 999px;
  color: #333;
}

.container .main .side-bar .channel-list li {
  padding-left: 16px;
  min-height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  color: rgba(51, 51, 51, 0.6);
}

.container .main .side-bar .channel-list li .link-wrapper {
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
}

.container .main .side-bar .channel-list .channel {
  font-size: 16px;
  font-weight: 600;
  margin-left: 12px;
  color: #333;
}

.container .main .side-bar .information-container {
  display: inline-block;
  width: 100%;
  color: #333;
  font-size: 16px;
  position: absolute;
  bottom: 0;
}

.container .main .side-bar .information-container .information-pad {
  z-index: 16;
  margin-bottom: 4px;
  width: 100%;
}

.container .main .side-bar .information-container .information-pad .container {
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}

.container .main .side-bar .information-container .information-pad .container .divider {
  margin: 0px 12px;
  list-style: none;
  height: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-width: 1px 0 0;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper {
  padding: 4px;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .group-header {
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-weight: 400;
  height: 32px;
  color: rgba(51, 51, 51, 0.6);
  font-size: 12px;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item {
  height: 40px;
  color: rgba(51, 51, 51, 0.8);
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-weight: 400;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .icon {
  color: rgba(51, 51, 51, 0.3);
  margin-left: auto;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .component {
  margin-left: auto;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .multistage-toggle {
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  display: flex();
  padding: 2px;
  border-radius: 999px;
  cursor: pointer;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .multistage-toggle .active {
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02);
  color: #333;
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .multistage-toggle .toggle-item {
  border-radius: 999px;
  background: transparent;
  color: rgba(51, 51, 51, 0.6);
}

.container .main .side-bar .information-container .information-pad .container .group-wrapper .menu-item .multistage-toggle .toggle-item .icon-wrapper {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.container .main .side-bar .information-container .information-wrapper {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  height: 48px;
  width: 100%;
  display: flex;
  font-weight: 600;
  align-items: center;
  border-radius: 999px;
}

.container .main .main-content {
  width: 100%;
}

@media screen and (min-width: 960px) and (max-width: 1191px) {
  .container .main .main-content {
    padding-left: calc(-6px + 25vw);
  }
}

@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .container .main .main-content {
    padding-left: calc(-4.8px + 20vw);
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .container .main .main-content {
    padding-left: calc(-5.33333px + 16.66667vw);
  }
}

@media screen and (min-width: 1728px) {
  .container .main .main-content {
    padding-left: 282.66667px;
  }
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
