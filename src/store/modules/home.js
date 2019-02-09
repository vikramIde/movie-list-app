import * as MutationTypes from '../mutationTypes';
import * as ActionTypes from '../actionTypes';
import {getMovies} from '@/api/index'; 
const state = {
  movieList:[],
  isDark:false
};

const getters = {
  getMovies: s => s.movieList
};

const actions = {
  [ActionTypes.ASYNC_GET_MOVIE_LIST]({ commit }, payload) {
  	return getMovies()
  	.then(res=>{
  		commit(MutationTypes.SET_MOVIE_LIST, res.data);
  	})
  }
};

const mutations = {
  [MutationTypes.SET_MOVIE_LIST](_, payload) {
    state.movieList = payload
  },
  [MutationTypes.SET_DARK](_, payload) {
    state.isDark = payload
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
