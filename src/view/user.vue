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
		    			<div class="">
		    				<div>
		    					<input class="loginUser" type="email" placeholder="账户名/手机号/Email">
		    				</div>
		    			</div>
		    		</div>
		    		<div class="loginBtn"></div>
		    	</form>
		  	</mt-tab-container-item>
		  	
		  	<mt-tab-container-item id="2">
		    	
		  	</mt-tab-container-item>
		</mt-tab-container>		
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
</style>