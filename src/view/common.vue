<template>
	<div class="public">
		<router-view></router-view>
		<!-- 固定的尾部 -->
		<mt-tabbar>
			<mt-tab-item id="影院">
			  	<router-link to="/film">
				  	<i class="fa fa-camera-retro"></i>
				   	影院
				</router-link>
			</mt-tab-item>
			
		  	<mt-tab-item id="我的">
			  	<router-link to="/user">
				  	<i class="fa fa-user"></i>
				   	我的
				</router-link>
			</mt-tab-item>
		</mt-tabbar>
		<!-- 固定的回到顶部按钮 -->
		<div class="back-to-top" @click="gotoup" ref="myback" v-if="visible">
			<i class="fa fa-chevron-up"></i>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				visible:false
			}
		},
		methods:{
			//判断是否显示回到顶部按钮
			goup(){
				let that = this;
				this.visible = false;
				// console.log(document.body.scrollTop)
				if (document.body.scrollTop > 350) {
		        	that.visible = true;
		        }
		        else {
		        	that.visible = false;
			    }
			},
			//回到顶部函数
			gotoup(){
				var sheight = document.body.scrollTop = 0; //让页面滚动距离为零
			}
		},
		mounted(){
			window.addEventListener('scroll', () => {
				this.goup();   
			})
		}
	}
</script>

<style>
	/*脚部*/
    .public .mint-tabbar{
    	position: fixed;
    	background-color: #fafafa;
    	color: #8a869e;
    }
    .public .mint-tab-item-label{
    	font-size: 1rem;
    }
    .public .mint-tabbar i{
    	display: block;
    	margin: 0.2rem 0;
    }
    .public a{
		display: block;
		text-decoration: none;
		color: inherit;
	}
	.public a:focus,a:focus i{
		color: #FE4C40;
	}
    /*回到顶部*/
	.public .back-to-top{
		position: fixed;
		bottom: 16rem;
		right: 0.1rem;
		background: yellow;
		z-index: 2;
		text-align: center;
		color: white;
		background-color: #FE4C40;
		opacity: 0.8;
	}
	.public .back-to-top i{
		display: block;
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
	}
</style>