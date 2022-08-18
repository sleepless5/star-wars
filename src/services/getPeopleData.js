import {
  HTTP,
  HTTPS,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  GUIDE_ROOT_IMG,
  GUIDE_IMG_EXTENSION,
  SWAPI_PARAM_PAGE

} from '../constants/api'

export const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, '')
  return id
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = (id) => {
  const imageUrl = `${GUIDE_ROOT_IMG}${id}${GUIDE_IMG_EXTENSION}`
  return imageUrl
}

export const getPeoplePage = (url) => {
  const pos = url.indexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)
  return (Number(id))
}
