<template>
  <div>
    <ul class="agree-container">
      <li class="agree-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://img2.imgtp.com/2024/05/04/GCdcnmrW.jpg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>名字</a>
            </div>
            <div class="interaction-hint"><span>关注您了&nbsp;</span><span>2023-10-9</span></div>
          </div>
          <div class="extra">
            <button aria-disabled="false" type="button" class="bg-[#2A82E4] w-24 h-10 text-white rounded-full" >
              <span class="font-bold">关注</span>
            </button>
          </div>
        </div>
      </li>
      <li class="agree-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://img2.imgtp.com/2024/05/04/GCdcnmrW.jpg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>名字</a>
            </div>
            <div class="interaction-hint"><span>关注您了&nbsp;</span><span>2023-10-9</span></div>
          </div>
          <div class="extra">
            <button aria-disabled="false" type="button" class="bg-[#2A82E4] w-24 h-10 text-white rounded-full" >
              <span class="font-bold">关注</span>
            </button>
          </div>
        </div>
      </li>
      <li class="agree-item">
        <a class="user-avatar">
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <img class="avatar-item" src="https://img2.imgtp.com/2024/05/04/GCdcnmrW.jpg" />
        </a>
        <div class="main">
          <div class="info">
            <div class="user-info">
              <a class>名字</a>
            </div>
            <div class="interaction-hint"><span>关注您了&nbsp;</span><span>2023-10-9</span></div>
          </div>
          <div class="extra">
            <button aria-disabled="false" type="button" class="bg-[#2A82E4] w-24 h-10 text-white rounded-full" >
              <span class="font-bold">关注</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
textarea {
  overflow: auto;
}
.agree-container {
  max-width: 840px;
  .agree-item {
    display: flex;
    flex-direction: row;
    padding-top: 24px;

    .user-avatar {
      margin-right: 24px;
      flex-shrink: 0;

      .avatar-item {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        border: 1px solid rgba(0, 0, 0, 0.08);
        object-fit: cover;
      }
    }

    .main {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: row;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      .info {
        flex-grow: 1;
        flex-shrink: 1;

        .user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
          a {
            color: #333;
            font-size: 16px;
            font-weight: 600;
          }
        }
        .interaction-hint {
          font-size: 14px;
          color: rgba(51, 51, 51, 0.6);
          margin-bottom: 8px;
        }

        .interaction-content {
          display: flex;
          font-size: 14px;
          color: #333;
          line-height: 140%;
          cursor: pointer;
          margin-bottom: 12px;
          .msg-count {
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            color: #fff;
            background-color: red;
            text-align: center;
            border-radius: 100%;
          }
        }

        .quote-info {
          font-size: 12px;
          display: flex;
          align-items: center;
          color: rgba(51, 51, 51, 0.6);
          margin-bottom: 12px;
          cursor: pointer;
        }

        .quote-info::before {
          content: "";
          display: inline-block;
          border-radius: 8px;
          margin-right: 6px;
          width: 4px;
          height: 17px;
          background: rgba(0, 0, 0, 0.08);
        }
      }

      .extra {
        min-width: 48px;
        flex-shrink: 0;
        margin-left: 24px;
        .follow-button {
          width: 96px;
        }
        .reds-button-new.large {
          font-size: 16px;
          font-weight: 600;
          line-height: 16px;
          padding: 0 24px;
          height: 40px;
        }
        .reds-button-new.primary {
          background-color: #ff2e4d;
          color: #fff;
        }
        .reds-button-new {
          position: relative;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          white-space: nowrap;
          outline: none;
          background: none;
          border: none;
          vertical-align: middle;
          text-align: center;
          display: inline-block;
          padding: 0;
          border-radius: 100px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
