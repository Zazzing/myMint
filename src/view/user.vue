<template>
	<div class="user">
		<mt-header title="我的">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		
		<!-- 登录 -->
		<div class="subhead">
			<mt-navbar v-model="selected">
			  	<mt-tab-item id="1">美团账号登录</mt-tab-item>
			  	<mt-tab-item id="2">手机验证登录</mt-tab-item>
			</mt-navbar>
		</div>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
		    	<form>
		    		<div class="loginList">		    			
	    				<div class="loginPadding">
	    					<input class="loginUser" type="email" placeholder="账户名/手机号/Email">
	    				</div>		    			
		    		</div>
		    		<div class="loginList">		    			
	    				<div class="loginPadding">
	    					<input class="loginUser" type="email" placeholder="请输入您的密码">
	    				</div>		    			
		    		</div>		    		
		    	</form>		    	
		  	</mt-tab-container-item>
		  	
		  	<mt-tab-container-item id="2">
		    	<form>
		    		<div class="loginList">		    			
	    				<div class="loginPadding">
	    					<input class="loginUser" type="text" placeholder="请输入手机号">
	    				</div>		    			
		    		</div>
		    		<div class="loginList">		    			
	    				<div class="loginPadding">
	    					<input class="loginUser" type="email" placeholder="请输入短信验证码">
	    				</div>		    			
		    		</div>		    		
		    	</form>
		  	</mt-tab-container-item>
		</mt-tab-container>
		<div class="loginBtn">
			<button type="submit" class="sumitBtn">登录</button>
		</div>	
		<ul class="subline">
    		<li>
    			<a href="">立即注册</a>
    		</li>
    		<li class="pull-right">
    			<a href="">找回密码</a>
    		</li>
    	</ul>	
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	selected:'1'
		    }
		}
	}
</script>

<style>
	.user .mint-header {
		font-size: 1.2rem;
		background-color: #FE4C40;
	}
	.mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 3px solid #FE4C40;
	    color: #FE4C40;
	}
	.loginList{
	    border-bottom: 1px solid #d6d6d6;
	}
	.loginPadding{
		padding: 0.85rem 0.85rem;
	}
	.loginUser{
		width: 100%;
		display: block;
		height: 2rem;
		margin: -0.15rem 0;
	    text-indent: 0.2rem;
	    font-size: 1.5rem;
	    border-radius: 0.2rem;
	    border: 0;
	    font-size: 0.8rem;
	}
	.loginUser:focus {
	    background: #ececec;
	    outline: 0;
	}
	.loginBtn{
		margin: 0.7rem 0.5rem;
	}
	.sumitBtn{
	    font-size: 1rem;
	    display: block;
    	width: 100%;
    	color: #fff;
    	background-color: #FE4C40;
    	border: 0;
    	padding: 0.6rem 3rem;
    	border-radius: 0.2rem;
    	text-align: center;
    	vertical-align: middle;
	}
	.subline {
	    margin: 0.28rem 0.5rem;
	}
	ul{
	    list-style-type: none;
	    padding: 0;
	}
	.subline li {
	    display: inline-block;
	}
	.subline li a {
	    color: #FE4C40;;
	    font-size: 0.8rem;
	}
</style>