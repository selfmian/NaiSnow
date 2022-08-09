<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow />
    <div class="over">
      <h3>订单已完成</h3>
      <p>取餐成功</p>
      <van-button plain type="info" class="btn-zai">再来一单</van-button>
    </div>
    <div class="over">
      <div class="x-cards">
        <van-card
          class="x-card"
          num="1"
          price="8.00"
          title="脆弱蛋挞"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
          class="x-card"
          num="2"
          price="28.00"
          title="霸气葡萄"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </div>
    </div>
    <div class="over">
      <van-card class="realPay" price="36.00" title="实付" />
    </div>
    <div class="over">
      <van-card class="realPay info" desc="2021.11.04 14:02" title="下单时间" />

    </div>
  </div>
</template>

<script>
import axios from "../../http";
export default {
  name: "OrderDetails",
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.over {
  width: 96%;
  margin: 10px auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  .btn-zai {
    height: 35px;
    border-color: #94999b;
    color: #94999b;
    border-radius: 5px;
    margin-bottom: 30px;
  }
}
.x-cards {
  width: inherit;
  .x-card {
    background: #fff;
  }
}
.realPay {
  background: #fff;
  width: inherit;
  padding: 0;
  .van-card__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 50px;
  }
  .info .van-card__content div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>