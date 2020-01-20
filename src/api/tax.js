import request from '@/utils/request'

export function addMortgage(data) { //房贷
  return request({
    url: '/Tax/saveTax',
    method: 'post',
    data
  })
}
