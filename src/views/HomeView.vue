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

          <img class="img1" src="../../public/会员.png" alt="">
          <span class="p1">会员码</span>
          <!-- <div class="fill">
                <img src="../../public/会员.png" alt="">
                <p class="poo">会员码</p>
              </div> -->
          <span class="sp">61/100</span>
          <div class="pro">

            <div class="gress">
              <span class="cheng">距离下一等级只差39成长值></span>
            </div>

          </div>

        </div>
        <div class="wee">
          <span class="soo">积分变动会第一时间收到通知</span>
          <span class="spp">去领取</span>
        </div>
        <div class="mian">
          <span class="wode">我的资产


            <ul>
              <li>2</li>
       
              <li>62</li>

              <li>0.00</li>
 
              <li>0</li>
        

            </ul>
            <ul class="uls">
              <li>奈雪卷</li>
              <li>积分商城</li>
              <li>余额(元)</li>
              <li>礼品卡</li>
            </ul>
          </span>

        </div>
      <div id="m_mian">
          <div class="top">
            <h4>我的服务</h4>
               <div class="kiss">
            <i class="el-icon-s-cooperation"></i>
            <i class="el-icon-s-claim"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-phone-outline"></i>
           <ul class="cyan">
            <li>储值有礼</li>
            <li>积分签到</li>
            <li>送TA心意</li>
            <li>联系客服</li>
           </ul>
          </div>
          <div class="mare">
            <i class="el-icon-share"></i>
            <i class="el-icon-location-information"></i>
            <i class="el-icon-notebook-2"></i>
            <i class="el-icon-pie-chart"></i>
            
            <ul class="barre">
                 <li>兑换中心</li>
            <li>收货地址</li>
            <li>开发票</li>
            <li>更多服务</li>
            </ul>
          </div>
          </div>
       
        </div>
       <p class="poo">会员卡适用于奈雪的茶和奈雪酒屋指定范围</p>
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
<style  scoped lang="scss" >
* {
  list-style: none;
  margin: 0;
  padding: 0;

}
body{
    height: 100vh !important;
    background: red !important ;
}


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
    background: #fff;
    margin: auto;
    margin-top: 1.6rem;
    border-radius: 0.3rem;

    .title {
      font-size: 0.3rem;
      margin-left: 43%;

    }

    .deng {
      position: relative;
      width: 90%;
      height: 3.8rem;
      background: #f6f8ec;
      border-radius: 0.3rem;
      margin: auto;

      .m-top {

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h4 {
          font-size: 0.4rem;
          margin-left: 0.3rem;
          display: inline-block;
        }

        .hui {
          margin-top: 0.5rem;
          margin-left: 0.3rem;
          font-size: 0.2rem;
          margin-right: 0.4rem;
        }
      }

      .img1 {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        right: 0.3rem;
        bottom: 1.2rem;



      }

      .p1 {
        right: 0.2rem;
        position: absolute;
        bottom: 0.8rem;

        font-size: 0.3rem;
      }

      .sp {
        line-height: 0.3rem;
        font-size: 0.3rem;
        margin-left: 0.3rem;
      }

      .pro {
        width: 3.8rem;
        height: 0.2rem;
        background: #fff;
        margin-left: 0.3rem;
        border-radius: 0.3rem;
        position: relative;

        .gress {
          width: 2.6rem;
          height: 0.2rem;
          background: #b0d342;
          border-radius: 0.3rem;

          .cheng {
            position: absolute;
            top: 0.3rem;
            font-size: 0.1rem;

            line-height: 0.3rem;

          }
        }

      }
    }

    .wee {
      margin-right: 1rem;
      margin-top: 0.2rem;
      width: 6.5rem;
      height: 0.6rem;
      background: #f6fbdd;
      border-radius: 0.3rem;
      display: flex;
      justify-content: space-around;


      .soo {
        font-size: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.1rem;
      }

      .spp {
        // width: 0.5rem;
        // height: 0.5rem;
        margin-top: 0.2rem;
        margin-bottom: 0.1rem;
        text-align: center;
        background: #b0d342;
        border-radius: 0.3rem;
        font-size: 0.3rem;
        line-height: 0.3rem;

      }
    }

    .mian {
      width: 80vw;
      height: 2rem;
      background: #fff;
      border-radius: 0.3rem;

      .wode {

        line-height: 0.4rem;
        display: block;
        font-size: 0.4rem;

        padding-bottom: 1.9rem;

        ul li {
          display: flex;
          margin-top: 0.2rem;
          margin-left: 0.8rem;
          justify-content: space-between;
          display: inline-block;
          // flex-wrap: wrap;
        }

        .uls li {
          font-size: 0.3rem;
          margin-left: 0.3rem;
          display: inline-block;
        }
      }

    }
#m_mian{
  position: relative;
  margin-top: 0.1rem;
  border-radius: 0.3rem;
  background: #fff;
  width: 80vw;
  height:3.5rem;
     border: 1px solid red;

     .top h4{
        display: block;
        font-size: 0.4rem;
        margin-left: 0.3rem;
        margin-top: 0.3rem;
     }
     .kiss i{
     
      font-size: 0.5rem;
      margin-left: 0.8rem;
     }
     .cyan{
      position: absolute;
      height: 0.5rem;
      top: 1.2rem;
     li{

      font-size: 0.3rem;
      display: flex;
      display: inline-block;
      margin-left: 0.2rem;
      margin-bottom: 2rem;
     }
     }
     .mare i{
         font-size: 0.5rem;
         margin-left: 0.8rem;
     }
    .barre{
      position: absolute;
      height: 0.5rem;
      top: 2.4rem;
      li{
        font-size: 0.3rem;
        display: flex;
        display: inline-block;
            margin-left: 0.3rem;
      margin-bottom: 2rem;
      }
    }
 }
    .poo{
      font-size: 0.3rem;
      color: #cfd0d1;
      margin: auto;
    }
  }
}
</style>