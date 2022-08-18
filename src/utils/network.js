import {
  HTTP,
  HTTPS
} from '../constants/api'


export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.log(res.status)
      return false
    }
    return await res.json()
  }
  catch (err) {
    console.log(err)
    return false
  }
}
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url
  return result
}

export const makeConcurrentRequests = async (url) => {
  const res = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json())
  }))
  return res
}