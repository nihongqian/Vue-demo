<template>
  <div class="wrap login">
    <div class="log_banner">
      <img src="../assets/img/dog.png">
    </div>
    <form>
      <div class="yhmm">
        <label>
          <i>&#xe657;</i>
        </label>
        <input type="text" placeholder="请输入手机号" name="phone" required>
      </div>
      <div class="yhmm">
        <label>
          <i>&#xe603;</i>
        </label>
        <input type="text" placeholder="请输入验证码">
        <input type="button" value="获取验证码">
      </div>
      <div class="yhmm">
        <label>
          <i>&#xe66b;</i>
        </label>
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="wj">
        <!-- <a class="wjmm" href="login.html">已有账号，点击登录</a> -->
        <router-link to='/login'>已有账号，点击登录</router-link>
      </div>
      <div class="dl" style="margin-top:35px">
        <a class="tjan" href="login.html">确认</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login form{width:80%;margin:30px auto}
form div{margin-bottom:10px;position:relative}
.login form  label{position:absolute;left:0;top:0;width:40px;height:40px;line-height:40px;text-align:center;color:#c9a063;}
.login form .yhmm i{font-size:26px!important}
.login form div input[type="text"]{width:100%;height:40px;line-height:44px;text-indent:46px;border:none;border-bottom:1px solid #EC6941;background:none;outline:none}
.login form div input[type="button"]{border:none;background:#ccc;position:absolute;right:5px;top:0px;width:100px;height:34px;line-height:34px;text-align:center;border-radius:5px}
.login form div.dl a,.login form div.qx a{display:block;width:100%;height:40px;line-height:40px;text-align:center;color:white;background:#EC6941;border-radius:30px;margin:20px auto}
.wj{text-align:right}
.login i{vertical-align:top;margin-right:5px;color:#EC6941!important}
</style>
