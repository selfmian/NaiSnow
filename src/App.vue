<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" route active-color="#b0d342" inactive-color="#9a9a9a">
      <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="order" icon="orders-o" to="/menu">点餐</van-tabbar-item>
      <van-tabbar-item name="indent" icon="completed" to="/orderHistory">订单</van-tabbar-item>
      <van-tabbar-item name="me" icon="manager-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style lang="scss">
</style>
