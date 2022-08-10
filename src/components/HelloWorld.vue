<template>
  <div class="hello"> 
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">点餐</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">订单</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o" to="mater">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:'home'
    }
  },
  name: "HelloWorld",
  props: {
   
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
