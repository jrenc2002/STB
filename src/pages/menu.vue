<template>
    <div class="reds-modal login-modal " role="presentation">
        <i aria-label="弹窗遮罩" class="reds-mask backdrop-blur" tabindex="-1" @click="close"></i
        >
        <div class="login-container h-62 w-48">
            <div class="icon-btn-wrapper close-button" @click="close">
                <svg aria-hidden="true" class="w-2.5 h-2.5 overflow-visible" viewBox="0 0 10 10">
                    <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-width="2"></path>
                </svg>
            </div>
            <div class=" w-full ">
                <div class=" ">
                    <ul class="channel-list  mt-3">
                        <li  @click="toDashboard()" :class="[AppGlobal.pageChance==0?'active-channel text-blue-500':'','text-xl m-4 ']">
    
                            <Star style="width: 1em; height: 1em; margin-right: 8px"/>
                            <span class="channel  "
                            >发现</span>
                        </li>
                        <li @click="toTrend()" :class="[AppGlobal.pageChance==1?'active-channel text-blue-500':'','text-xl m-4']">
                            <Star style="width: 1em; height: 1em; margin-right: 8px"/>
                            <span class="channel " >动态</span>
                        </li>
                        <li @click="toMessage()" :class="[AppGlobal.pageChance==2?'active-channel text-blue-500':'','text-xl m-4']">
                            <Bell style="width: 1em; height: 1em; margin-right: 8px"/>
                            <span class="channel" >
              消息</span
                            >
                        </li>
                      
                        <li @click="toUser()" :class="[AppGlobal.pageChance==4?'active-channel text-blue-500':'','text-xl m-4']">
                            <User style="width: 1em; height: 1em; margin-right: 8px"/>
                            <span class="channel" >
              用户</span
                            >
                        </li>
                    </ul>
                
                
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useAppGlobal} from "@/store/AppGlobal";
import {useRouter} from "vue-router";


const router = useRouter();
const AppGlobal = useAppGlobal()
const close = () => {
    //传递给父组件
    AppGlobal.isDrawerState = false
};
const toDashboard = () => {
    AppGlobal.pageChance = 0
    router.push({path: "/"});
    close()
};

const toTrend = () => {
    AppGlobal.pageChance = 1
    
    router.push({path: "/followTrend"});
    close()
};

const toMessage = () => {
    AppGlobal.pageChance = 2
    router.push({path: "/message"});
    close()
};


const toUser = () => {
    AppGlobal.pageChance = 4
    router.push({path: "/user"});
    close()
};

</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  background-color: transparent;
}

.login-modal {
  z-index: 100010;
  flex-direction: column;
}

.reds-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000002;
  box-sizing: border-box;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s,
  visibility 0.2s;

  .reds-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }

  .login-container {
    right: 6px;
    top: 10px;
    display: flex;
    position: absolute;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08),
    0 1px 4px 0 rgba(0, 0, 0, 0.04);
    transition: all 0.2s;

    .close-button {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      color: rgba(51, 51, 51, 0.8);
    }

    .left {
      width: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-right: 1px solid rgba(0, 0, 0, 0.08);

      img {
        border-style: none;
      }

      .logo {
        margin-top: 64px;
        width: 91.08px;
        height: 48px;
        -webkit-user-select: none;
        user-select: none;
        pointer-events: none;
      }

      .course-video {
        margin-top: 20px;
        width: 160px;
        height: 240px;
        overflow: hidden;
        margin-bottom: -1px;

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .qrcode {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        width: 192px;
        height: 192px;
        border: 2px solid var(--color-shadow-border);
        border-radius: 12px;
        background: var(--color-white);

        .qrcode-img {
          width: 160px;
          height: 160px;
        }

        .status {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          flex-direction: column;
          background: #fff;
          opacity: 0.95;
          -webkit-backdrop-filter: blur(2.5px);
          backdrop-filter: blur(2.5px);
          border-radius: 10px;
        }
      }

      .tip {
        color: #333;
        font-weight: 600;
        font-size: 12px;
        margin-top: 16px;
        line-height: 120%;
      }

      .course {
        width: 64px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        margin-top: 43.5px;
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.8);
        cursor: pointer;
      }
    }

    .right {
      width: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 48px;

      .title {
        font-size: 18px;
        color: rgba(51, 51, 51, 0.8);
        font-weight: 600;
        line-height: 120%;
      }

      .input-container {
        margin-top: 24px;
        width: 304px;
        display: flex;
        flex-direction: column;

        .auth-code {
          justify-content: center;
        }

        .auth-code,
        .phone {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;
          color: rgba(51, 51, 51, 0.8);
          height: 48px;
          background: #fff;
          border-radius: 999px;
          transition: border-color 0.2s;
          border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);

          .country-code {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 29px;
            height: 100%;
            font-weight: 400;
            margin-left: 16px;
            margin-right: 20px;
            color: #333;
          }

          .country-code:after {
            position: absolute;
            left: 41px;
            content: "";
            height: 24px;
            width: 1px;
            background-color: #fff;
          }
        }

        .auth-code input,
        .phone input {
          font-size: 16px;
          width: 130px;
          height: 100%;
          caret-color: #ff2442;
          color: #333;
        }

        .code-button {
          font-size: 16px;
          color: #ff2442;
          cursor: pointer;
          opacity: 0.5;
        }

        .err-msg {
          margin-top: 9.5px;
          height: 10px;
          line-height: 10px;
          color: var(--color-red);
          font-size: 14px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit {
          margin-top: 24px;
          height: 48px;
          background: #ff2442;
          color: #fff;
          opacity: 0.5;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        }

        form {
          display: block;
          margin-top: 0em;
        }
      }

      .agreements {
        width: 280px;
        position: relative;
        margin-top: 16px;
        padding-left: 18px;
        font-size: 12px;
        color: var(--color-tertiary-label);
        line-height: 120%;

        .agree-icon {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.183);
        }

        a {
          color: #13386c;
        }

        .links {
          font-weight: 400;
        }
      }

      .oauth-tip:after,
      .oauth-tip:before {
        display: block;
        width: 133px;
        height: 1px;
        content: "";
        background-color: rgba(0, 0, 0, 0.08);
      }

      .oauth-tip-line {
        margin: 0 12px;
      }

      .oauth-tip {
        margin-top: 29px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.6);
      }

      .login {
        display: flex;
        margin-top: 16px;

        .login-common {
          width: 144px;
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          color: rgba(51, 51, 51, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-right: 10px;

          .reg {
            margin-left: 16px;
          }
        }
      }
    }
  }
}
</style>
