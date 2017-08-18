<template>
	<div class="detail">
		<mt-header title="详情页">
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
					<span>叶伟信</span>
					<span>导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span>叶伟信</span>
					<span>导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span>叶伟信</span>
					<span>导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span>叶伟信</span>
					<span>导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span>叶伟信</span>
					<span>导演</span>
				</li>
				<li>
					<a href="">
						<img src="https://p0.meituan.net/movie/784df6b879229cab0617d0ed2bc2225654406.jpg@130w_180h.webp">
					</a>
					<span>叶伟信</span>
					<span>导演</span>
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

			// getId(){
			// 	this.id = this.$route.params.movieID
			// 	console.log(this.id)
			// },
			// getLists(){
	  //   		let that = this
	  //   		//正在上映
		 //      	this.$http.get('/v2/movie/subject/26363254').then(response  => {
		 //      		console.log("请求成功了");
		 //      		// console.log(response.data);
		 //      		that.movieDatas = response.data
		 //      		console.log(that.movieDatas);
		 //      	}, response => {
		 //      		console.log("请求失败了");
	  //     		})
	  //     	}

		},
		mounted(){
			// this.getId()
			// this.getLists()
		}
	}
</script>

<style>
	.detail{
		line-height: 1;
	}
	.detail p{
		margin: 0;
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
		background: #f4f4f4;
		position: relative;
	}
	.detail .movie-container{
		overflow: hidden;
		color: #fff;
		background-color: green;
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
	    font-size: 0.9rem;
	}
	.detail .movieContent p{
		margin-top: 0.6rem;
    	margin-bottom: 0.6rem;
	}
	.detail .movieTitle{
		font-size: 1.34rem;
	}
	.movieRate img{
		width: 1rem;
		display: block;
		margin-bottom: 0.2rem;
	}
	/*电影简介*/
	.detail .movie-review{
		background-color: yellow;
		padding:1rem;
	}
	.detail .movie-review a{
		display: block;
		background: #e54847;
		padding: 0.7rem;
		text-align: center;
		color: white;
		border-radius: 4px;
		margin-bottom: 0.5rem;
	}
	.movie-notes{
		line-height: 1.4rem;
	}
	/*演员列表*/
	.movieArtists{
		background: red;
    	white-space: nowrap;
    	/*overflow: hidden;*/
    	margin-bottom: 12rem;
	}
	.movieArtists ul{
		padding: 1rem 0rem 0.2rem 1rem;
		width: 100%;
		overflow-x: scroll;
	}
	.movieArtists li:first-child {
    	padding-left: 0;
	}
	.movieArtists li {
	    padding: 0 0.03rem;
	    text-align: center;
	    display: inline-block;
	}
	.movieArtists li img{
	    width: 5rem;
	}
	.movieArtists li span{
	    display: block;
	}


</style>