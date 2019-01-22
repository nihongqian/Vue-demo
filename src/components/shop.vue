<template>
  <div>
    <!--顶部-->
    <div class="top_fixed">
      <a href="javascript:window.history.back()" class="left_btn hide">
        <i>&#xe622;</i>
      </a>
      <h1>全部商品</h1>
      <a href="javascript:;" class="right_btn">筛选</a>
    </div>

    <div class="container pd">
      <ul class="pro_list clearfix">
        <li v-for="item of list" :key="item.id">
          <div class="img">
            <img :src="item.img">
            <h3>高级宠物口粮惊喜上市</h3>
          </div>
          <p>
            售价：
            <span>140元</span>
          </p>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$http({
      url: "/data/shop.json"
    }).then(res => (this.list = res.data));
  }
};
</script>

<style>
.pro_list li {
  width: 48%;
  background: #f8f8f8;
  float: left;
  margin: 10px 1% 0px 1%;
  box-shadow: 0 0px 1px 0 #999;
}
.tc_list li {
  width: 98%;
  background: #f8f8f8;
  margin: 5px 1% 10px 1%;
  box-shadow: 0 0px 1px 0 #999;
}
.pro_list .img,
.tc_list .img {
  height: 150px;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.pro_list img,
.tc_list img {
  height: 150px;
  width: 100%;
}
.pro_list div h3,
.tc_list div h3 {
  height: 30px;
  line-height: 30px;
  text-align: left;
  text-indent: 5px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  z-index: 66;
  width: 100%;
}
.pro_list p,
.tc_list p {
  height: 24px;
  line-height: 24px;
  text-indent: 3px;
  color: #333;
  font-size: 12px;
}
.pro_list p span,
.tc_list span {
  color: red;
}
</style>
