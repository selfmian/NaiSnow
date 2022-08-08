<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-arrow
    />
  </div>
  
</template>

<script>
import axios from "../../http"
export default {
  name: "OrderDetails",
  created(){
  },
  methods: {
    async getDetails(){
      const res = await axios.get("/order/detail",{id:16569252265419900})
      // console.log(res)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>