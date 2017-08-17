<template>
	<!-- 首页 -->
	<div class="first">
		<!-- 固定的头部 -->
		<div>
			<mt-header fixed title="Go影院">
			</mt-header>
			<mt-search
				v-model="value"
				cancel-text="取消"
				placeholder="搜索">
			</mt-search>
		</div>		
		<!-- 轮播图 -->
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(item,index) in swiperSlides" :style="{backgroundImage:'url('+item+')'}">
			  </mt-swipe-item>
			</mt-swipe>
		</div>		
		<!-- 正在上映和即将上映部分 -->
		<div class="subhead" :style="styletype">
			<mt-navbar v-model="selected">
			  	<mt-tab-item id="1">正在上映</mt-tab-item>
			  	<mt-tab-item id="2">即将上映</mt-tab-item>
			</mt-navbar>
		</div>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<!-- 正在上映内容 -->
			<mt-tab-container-item id="1">
		    	<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		    		<div class="boderline" v-for="item in showingDates">
			    		<li>
			    			<div class="poster" :style="{backgroundImage:'url('+item.images.large+')'}"></div>
			    			<div class="content">
			    				<h2>
			    					{{ item.title }}
			    					<i></i>
			    					<i></i>
			    				</h2>
			    				<!-- <p class="score"></p> -->
			    				<p>类型：<span v-for="(items,key) in item.genres">{{ items+' ' }}</span></p>
	                            <p>导演：<span v-for="(items,key) in item.directors">{{ items.name+' ' }}</span></p>
	                            <p>主演：<span v-for="(items,key) in item.casts">{{ items.name+' ' }}</span></p>
	                            <!-- <div class="hot"></div>
	                            <div class="mounted"></div> -->
			    			</div>
			    		</li>
			    	</div>
		    	</ul>
		  	</mt-tab-container-item>
		  	<!-- 即将上映内容 -->
		  	<mt-tab-container-item id="2">
		    	<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		    		<div class="boderline" v-for="item in comingDates">
			    		<li>
			    			<div class="poster" :style="{backgroundImage:'url('+item.images.large+')'}"></div>
			    			<div class="content">
			    				<h2>
			    					{{ item.title }}
			    					<i></i>
			    					<i></i>
			    				</h2>
			    				<!-- <p class="score"></p> -->
			    				<p>类型：<span v-for="items in item.genres">{{ items+' ' }}</span></p>
	                            <p>导演：<span v-for="items in item.directors">{{ items.name+' ' }}</span></p>
	                            <p>主演：<span v-for="items in item.casts">{{ items.name+' ' }}</span></p>
	                            <!-- <div class="hot"></div>
	                            <div class="mounted"></div> -->
			    			</div>
			    		</li>
			    	</div>
		    	</ul>
		  	</mt-tab-container-item>
		</mt-tab-container>		
	</div>
</template>

<script>
	// import Vue from 'vue'
	import {api} from '../global/api';
	export default {
		data () {
		    return {
		    	value:'',
		    	selected:'1',
		        swiperSlides:[
		            'https://gw.alicdn.com/tfs/TB1uymVSpXXXXXVaVXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg',
		            'https://gw.alicdn.com/tfs/TB1WPHfSpXXXXclaFXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg',
		            'https://gw.alicdn.com/tfs/TB1q7_4SpXXXXcNXpXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg'
		        ],
		        styletype:{
		        	position:'absolute',
		        	top:'15rem'
		        },
		        // 正在上映的数据
		    	showingDates:null,
		    	// 即将上映的数据
		    	comingDates:null,
		    	loading:false
		    }
		},
		methods:{
			getLists(){
	    		let that = this
	    		//正在上映
		      	this.$http.get(api.in_showing).then(response  => {
		      		console.log("请求成功了");
		      		// console.log(response.data.subjects);
		      		that.showingDates = response.data.subjects;
		      		console.log(that.showingDates);
		      	}, response => {
		      		console.log("请求失败了");
	      		})
	      		//即将上映
	      		this.$http.get(api.in_coming).then(response  => {
		      		console.log("请求成功了");
		      		// console.log(response.data.subjects);
		      		that.comingDates = response.data.subjects;
		      		console.log(that.comingDates);
		      	}, response => {
		      		console.log("请求失败了");
	      		})
	      	},
			loadMore() {
			  this.loading = true;
			  // setTimeout(() => {
			  //   let last = this.list[this.list.length - 1];
			  //   for (let i = 1; i <= 10; i++) {
			  //     this.list.push(last + i);
			  //   }
			  //   this.loading = false;
			  // }, 2500);
			},
			// 向上滑动时，固定住副导航条
			gofixed(){
				let that = this
				// console.log(that.styletype.position)
				// console.log(that.styletype.top)
			    // console.log(document.body.scrollTop) 打印出滚动的距离
				if (document.body.scrollTop > 168) {
		        	that.styletype.position = 'fixed';
		        	that.styletype.top = '5.65rem';
		        }
		        else {
			        that.styletype.position = 'absolute';
		        	that.styletype.top = '15rem';
			    }
			}
		},
		mounted(){
			//传递数据到页面
			this.getLists();
			//回到顶部按钮不显示
			this.visible = false;
			// 向上滑动时，固定住副导航条
			window.addEventListener('scroll', () => {
				this.gofixed();
			})
		}
	}
</script>

<style>
	.first{
		overflow: hidden;
		max-width: 100%;
		position: relative;
	}
	.first .mint-header {
		font-size: 1.2rem;
		background-color: #FE4C40;
	}
	.first .mint-search {
	    position: fixed;
	    z-index: 2;
	    left: 0;
	    right: 0;
	    top: 0;
	    height: auto;
	    margin-top: 40px;
	}
	.first .mint-searchbar {
		background-color: #FE4C40;
	}
	.first .mint-searchbar-inner {
		height: 20px;
    	padding: 7px 6px;
	}
	.first .mint-searchbar-inner .mintui-search {
	     font-size: 1rem; 
	}
	.first .mint-searchbar-cancel {
	    color: white;
	}
	.first .mint-tab-item-label {
	    font-size: 0.9rem;
	}
	.first .banner{
		margin-top:90px;
		padding-top: 0;
		height: 10rem;  /*与下面的top有关联*/
		overflow: hidden;
	}
	.first .mint-swipe-item{
        width: 100%;
        height: 100%;
        /*background-size: 100% 100%;*/
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .first .mint-navbar .mint-tab-item.is-selected {
        color: #FE4C40;
        border-bottom: 3px solid #FE4C40;
    }
    /*正在上映和即将上映*/
    .first .subhead{
    	width: 100%;
    	z-index: 1;
    	left: 0;
    	top: 15rem; /*与下面的margin-top有关联*/
    }
    /*正在上映*/
    .first ul{
    	list-style-type: none;
    	padding-left: 0;
    	margin-top: 4rem;
    }
    .first ul .boderline{
		border-bottom: 1px #DCDCDC solid;
    }
    .first ul:last-child{
		border-bottom: none;     /*最后一个元素没有底部边界*/
    }
    .first li{
    	height: 10rem;
    	margin-top: 2rem;
    	/*padding-bottom: 2rem;
    	padding-left: 1rem;*/
    	padding: 0 0 2rem 1rem
    }
    .first .poster{
    	width: 7rem;
    	height: 100%;
    	display: inline-block;
    	background-size: cover;
    	background-position: center center;
    }
    .first .content{
    	height: 100%;
        float: right;
        width: calc(100% - 8rem);
        padding:0 0.32rem 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .first .content h2{
    	margin: 1rem 0 0 0;
    	font-size:1rem;
    }
    .first .content p{
        color: #8a869e;
        font-size:0.4375rem;
        padding-top: 0.2rem;
    }

</style>