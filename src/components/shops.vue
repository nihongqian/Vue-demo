<template>
  <div>
    <!--顶部-->
    <div class="top_fixed">
      <a href="javascript:window.history.back()" class="left_btn hide">
        <i>&#xe60b;</i>
      </a>
      <!--<h1>首页</h1>-->
      <input type="search" placeholder="请输入服务项目">
      <i class="sr">&#xe620;</i>
      <a href="#" class="right_btn">确定</a>
    </div>

    <div class="container pb">
      <ul class="service_list">
        <li>
          <a href="service_d.html">
            <img src="../assets/img/dog.png">
            <div>
              <h3>医疗服务</h3>
              <p class="service_time">
                服务时间:
                <span>60分钟</span>
              </p>
              <p class="service_price">
                服务价格:
                <span>￥60元</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <list :list="list" dataName="follow"></list>
    </div>
  </div>
</template>

<script>
import list from "./list.vue";
export default {
  data() {
    return {
      list: []
    };
  },
  components: { list },
  mounted() {
    this.$http({
      url: "/data/follow.data"
    }).then(res => (this.list = res.data));
  }
};
</script>

<style>
/*服务项目*/
.service_list li {
  /*background:white url(../img/yjt.png) 96% center no-repeat;background-size:6px;*/
  position: relative;
}
.service_list li:nth-child(even) {
  background-color: #f2f2f2;
}
.service_list li a {
  display: block;
  height: 90px;
  padding: 10px;
  overflow: hidden;
}
.service_list li img {
  height: 86px;
  width: 86px;
  vertical-align: top;
  padding: 2px;
  background: white;
  box-shadow: 0 0 0 1px #ddd;
  float: left;
}
.service_list li div {
  width: calc(90% - 100px);
  height: 90px;
  float: left;
  line-height: 30px;
  margin-left: 10px;
}
.service_list li h3 {
  height: 30px;
  color: #000;
  font-size: 16px;
}
.service_list li p {
  height: 30px;
  color: #666;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.service_list li p span {
  color: #ec6941;
}

/*服务人员*/
.service_list li h3 span {
  color: #ec6941;
  margin-left: 15px;
}
.service_list li div > span {
  position: absolute;
  right: 10%;
  top: 11px;
  height: 30px;
  line-height: 30px;
  width: 30px;
  color: #ec6941;
  font-size: 14px;
}
</style>
