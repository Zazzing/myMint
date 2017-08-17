<template>
	<div class="film">
		<mt-header title="影院">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		222
	</div>
</template>

<script>
	import Vue from 'vue'
	import {api} from '../global/api';
	export default {
		data () {
		    return {
		    	
		    }
		},
		methods:{
			getLists(){
	    		let that = this
		      	this.$http.get(api.in_coming).then(response  => {
		      		console.log("请求成功了");
		      		// console.log(response.data);
		      	}, response => {
		      		console.log("请求失败了");
	      		})
	      	}
		},
		mounted(){
			//传递数据到页面
			this.getLists();
		}
	}
</script>
<style>
	.film .mint-header {
		font-size: 1.2rem;
		background-color: #FE4C40;
	}
</style>