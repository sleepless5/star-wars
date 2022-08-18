import PropTypes from 'prop-types'
import styles from './SearchPage.module.css'
import {useEffect, useState, useCallback} from 'react'
import { getApiResource } from '../../utils/network'
import { withErrorApi } from '../../hoc/withErrorApi'
import { API_SEARCH } from '../../constants/api'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import SearchResults from '../../components/SearchResults/SearchResults'
import { debounce } from 'lodash'
import CustomInput from '../../components/CustomInput/CustomInput'


const SearchPage =({setErrorApi}) => {
  const [search, setSearch] = useState('')
  const [people, setPeople] = useState(null)

  const getResponse = async (params) => {
    console.log(params)
    const res = await getApiResource(API_SEARCH + params)
    // https://swapi.dev/api/people/?search=r2
    if(res) {
      const peopleList = res.results.map(({name, url}) => {
        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        return {
            id, 
            name,
            img
        }
      })
      setPeople(peopleList)
      console.log(people);
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
  useEffect(()=> {
      getResponse('')
  },[])

  const debouncedGetResponse = useCallback(
      debounce(value => getResponse(value), 300), []
  )
  
  debounce(value => getResponse(value), 300)  

  

  const handleInputChange = (value)=> {
 
    setSearch(value)
    debouncedGetResponse(value)

  }
       
  return (
    <>
      <h1>Search</h1>
      <CustomInput 
      value={search}
      handleInputChange={handleInputChange}
       placeholder="search character"
      />
    

      <SearchResults people={people} />
    </>

)
}

SearchPage.propTypes = {
setErrorApi: PropTypes.func
}
export default withErrorApi(SearchPage)
