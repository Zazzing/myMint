<template>
	<div class="detail">
		<mt-header title="详情页" fixed>
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		
		<!-- 电影详情 -->
		<div class="movieDetails">
			<div class="movie-container">
				<div class="moviePoster">
					<a href="">
						<img src="https://p1.meituan.net/movie/4ddfd25f99b14400c6bbbca62beffa10214626.jpg@177w_249h.webp">
					</a>
				</div>
				<div class="movieContent">
					<p class="movieTitle">杀破狼·贪狼</p>
					<p>Paradox</p>
					<div class="movieRate">
						<p>
							<img src="https://ms0.meituan.net/canary/img/star-full-new.png">
							<span>(</span>
							<span>3.6</span>
							<span>万人评分)</span>
						</p>
						<p>剧情,动作,犯罪</p>
						<p>
							<span>中国大陆,中国香港</span>
							<span>/</span>
							<span>101分钟</span>
						</p>
						<p>2017-08-17大陆上映</p>
					</div>
				</div>
			</div>
			<div class="movie-review">
				<a href="">
					<span>立即购买</span>
				</a>
				<div class="movie-notes">
					<p>
						香港警察李忠志（古天乐 饰）得知女儿芝（陈汉娜 饰）于泰国旅游间莫名失踪，即亲赴泰国报警求助。负责案件的华人探员崔杰（吴樾 饰），应允让他一同调查，却想不到忠志利用传媒呼吁市民提供线索。一条意外拍下芝被捉走的片段上载至警方网站，却被神秘删除。崔杰即连同好友兼同袍阿德（托尼·贾 饰）同赴寻找片主，却遇神秘人马截足灭证，狭路相逢，展开追截并与之搏斗。忠志与崔杰两人逐步调查，终发现案中有案，并开始意识凶手背后神秘势力非他们能对付……
					</p>
				</div>
			</div>
		</div>
			
		<!-- 演员列表  -->
		<div class="movieArtists">
			<ul class="movie-celebrities">
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span class="actorName">叶伟信</span>
					<span class="actorType">导演</span>
				</li>
			</ul>
		</div>

		<!-- 热门评论 -->
        <div class="movieComments">
        	<h2>热门评论</h2>
        	<ul class="comments-list">
        		<li>
        			<div class="comment">
        				<div class="commentRate">
        					<img src="https://ms0.meituan.net/canary/img/star-full-new.png">
        					<span>3天前</span>
        				</div>
        				<div class="commentCon">
        					<p>那个编剧 我儿豁嘛 脑壳有毛病 给别个屋头写死完了 女儿死了蛮古天乐就孤家寡人一个嘛 他鼓捣还要把古天乐写死我不晓得他有好仇恨这个世界 活着不好吗 硬是看到恼火诶 老婆出车祸死了 女子死了 留个古天乐蛮也好纪念(祭奠)哈别个屋头人嘛 硬是鼓捣给别个写死完 他妈卖批恼火蛮一天</p>
        				</div>
        				<div class="commentFooter">
        					<img src="https://img.meituan.net/avatar/24a317c91142a28ab9d84de50941dd8419771.jpg">
        					<span class="nick">omggggggg丶</span>
        					<span class="tags">购</span>
        				
        					<div class="pull-right">
        						<a href="">
        							<i class="fa fa-thumbs-o-up"></i>
        							<span>1456</span>
        						</a>
	        					<a href="">
	        						<i class="fa fa-commenting-o"></i>
	        						<span>105</span>
	        					</a>
	        				</div>
        				</div>
        			</div>
        		</li>
        		<li>
        			<div class="comment">
        				<div class="commentRate">
        					<img src="https://ms0.meituan.net/canary/img/star-full-new.png">
        					<span>3天前</span>
        				</div>
        				<div class="commentCon">
        					<p>那个编剧 我儿豁嘛 脑壳有毛病 给别个屋头写死完了 女儿死了蛮古天乐就孤家寡人一个嘛 他鼓捣还要把古天乐写死我不晓得他有好仇恨这个世界 活着不好吗 硬是看到恼火诶 老婆出车祸死了 女子死了 留个古天乐蛮也好纪念(祭奠)哈别个屋头人嘛 硬是鼓捣给别个写死完 他妈卖批恼火蛮一天</p>
        				</div>
        				<div class="commentFooter">
        					<img src="https://img.meituan.net/avatar/24a317c91142a28ab9d84de50941dd8419771.jpg">
        					<span class="nick">omggggggg丶</span>
        					<span class="tags">购</span>
        				
        					<div class="pull-right">
        						<a href="">
        							<i class="fa fa-thumbs-o-up"></i>
        							<span>1456</span>
        						</a>
	        					<a href="">
	        						<i class="fa fa-commenting-o"></i>
	        						<span>105</span>
	        					</a>
	        				</div>
        				</div>
        			</div>
        		</li>
        	</ul>
        </div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {api} from '../global/api';
	export default {
		data () {
		    return {
		    	id:null,
		    	movieDatas:''
		    }
		},
		methods:{
			getId(){
				this.id = this.$route.params.movieID
				console.log(this.id)
			},
			getLists(){
	    		let that = this
	    		//正在上映
		      	this.$http.get('/v2/movie/subject/26363254').then(response  => {
		      		console.log("请求成功了3");
		      		// console.log(response.data);
		      		that.movieDatas = response.data
		      		console.log(that.movieDatas);
		      	}, response => {
		      		console.log("请求失败了");
	      		})
	      	}

		},
		mounted(){
			this.getId()
			this.getLists()
		}
	}
</script>

<style>
	.detail{
		line-height: 1;
		margin-bottom: 3.3rem;
		background: #f4f4f4;
	}
	.detail p,h2{
		margin: 0;
		padding: 0;
	}
	.detail ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	/*头部*/
	.detail .mint-header {
		font-size: 1.2rem;
		background-color: #FE4C40;
	}
	/*电影详情*/
	.detail .movieDetails{
		position: relative;
		margin-top: 3rem;	
	}
	.detail .movie-container{
		overflow: hidden;
		color: #fff;
		background-color: #40454d;
    	opacity: 0.9;
		padding:1rem;
	}
	.detail .moviePoster{
		float:left;
		width: 8rem;
    	border: solid 1px #f0f2f3;
	}
	.detail .moviePoster img{
		width: 100%;
		height:100%;
	}
	.detail .movieContent{
	    margin-left: 8rem;
	    padding-left: 1rem;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    font-size: 0.7rem;
	}
	.detail .movieContent p{
		margin-top: 0.6rem;
    	margin-bottom: 0.6rem;
	}
	.detail .movieTitle{
		font-size: 1rem;
	}
	.detail .movieRate img{
		width: 1rem;
		display: block;
		margin-bottom: 0.2rem;
	}
	/*电影简介*/
	.detail .detail .movie-review{
		background-color: white;
		padding:1rem;
		border-bottom: 1px solid #e5e5e5;
		margin-bottom: 1rem;
	}
	.detail .movie-review a{
		display: block;
		background: #FE4C40;
		padding: 0.7rem;
		text-align: center;
		color: white;
		border-radius: 4px;
		margin-bottom: 0.5rem;
	}
	.detail .movie-notes{
		line-height: 1.5rem;
		font-size: 0.9rem;
	}
	/*演员列表*/
	.detail .movieArtists{
		background: white;
    	white-space: nowrap;
    	margin-bottom: 1rem;  
    	border: 1px solid #e5e5e5;  
	}
	.detail .movieArtists ul{
		padding: 1rem 0.2rem 0.2rem 1rem;
		overflow-x: scroll;
		box-sizing: border-box;
	}
	.detail .movieArtists li:first-child {
    	padding-left: 0;
	}
	.detail .movieArtists li {
	    padding: 0 0.03rem;
	    text-align: center;
	    display: inline-block;
	}
	.detail .movieArtists li img{
	    width: 7.2rem;
	}
	.detail .movieArtists li span{
	    display: block;
	}
	.detail .movieArtists .actorName{
		margin-top: 0.2rem;
		font-size: 1rem;
	}
	.detail .movieArtists .actorType {
    	font-size: 0.6rem;
    	margin: 0.2rem 0 0.2rem 0;
    	color: #999;
	}
	/*热门评论*/
	.detail .movieComments{
		background: white;
		border: 1px solid #e5e5e5;
	}
	.detail .movieComments h2{
		color: #666;
	    font-size: 1rem;
	    padding: 1rem 1rem;
	    border-bottom: 1px solid #e5e5e5;
	}
	.detail .movieComments ul{
		margin: 0 1rem;
	}
	.detail .movieComments ul li{
		padding: 0.5rem 0rem;
		border-bottom: 1px solid #e5e5e5 ;
	}
	.detail .commentRate{
		font-size: 1rem;
	}
	.detail .commentRate img{
		width: 1rem;
   		height: 1rem;
   		margin-right: 0.2rem;
	}
	.detail .commentRate span{
		color: #999;
	}
	.detail .commentCon{
	    margin-top: 0.2rem;
	    margin-bottom: 0.2rem;
	}
	.detail .commentCon p{
	    font-size: 0.8rem;
	    line-height: 1.7;
	    text-align: justify;
	    word-wrap: break-word;
	}
	.detail .commentFooter{
		margin-top: 0.5rem;
	    margin-bottom: 0.2rem;
	    line-height: 1.3rem;
	}
	.detail .commentFooter img{
		float: left;
	    width: 1.58rem;
	    border-radius: 50%;
	    display: inline-block;
	    margin-right: 0.4rem;
	}
	.detail .commentFooter span{
		display: inline-block;
	    color: #999;
	    font-size: 0.8rem;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
	}
	.detail .tags{
		color: white !important;
	    font-size: 0.7rem;
	    border-radius: 2px;
	    background: #ff9900;
	    padding: 1px 2px;
	}
	.detail .pull-right{
		float:right;
	}
	.detail .pull-right a{
		color: #999;
	    margin-right: 0.1rem;
	    display: inline-block;
	}
	.detail .pull-right a i,.pull-right a span{
		vertical-align: middle;
	}


</style>