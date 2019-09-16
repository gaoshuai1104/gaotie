import fetch from '../listjs/fetch'

// export function loginByUsername(data) {
//   return fetch({
//     url: 'http://49.235.155.249:8081/login',
//     method: 'post',
//     data
//   })
// }

export function getUserInfo(query) {
  return fetch({
    url: '/record',
    method: 'get',
    params: { query }
  })
}