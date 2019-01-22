<template>
  <div>
    <!--顶部-->
    <div class="nav">
      <ul>
        <li class="l-btn" @click="goback"></li>
      </ul>
    </div>

    <silder></silder>

    <div class="pro_detail">
      <!--产品指标-->
      <ul class="detail_list">
        <h2>精选宠物口粮150kg超值装</h2>
        <li>
          <span>单价:</span>
          <a>50.00</a>元
        </li>
        <li>
          <span>数量:</span>
          <input type="button" value="-">
          <input type="number" value="1" id="num">
          <input type="button" value="+">
        </li>
      </ul>

      <h3>商品介绍{{detail.title}}</h3>
      <div class="details">
        <img src="../assets/img/load1.png">
        <div class="text-box" v-html="detail.content"></div>
      </div>
    </div>
  </div>
</template>


<script>
import silder from "./silder";
export default {
  data() {
    return {
      detail: {}
    };
  },
  components: { silder },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let id = this.$route.params.id - 0;
    let dataName = this.$route.query.dataName;
    this.$http({
      url: "/data/article_" + dataName + ".data"
    }).then(res => (this.detail = res.data[id - 1]));
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}

.pro_detail h3 {
  height: 50px;
  line-height: 50px;
  text-indent: 1em;
}
.details {
  background: white;
  line-height: 26px;
  padding: 10px;
  font-size: 14px;
  color: #666;
  word-break: break-all;
}
h2,
.detail_list li {
  height: 50px;
  line-height: 50px;
  background-color: white;
  text-indent: 1em;
  margin-top: 5px;
  overflow: hidden;
}
h2 {
  margin: 15px auto;
  font-size: 16px;
}
.detail_list li {
  color: #666;
  font-size: 14px;
  text-indent: 0;
}
.detail_list span {
  text-indent: 0;
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #000;
}
.detail_list a,
.detail_list font,
.detail_list em {
  font-size: 12px;
}
.detail_list em {
  margin-left: 15px;
}
.detail_list input {
  width: 60px;
  height: 34px;
  line-height: 34px;
  margin-top: 8px;
  text-align: center;
  background: #ec6941;
  color: white;
  border: none;
  outline: none;
  vertical-align: top;
}
.detail_list input[type="number"] {
  background: #f9f9f9;
  color: #333;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}
</style>
