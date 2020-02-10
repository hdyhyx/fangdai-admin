import request from '@/utils/request'

export function addHouseTax(data) { //房贷
  return request({
    url: '/Tax/saveTax',
    method: 'post',
    data
  })
}

export function addMortgage(data) {
  return request({
    url: '/mortgage/savePrincipal',
    method: 'post',
    data
  })
}

export function houseTaxList(data) {
  return request({
    url: '/Tax/query',
    method: 'post',
    data
  })
}
export function houseTaxDetail(data) {
  return request({
    url: '/Tax/queryTax',
    method: 'post',
    data
  })
}

export function mortgageTaxList(data) {
  return request({
    url: '/mortgage/query',
    method: 'post',
    data
  })
}
