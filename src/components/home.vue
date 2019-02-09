<template>
	<div :class="{ bgDark: isDark }">
		<b-row>
			<b-col cols="12" style="border: 1px solid black;padding:5px;">
				<label style="float:left;margin:10px">Filters</label>
				<b-form inline>
				  <label class="sr-only" for="inlineFormInputName2">Title</label>
				  <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Title" v-model="filterObject.movie_title"/>
				  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
				  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
				    <b-input id="inlineFormInputGroupUsername2" placeholder="Director Name" v-model="filterObject.director_name"/>
				  </b-input-group>
				  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
				    <b-input id="inlineFormInputGroupUsername2" placeholder="Actor Name" v-model="filterObject.actor_1_name"/>
				  </b-input-group>
				  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
				    <b-input id="inlineFormInputGroupUsername2" placeholder="Year" v-model="filterObject.title_year"/>
				  </b-input-group>

				  <b-form-checkbox v-model="allSelected"
                         @change="toggleMe"
         			style="float:right">Theme Dark?</b-form-checkbox>
				</b-form>
			</b-col>
		</b-row>
		<b-row>
			<b-col v-for="(item, $index) in paginatedData" :key="$index" style="margin-top: 10px" cols="4">
				<div>
				    <b-card :title="item.movie_title"
				            :sub-title="createSubtitle(item)">
				        <p class="card-text">
				           <strong>Directed by:</strong> {{item.director_name}}
				        </p> 
				        <p class="card-text">
				           <strong>Starring :</strong><br/> {{item.actor_1_name}}, {{item.actor_2_name}}
				        </p> 
				        <p class="card-text" style="word-wrap: break-word;">
				           <strong>Gener:</strong> {{item.genres}}
				        </p>
				        <a href="#"
				           class="card-link">Card link</a>
				        <b-link href="#"
				                class="card-link">Another link</b-link>
				    </b-card>
				</div>
			</b-col>
			<div class="float"><b-button @click="prevPage"> < </b-button>
				<b-button @click="nextPage"> > </b-button> 
			</div>
		</b-row>
	</div>

<!-- card-text-1.vue -->
</template>

<script >
	import InfiniteLoading from 'vue-infinite-loading';
	import { mapState } from 'vuex'
	export default {
	 components: {
	    InfiniteLoading,
	  },
	  data() {
	    return {
	      page: 1,
	      text:'',
	      list: [],
	      allSelected:'',
	      pageNumber: 0,
	      size:10,
	      filterObject:{  
		      "movie_title":"",
		      "director_name":"",
		      "actor_1_name":"",
		      "actor_2_name":"",
		      "genres":"",
		      "language":"",
		      "country":"",
		      "title_year":"",
		   },
	    };
	  },
	  methods: {
	  	createSubtitle(item){
	  		return item.content_rating+'  '+item.title_year+' '+item.country
	  	},
	  	toggleMe(val)
	  	{
	  		this.$store.commit('SET_DARK',val)
	  	},
		nextPage(){
			this.pageNumber++;
		},
		prevPage(){
			this.pageNumber--;
		}
	  },
	  computed: {
    	...mapState({
    		movieList: state => state.home.movieList,
    		isDark: state => state.home.isDark
    	}),
    	pageCount(){
      		let l = this.filteredMovieList.length,
	          s = this.size;
	      	return Math.floor(l/s);
	    },
	    paginatedData(){
			const start = this.pageNumber * this.size,
			    end = start + this.size;
			return this.filteredMovieList
			       .slice(start, end);
    	},
    	filteredMovieList(){
    		let f = this.filterObject
    		return this.movieList.filter(m=>{
    			let x = true
    			if(f.movie_title !='')
    				x =  x && m.movie_title.toLowerCase().includes(f.movie_title.toLowerCase())
    			if(f.director_name !='')
    				x =  x && m.director_name.toLowerCase().includes(f.director_name.toLowerCase())
    			 if(f.actor_1_name !='')
    				 x =  x && m.actor_1_name.toLowerCase().includes(f.actor_1_name.toLowerCase())
    			 if(f.actor_1_name !='')
    				 x =  x &&  m.actor_2_name.toLowerCase().includes(f.actor_1_name.toLowerCase())
    			if(f.title_year !='')
    				x = x &&m.title_year.toLowerCase().includes(f.title_year.toLowerCase())
    			return x 
    		})
    	}
	   },
	 created(){
		this.$store.dispatch('ASYNC_GET_MOVIE_LIST')
		.then(res=>{
		})
	 }
	};
</script>
<style type="text/css">
	.float{
	position: fixed;
    width: 81px;
    height: 39px;
    bottom: 31px;
    right: 40px;
    background-color: #0AF;
    color: #FFF;
    text-align: center;
    -webkit-box-shadow: 2px 2px 3px #999;
    box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}
</style>