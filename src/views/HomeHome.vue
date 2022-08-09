<template>
  <div class="home">
    <div class="top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="yonghu">
      <div class="dl">
        <div class="img">
          <img src="../assets/1963510923.jpeg" alt="" />
        </div>
        <div class="name">
          <div class="mabangde">
            <span>马邦德</span>
          </div>
          <div class="jindu">
            <div class="jinduhezi">
              <div class="jindutiao">
                <div class="yanse"></div>
              </div>
              <div class="shuzhi">61/100</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fuli">
        <div class="xiaofuli">
          <div>62</div>
          <div>积分</div>
        </div>
        <div class="xiaofuli">
          <div>2</div>
          <div>奈雪卷</div>
        </div>
        <div class="xiaofuli">
          <div>
            <van-icon name="qr" />
          </div>
          <div>会员码kj</div>
        </div>
      </div>
    </div>
    <div class="shangcheng">
      <div class="shang1">
        <span class="cu">奈雪的茶商城</span>
        <span class="span">好茶随行 美好常在</span>
        <img
          src="http://shop.datong0.com/upload/2021-11-10/1636529611866776.jfif"
          alt=""
        />
      </div>
      <div class="shang1">
        <span class="cu">储值有礼</span>
        <span class="span">储值300立赠1杯</span>
        <img
          src="http://shop.datong0.com/upload/2021-11-03/1635925093591414.png"
          alt=""
        />
      </div>
      <div class="shang1">
        <span class="cu">积分商城</span>
        <span class="span">兑现量周边</span>
        <img
          src="http://shop.datong0.com/upload/2021-11-03/1635924093827744.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="nxzr">
      <div class="baoguonxzr">
        <div class="nxzr-top">
          <span class="zuire">奈雪最热</span>
          <span class="jiantou">></span>
        </div>
        <div class="nxzr-buttom">
          <div class="spyi">
            <img
              src="http://shop.datong0.com/upload/2021-11-10/1636529611866776.jfif"
              alt=""
            />
            <span>霸气芝士葡萄</span>
            <span>￥28.00</span>
          </div>
          <div class="spyi">
            <img
              src="https://www.starbucks.com.cn/images/products/macaron.jpg"
              alt=""
            />
            <span>霸气芝士葡萄</span>
            <span>￥28.00</span>
          </div>
          <div class="spyi">
            <img
              src="http://shop.datong0.com/upload/2021-11-03/1635922201985143.jpeg"
              alt=""
            />
            <span>霸气芝士葡萄</span>
            <span>￥28.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.axios.get("/product/list").then((res) => {
      console.log(res.data.data);
    });
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.4rem;
  line-height: 6.5rem;
  text-align: center;
  background-color: #39a9ed;
}
.yonghu {
  height: 1.5rem;
  background: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dl {
  display: flex;
  text-align: center;
}
.img {
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
}
.dl img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.name {
  width: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin-left: 0.1rem;
}
.jindu {
  width: 100%;
}
.jinduhezi {
  display: flex;
}
.jindutiao {
  width: 100px;
  height: 10px;
  background: #c8c8c8;
  border-radius: 30px;
  position: relative;
}
.yanse {
  width: 61px;
  height: 10px;
  background: #59bd07;
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
}
.shuzhi {
  margin-left: 5px;
  font-size: 12px;
}
.name span {
  font-size: 0.12rem;
}
.fuli {
  font-size: 0.12rem;
  display: flex;
  align-items: center;
}
.xiaofuli {
  width: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shangcheng {
  height: 3rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.shang1 {
  width: 110px;
  height: 150px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.shang1 .span {
  font-size: 0.12rem;
  color: #bbbbbb;
}
.shang1 img {
  width: 100px;
  height: 100px;
}
.cu {
  font-size: 14px;
  font-weight: bold;
}

.nxzr {
  height: 300px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.baoguonxzr {
  width: 93%;
  background: #fff;
}
.nxzr-top {
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.zuire {
  font-size: 15px;
  font-weight: bold;
}
.jiantou {
  font-size: 17px;
  color: #7a7a7a;
}
.nxzr-buttom {
  display: flex;
  justify-content: space-around;
}
.spyi {
  width: 100px;
  height: 150px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.spyi img {
  width: 100px;
  height: 100px;
}
.spyi span {
  font-size: 15px;
}
</style>
