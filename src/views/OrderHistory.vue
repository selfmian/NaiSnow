<template>
  <div class="curr">
    <van-tabs v-model="activeName" line-width="80" color="#b0d342">
      <van-tab title="当前订单" name="current" class="currentOrder">
        <div class="notOrder">
          <p>您还没有点餐</p>
          <p>快去犒劳一下自己吧~</p>
        </div>
        <van-button round type="info" class="rice">去点餐</van-button>
      </van-tab>
      <van-tab title="历史订单" name="history" class="historyOrder">

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "OrderHistory",
  data() {
    return {
      activeName: "current",
    };
  },
};
</script>

<style lang="scss" scoped>
.curr{
  .currentOrder{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 153vw;
    .notOrder{
      display: flex;
      color: #717276;
      flex-direction: column;
      align-items: center;
      margin-bottom: 34px;
      p{
        margin-bottom: 10px;
      }
    }
    .rice{
      width: 150px;
      height: 38px;
      color: black;
      background: rgb(167,213,0);
      border: none;
      border-radius: 28px;
    }
  }
}

</style>