<template>
  <div>
    <van-nav-bar title="订单结算" left-text="" left-arrow />
    <br />
    <van-cell-group inset>
      <van-field v-model="tel" type="tel" label="联系电话" placeholder="请输入手机号" input-align="right" />
      <van-cell is-link @click="showPopup">取餐时间</van-cell>
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }" />
      <!-- 自定义图标 -->
      <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '60%' }" />
      <!-- 图标位置 -->
      <van-popup v-model="show" round closeable close-icon-position="top-right" position="bottom"
        :style="{ height: '60%' }">
        30分钟后取餐
      </van-popup>
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#b0d342">店内食堂</van-radio>|
        <van-radio name="2" checked-color="#b0d342">打包带走</van-radio>
      </van-radio-group>
    </van-cell-group>
    <br />
    <van-cell-group class="card" inset>
      <div>
        <div class=" egg">
          <h4>脆皮蛋挞</h4>
          <h4>$8.00</h4>
        </div>
        <div class="number">x1</div>
      </div>
      <div>
        <div class=" egg">
          <h4>霸气葡萄</h4>
          <h4>$28.00</h4>
        </div>
        <div class="number">x2</div>
      </div>
    </van-cell-group>
    <br />
    <van-cell-group inset>
      <van-cell center title="支付方式" label="微信">
        <van-switch v-model="checked" size="24px" active-color="#b0d342" />
      </van-cell>
    </van-cell-group>
    <br />
    <!-- 备注 -->
    <van-cell-group inset>
      <van-cell value="点击填写备注" is-link>
        <template #title>
          <span class="custom-title">备注</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="unpaid">
      64.00
      <van-cell title="待支付">
        <van-button color="#7232dd">单色按钮</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      show: false,
      checked: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style lang="sass">

.take
  display: flex
.van-radio-group
  padding: 20px
  display: flex
  justify-content: space-around
.van-card__content
  flex-direction: row
.card
  padding: 20px
.egg
  display: flex
  justify-content: space-between
.number
  display: flex
  color: #ccc
  justify-content: flex-end
.unpaid0-
  width: 100%
  position: fixed
  bottom:0 
</style>