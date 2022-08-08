<template>

  <div class="tabBar">
    <div class="top">
      <div class="circle">
        <img src="../../public/1.jpg" alt="">
      </div>
      <div class="center">
        <span class="title">比比东></span>
        <div class="deng">
          <div class="m-top">
                 <h4>LV1</h4>
       <span class="hui">会员权益></span>
          </div>
  

        </div>
      </div>

    </div>


    <HelloWord />

  </div>

</template>
<script>
import HelloWord from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      active: 'home'
    }
  },
  components: {
    HelloWord
  }
}
</script>
<style lang="scss" scoped>
.tabBar {
  width: 100%;
  height: 100%;

  .top {
    width: 100%;
    height: 4rem;
    background: #b0d342;
    display: block;
    float: left;
    position: relative;

  }

  .circle img {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    position: absolute;
    left: 45%;
    top: 1rem;

  }

  .center {
    width: 80%;
    height: 5rem;
    background: #f06;
    margin: auto;
    margin-top: 1.6rem;
    border-radius: 0.3rem;

    .title {
      font-size: 0.3rem;
      margin-left: 43%;

    }
    .deng{
      width:90%;
      height: 3.4rem;
      background: #f6f8ec;
      border-radius: 0.3rem;
      margin: auto;
     .m-top{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h4{
        font-size: 0.4rem;
        margin-left: 0.3rem;
        display: inline-block;
      }
      .hui{
        margin-top: 0.5rem;
         margin-left: 0.3rem;
        font-size: 0.2rem;
        margin-right: 0.4rem;
      }
     }

    }
  }
}
</style>