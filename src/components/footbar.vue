<template>
  <!--底部-->
  <div class="footer">
    <ul>
      <router-link tag="li" active-class="active" to="/home"><a href="javascript:;"><p><i>&#xe61d;</i></p><h4>宠尚门</h4></a></router-link>
      <router-link tag="li" active-class="active" to="/shop"><a href="javascript:;"><p><i>&#xe72b;</i></p><h4>商品</h4></a></router-link>
      <router-link tag="li" active-class="active" to="/shops"><a href="javascript:;"><p><i>&#xe682;</i></p><h4>服务</h4></a></router-link>
      <router-link tag="li" active-class="active" to="/my"><a href="javascript:;"><p><i>&#xe610;</i></p><h4>个人中心</h4></a></router-link>    
    </ul>
  </div>
</template>



<style scoped>
/*footer*/
.footer{position:fixed;bottom:0;left:0;width:100%;height:60px;box-shadow:0 -1px 3px 0 #999;background:white;z-index:666}
.footer ul li{width:25%;float:left;text-align:center;color:#333;font-size:14px}
.footer ul a{display:block;height:50px;padding-top:7px;padding-bottom:3px}
.footer ul h4{height:20px;line-height:20px}
.footer ul p{height:30px;line-height:30px}
.footer ul i{font-size:24px;color:#666}
.footer ul li:nth-child(3) i{font-weight:bold}
.footer ul li.active h4,.footer ul li.active i{color:#EC6941}
.pd{padding-bottom:60px}
.dkq{width:96%;height:40px;line-height:40px;text-indent:10px;margin:10px auto;background:white;box-shadow:0 0 0 1px #ddd}
.dkq span{color:#999}
.dkq input{float:right;margin-right:10px;margin-top:13px}
</style>

