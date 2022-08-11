<template>
  <div>
    <div class="header">
      <div class="header-div">
        <img src="../assets/搜索.svg" alt="" />
        <input type="text" placeholder="搜索商品" />
      </div>
    </div>
    <div class="tongzhi">
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>秋日限定：储值300元，立赠1杯</van-swipe-item>
          <van-swipe-item>秋日限定：储值600元，立赠2杯</van-swipe-item>
          <van-swipe-item>秋日限定：储值900元，立赠3杯</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item, index) in goods"
            class="menu-item"
            :class="{ current: currentIndex === index }"
            @click="selectMenu(index)"
            :key="index"
          >
            <span class="text border-1px">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li
            v-for="item in goods"
            class="food-list food-list-hook"
            :key="item.id"
          >
            <h1 class="title">{{ item.name }}</h1>
            <ul
              v-for="food in item.products"
              class="food-item border-1px"
              :key="food.id"
            >
              <div class="icon" @click="selectFood(food)">
                <img width="57" height="57" :src="food.pic" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="description">{{ food.category_name }}</p>
                <!-- <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span
                  ><span class="rating">好评率{{ food.rating }}%</span>
                </div> -->
                <div class="price">
                  <span class="now">￥{{ food.price }}</span
                  ><span v-show="food.oldPrice" class="old"
                    >￥{{ food.oldPrice }}</span
                  >
                </div>

                <div class="cart-wrapper"></div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
    };
  },
  computed: {
    // 计算得到当前分类下标
    currentIndex() {
      //第一种写法 有点繁琐 不推荐
      //   for (let i = 0; i < this.listHeight.length; i++) {
      //     let height1 = this.listHeight[i]
      //     let height2 = this.listHeight[i + 1]
      //     if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
      //       return i
      //     }
      //   }
      //   return 0
      //  解构赋值

      // 第二种写法已改进   根据条件计算 产生一个结果 findIndex查找满足条件的下标 没找到返回-1
      const index = this.listHeight.findIndex((item, index) => {
        //   如果滚动的距离>=左侧列表当前的高度并且 小于下一项的高度
        return (
          this.scrollY >= item && this.scrollY < this.listHeight[index + 1]
        );
      });

      return index;
    },
  },
  created() {
    // axios.get("/product/list").then((res) => {
    //   // console.log(res.data.data);
    //   this.goods = res.data.data;
    //   console.log(this.goods);
    // });
  },
  mounted() {
    //   这里用到一个定时器 等待数据渲染完毕 执行该方法 不然不能滑动 如果是真实数据 这两个方法放在this.$nextTick()里面
    //因为没有真实数据 只能用本地数据模拟下
    setTimeout(() => {
      this._initScroll();
      this._calculateHeight();
    }, 20);
  },
  methods: {
    //     设置两边列表可以滚动  内容区要比外层容器要高  列表先渲染 才可以滑动
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 2,
      });
      //    右侧表绑定滑动监听
      this.foodsScroll.on("scroll", (pos) => {
        //  获取每次滚动的值 绝对值
        this.scrollY = Math.abs(Math.round(pos.y));
      });
      //  右侧列表绑定滑动结束监听
      this.foodsScroll.on("scrollEnd", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log(this.scrollY);
      });
    },

    _calculateHeight() {
      // 获取 所有左侧列表li  class 为 food-list-hook ul设置ref
      let foodList =
        this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");

      let height = 0;
      this.listHeight.push(height);
      // 第一种写法 有点繁琐 不推荐
      //  定义初始值 li可见高度为 0
      //   let height = 0
      // //   初始值0 添加到listHeight数组
      //   this.listHeight.push(height)
      // //   循环遍历所有左侧列表 得到所有li可视区域高度
      //   for (let i = 0; i < foodList.length; i++) {
      //     let item = foodList[i]
      //         // 高度+= 左侧列表当前项的可视高度
      //     height += item.clientHeight
      //     //  收集左侧列表所有li可见区域高度
      //     this.listHeight.push(height)
      //   }

      // 第二种写法以改进  伪数组转为真数组 并循环遍历
      Array.prototype.slice.call(foodList).forEach((i) => {
        height += i.clientHeight;
        this.listHeight.push(height);
      });
    },
    //  点击左侧列表 右侧列表滑动到指定位置
    selectMenu(index) {
      let foodList =
        this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
      //   scrollToElement可以滑动到指定位置
      this.foodsScroll.scrollToElement(foodList[index], 300);
      //    第一个参数对应的食品列表
      //  第二个参数为滑动 动画时长
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
}
.header-div {
  width: 90%;
  height: 30px;
  border: 1px solid #f6f6f6;
  border-radius: 30px;
  display: flex;
  background: #e9e9e9;
}
.header-div img {
  width: 30px;
  height: 30px;
}
.header-div input {
  width: 100%;
  border: none;
  background: none;
  font-size: 12px;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.goods {
  position: absolute;
  top: 100px;
  bottom: 44px;
  width: 100%;
  max-width: 540px;
  display: flex;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    background: #f3f5f7;
  }
}
.menu-item {
  width: 56px;
  height: 54px;
  display: table;
  font-size: 12px;
  line-height: 14px;
  padding: 0 12px;
  font-weight: 200;
  &:last-child {
    .text:after {
      border-top: none;
    }
  }
  &.current {
    position: relative;
    background: #fff;
    font-weight: 700;
    margin-top: -1px;
    color: aquamarine;
    z-index: 100;
    .text:after {
      border-top: 0;
    }
  }
  .text {
    display: table-cell;
    vertical-align: middle;
    width: 56px;
    font-size: 12px;
    .icon {
      vertical-align: top;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 4px;
      background-size: 12px 12px;
      background-repeat: no-repeat;
    }
  }
}
.foods-wrapper {
  flex: 1;
  .title {
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    width: 420px;
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
    margin-left: 12px;
    background: #f0f0f0;
    color: rgb(147, 153, 159);
    p {
      background-color: #f3f5f7;
    }
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border: rgba(7, 17, 27, 0.1) 1px solid;
    &:last-child:after {
      border-top: 0;
    }

    .icon {
      flex: 0 0 57px;
      margin-right: 10px;
    }
    .content {
      flex: 1;
    }
    .name {
      margin: 2px 0 8px 0;
      line-height: 14px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .description,
    .extra {
      font-size: 10px;
      line-height: 10px;
      color: rgb(147, 153, 159);
      margin-bottom: 8px;
    }
    .extra {
      .count {
        margin-right: 12px;
        line-height: 10px;
      }
    }
    .rating {
      line-height: 10px;
    }
    .price {
      .now {
        font-size: 14px;
        color: rgb(240, 20, 20);
        font-weight: 700;
        line-height: 24px;
        margin-right: 8px;
      }
    }
    .old {
      font-size: 10px;
      text-decoration: line-through;
      color: rgb(147, 153, 159);
      font-weight: 700;
      line-height: 24px;
    }
    .cart-wrapper {
      position: absolute;
      right: 0;
      bottom: 12px;
    }
  }
}
</style>
