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
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="yhmm">
        <label>
          <i>&#xe66b;</i>
        </label>
        <input type="text" placeholder="请输入密码" v-model="password">
      </div>
      <div class="wj">
        <a class="wjmm" href="javascript:;">忘记密码？</a>
      </div>
      <div class="dl" style="margin-top:35px">
        <!-- <router-link to='/login'>登录</router-link> -->
        <!-- <input type="button" value="登录" @click="$store.dispatch({})">  -->
        <!-- 也可以直接吧参数写到函数内，但是就不是动态的了 -->
        <a href="javascript:;" @click="checkLogin">登录</a>
      </div>
      <div class="qx" style="margin-top:10px">
        <router-link to='/reg'>注册</router-link>

      </div>
    </form>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  data(){
    return {
      username:'pan',
      password:'pan123'
    }
  },
  methods: {
    checkLogin(){
      // this.$store.dispatch({type:类型,负载key:value})  //==》到actions==>payload.key
      this.$store.dispatch({
        type:types.CHECK_USER,
        username:this.username,
        password:this.password
      }).then(
        (auth) => {
          //第一种，去state仓库 拿 this.$store.state.user.auth
          //第二种，改造action return 返回值拿到res
          if(auth){
            this.$router.push('/my')
          }else{
            this.$router.push('/error')
          }
        }
      )  
    }
  },
}
</script>

<style scoped>
.login form{width:80%;margin:30px auto}
form div{margin-bottom:10px;position:relative}
.login form label{position:absolute;left:0;top:0;width:40px;height:40px;line-height:40px;text-align:center;color:#c9a063;}
.login form .yhmm i{font-size:26px!important}
.login form div input[type="text"]{width:100%;height:40px;line-height:44px;text-indent:46px;border:none;border-bottom:1px solid #EC6941;background:none;outline:none}
.login form div input[type="button"]{border:none;background:#ccc;position:absolute;right:5px;top:0px;width:100px;height:34px;line-height:34px;text-align:center;border-radius:5px}
.login form div.dl a,.login form div.qx a{display:block;width:100%;height:40px;line-height:40px;text-align:center;color:white;background:#EC6941;border-radius:30px;margin:20px auto}
.wj{text-align:right}
.login i{vertical-align:top;margin-right:5px;color:#EC6941!important}
</style>
