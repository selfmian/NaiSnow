<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-arrow
    />
    <div class="over">
      <h3>订单已完成</h3>
      <p>取餐成功</p>
      <van-button plain type="info" class="btn-zai">再来一单</van-button>
    </div>
  </div>
</template>

<script>
import axios from "../../http"
export default {
  name: "OrderDetails",
  created(){
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.over{
  width: 96%;
  margin: 10px auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-zai{
    height: 35px;
    border-color: #94999b;
    color: #94999b;
    border-radius: 5px;
  }
}
</style>