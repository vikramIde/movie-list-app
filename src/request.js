import Vue from 'vue';
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://starlord.hackerearth.com/', // api base_url
  timeout: 30000 // request timeout
})






export default service