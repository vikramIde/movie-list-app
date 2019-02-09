import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import filter from './modules/filter'
import home from './modules/home'
import app from './modules/app'

Vue.use(Vuex);

const storePlugins = [createLogger()];

const store = new Vuex.Store({
  plugins: storePlugins,
  modules: {
    app,
    filter,
    home
  }
});

export default store;
