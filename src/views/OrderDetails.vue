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
      const res = await axios.get("/order/detail",)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>