import PropTypes from 'prop-types'
import styles from './PeoplePage.module.css'
import { changeHTTP, getApiResource } from '../../utils/network'
import {useState, useEffect} from 'react'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImg, getPeoplePage } from '../../services/getPeopleData'
import PeopleList from '../../components/PeopleList'
import { withErrorApi } from '../../hoc/withErrorApi'
import { useQueryParams } from '../../hooks/useQueryParams'
import PeopleNavigation from '../../components/PeopleNavigation/PeopleNavigation'


const PeoplePage =({setErrorApi}) => {
  const [people, setPeople] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  
  const query = useQueryParams()
  const queryPage = query.get('page')
  // console.log(queryPage);

  const getApiPeople = async (url) => {
    const data = await getApiResource(url)
    if (data) {
     const chars = data?.results.map(({name, url})=> {
        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        return {
          name, 
          id,
          img
        }
      })
      console.log(data);
      setPeople(chars)
      setNextPage(changeHTTP(data.next))
      setPrevPage(changeHTTP(data.previous))
     
      setCurrentPage( getPeoplePage(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }

  }
  useEffect(()=> {
   getApiPeople(API_PEOPLE)
    // console.log(apiPeople)
  }, [])

  return (
    <>
    <PeopleNavigation 
    nextPage={nextPage}
    prevPage={prevPage}
    currentPage={currentPage}
    getApiPeople={getApiPeople}
    />
        <h2> PeoplePage </h2>
  <PeopleList people={people}/>
    </>

)
}

PeoplePage.propTypes = {
text: PropTypes.string
}
export default withErrorApi(PeoplePage)
