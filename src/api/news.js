import request from '@/utils/request'

export function addNews(data) {
  return request({
    url: '/appNews/add',
    method: 'post',
    data
  })
}

export function newsList(data) {
  return request({
    url: '/appNews/queryPage',
    method: 'post',
    data
  })
}

export function deleteNews(data) {
  return request({
    url: '/appNews/delete',
    method: 'post',
    data
  })
}

export function detailNews(data) {
  return request({
    url: '/appNews/getNews',
    method: 'post',
    data
  })
}
