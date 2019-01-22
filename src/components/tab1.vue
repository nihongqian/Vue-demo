<template>
  <li style="display:block">
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
      <li>
        <a href="service_d.html">
          <img src="../assets/img/dog.png">
          <div>
            <h3>洗澡服务</h3>
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
  </li>
</template>

<style>
.newsList {
  clear: both;
  margin-bottom: 1rem;
  margin-top: 0.7rem;
}
.tabs {
  background: #ddd;
  height: 50px;
  overflow: hidden;
  margin-top: 20px;
}
.tabs li {
  width: 33.33%;
  height: 50px;
  float: left;
}
.tabs li a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #444;
}
.tabs li.on a {
  background: #ec6941;
  color: white;
}
.tabs1 {
  background: #f0f0f0;
  height: 50px;
  overflow: hidden;
}
.tabs1 li {
  width: 33.33%;
  height: 50px;
  float: left;
}
.tabs1 li a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #444;
  box-shadow: 0 -2px 0 0 #aaa inset;
}
.tabs1 li.on a {
  box-shadow: 0 -2px 0 0 #ec6941 inset;
  color: #ec6941;
}
.content > li {
  display: none;
  padding: 15px;
  line-height: 26px;
  color: #666;
  background: white;
}
.next {
  display: block;
  width: 240px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 30px;
  background: #ec6941;
  color: white;
  margin: 10px auto;
}
</style>
