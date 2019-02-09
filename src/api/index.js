import request from '@/request';

export function getMovies() {
  const data = {};
  return request({
    url: 'http://starlord.hackerearth.com/movies',
    method: 'get',
    data
  });
}
