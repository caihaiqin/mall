import {
  request
} from './request'

export function getHomeMultidata() {
  return request({
    url: '/malldata.json'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/goods.json',
    params: {
      type,
      page
    }
  })
}
