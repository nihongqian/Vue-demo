<template>
  <div>
    <!--顶部-->
    <div class="top_fixed">
      <a href="javascript:window.history.back()" class="left_btn hide"></a>
      <h1>宠尚门</h1>
      <!--<input type="search" placeholder="请输入服务项目"/>
      <i class="sr">&#xe620;</i>-->
      <!-- <a class="right_btns">登录</a> -->
      <router-link class="right_btns" to="/login">登录</router-link>
    </div>

    <silder></silder>
    <nineGrid></nineGrid>
    <tab></tab>
    <!-- <list :list="list" :dataName="'home'"></list> -->
  </div>
</template>

<script>
import silder from "./silder";
import nineGrid from "./nineGrid";
import tab from "./tab";
import list from "./list";

export default {
  



  components: { silder, list, nineGrid, tab },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // axios()
    this.$http({
      url: "/data/index.data"
      // url:'http://localhost:3000/index' 以后的后端接口
      // params:{start:0,count:3}
    }).then(res => {
      this.list = res.data;
    });
  }
};
</script>

<style>
/*首页*/
.wrap {
  margin: 0 auto;
  max-width: 414px;
  min-height: 100%;
  overflow-x: hidden;
  background: #ebe9ec;
}
.top_fixed {
  width: 100%;
  height: 44px;
  background: #ec6941;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  color: white;
  text-align: center;
  overflow: hidden;
}
.left_btn {
  display: inline-block;
  width: 50px;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  left: 5px;
  top: 6px;
  color: white;
}
.right_btn {
  display: inline-block;
  width: 50px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: absolute;
  right: 5px;
  top: 6px;
  color: #666;
  background: #f6f6f6;
  border-radius: 3px;
}
.right_btns {
  display: inline-block;
  width: 50px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: absolute;
  right: 5px;
  top: 6px;
  color: white;
  border-radius: 3px;
}
.right_btns span {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  right: 5px;
  top: -5px;
  color: #666;
  border-radius: 10px;
  background: white;
}
h1 {
  font-size: 18px;
  text-align: center;
  height: 44px;
  line-height: 44px;
  letter-spacing: 2px;
}
.top_fixed input {
  margin-top: 6px;
  margin-left: 5px;
  height: 32px;
  width: calc(100% - 70px);
  float: left;
  border: none;
  background: white;
  border-radius: 30px;
  text-indent: 30px;
}
.top_fixed .sr {
  position: absolute;
  left: 10px;
  top: 11px;
  color: #888;
}
</style>
