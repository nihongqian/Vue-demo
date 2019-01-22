<template>
    <div>
        <!--顶部-->
	    <div class="top_fixed">
	    	<a href="javascript:window.history.go(-1)" class="left_btn hide"><i>&#xe622;</i></a>
	    	<h1>个人中心</h1>
	    	<!-- <a class="right_btn">注销</a> -->
			<a class="right_btn" @click="logout">注销</a>
	    </div>

	    <div class="container pd">
	    <div class="my_top">
	    	<a href="#"><img src="../assets/img/person1.png"/></a>
	    	<ul>
	    	   <li>您好,<span>Tora</span></li>
	    	   <li>当前积分：<span>89757</span></li>
	    	</ul>
	    </div>
        
        <!--商品列表-->
         <ul class="my_list">
         	<li><a href="shopcar.html"><i style="color:#C9A063">&#xe609;</i>购物车</a></li>
         	<li><a href="shop_dd.html"><i style="color:orangered">&#xe606;</i>商品订单</a></li>
         	<li><a href="caselist.html"><i style="color:red">&#xe645;</i>服务订单</a></li>
         	<li><a href="dzgl.html"><i style="color:red">&#xe660;</i>地址管理</a></li>
         	<li><a href="xfjl.html"><i style="color:dodgerblue">&#xe61f;</i>消费记录</a></li>
         	<li class="hide"><a href="shop.html"><i style="color:darkgoldenrod">&#xe72b;</i>积分商城</a></li>
         	<li><a href="xgmm.html"><i style="color:burlywood">&#xe66b;</i>修改密码</a></li>
         	<li><a href="article.html"><i style="color:darkseagreen">&#xe627;</i>关于我们</a></li>
         	<li class="bgwhite"><a href="tel:15807197602"><i style="color:dodgerblue">&#xe63e;</i>热线电话：15807197602</a></li>
         </ul>
       </div>
    </div>
</template>


<script>
import store from '../store'
import * as types from '../store/types.js'
export default {
	beforeRouteEnter (to, from, next) {
		// this.$store.state.user
		if(store.state.user.auth){	//同步条件
			next()
		}else{
			next('/login')
		}
	},

	methods:{
		logout(){
			//通知后端删cookie，手动结果后，跳转this.$router
			this.$store.commit({type:types.CHECK_USER,user:false}),
			this.$router.push('/home')
		}
	}
}
</script>

<style>
.my_list{background:#fff;margin-top:10px}
.my_list li{height:50px;line-height:50px;border-bottom:1px solid #ddd;text-indent:0.5em;background:url(../assets/img/yjt.png) 96% center no-repeat;background-size:6px}
.gd{background:white url(../assets/img/yjt.png) 96% center no-repeat;background-size:6px}
.gd a{display:block}
.my_list i{display:inline-block;width:35px;line-height:50px;height:50px;vertical-align:top;}
.my_list li a{display:block}

.my_top{height:200px;background:url(../assets/img/banner0.png) center no-repeat;background-size:cover;position:relative}
.my_top a{position:absolute;left:50%;top:45%;margin-left:-50px;margin-top:-50px;width:100px;height:100px;z-index:666;border-radius:50%;box-shadow:0 0 0 5px rgba(0,0,0,.3)}
.my_top  img{width:100px;height:100px;border-radius:50%;vertical-align:top;}
.tjan{display: block;width:100%;height: 40px;line-height: 40px;text-align: center;color: white;background: #EC6941; border-radius: 30px; margin: 20px auto;}
.my_top ul{position:absolute;bottom:0;left:0;z-index:8;background:rgba(0,0,0,.6);height:40px;width:100%;color:white}
.my_top ul li{line-height:40px;float:left;width:50%;text-indent:10px}
.my_top ul li span{color:#EC6941}
</style>
