import {
  pcaa
} from './cityCode'
export const findCityName = (provincesCode, cityCode) => {
  console.log(provincesCode, cityCode)
  return pcaa[provincesCode][cityCode]
}
