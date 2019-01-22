<template>
  <div>
    <ul class="content">
      <li style="display:block">
        <ul class="service_list">
          <li>
            <a href="service_d.html">
              <img src="../assets/img/dog.png">
              <div>
                <h3>医疗服务</h3>
                <p class="service_time">服务时间:
                  <span>60分钟</span>
                </p>
                <p class="service_price">服务价格:
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
                <p class="service_time">服务时间:
                  <span>60分钟</span>
                </p>
                <p class="service_price">服务价格:
                  <span>￥60元</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <ul class="service_list">
          <li>
            <a href="article.html">
              <!-- <img src="../assets/img/yy1.png"> -->
              <div>
                <h3>医院名称</h3>
                <p class="service_time">地址:
                  <span>武汉市洪山区关山街155号</span>
                </p>
                <p class="service_price">距离:
                  <span>3KM</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="article.html">
              <!-- <img src="../assets/img/yy2.png"> -->
              <div>
                <h3>医院名称</h3>
                <p class="service_time">地址:
                  <span>武汉市洪山区关山街155号</span>
                </p>
                <p class="service_price">距离:
                  <span>3KM</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li>宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科</li>
    </ul>
  </div>
</template>

<style scoped>
.service_list li{/*background:white url(../../assets/img/yjt.png) 96% center no-repeat;background-size:6px;*/position:relative}
.service_list li:nth-child(even){background-color:#f2f2f2}
.service_list li a{display:block;height:90px;padding:10px;overflow:hidden}
.service_list li img{height:86px;width:86px;vertical-align:top;padding:2px;background:white;box-shadow:0 0 0 1px #ddd;float:left}
.service_list li div{width:calc(90% - 100px);height:90px;float:left;line-height:30px;margin-left:10px}
.service_list li h3{height:30px;color:#000;font-size:16px}
.service_list li p{height:30px;color:#666;font-size:14px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:break-all}
.service_list li p span{color:#EC6941}

/*服务人员*/
.service_list li h3 span{color:#EC6941;margin-left:15px}
.service_list li div>span{position:absolute;right:10%;top:11px;height:30px;line-height:30px;width:30px;color:#EC6941;font-size:14px;}
</style>
