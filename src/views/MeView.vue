<template>
  <div class="me">
    
    <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">点餐</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">订单</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o" >我的</van-tabbar-item>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
    active:'home'
    }
  }
};
</script>
<style scoped lang="scss">

</style>