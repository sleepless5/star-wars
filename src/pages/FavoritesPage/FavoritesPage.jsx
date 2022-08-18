import PropTypes from 'prop-types'
import styles from './FavoritesPage.module.css'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import PeopleList from '../../components/PeopleList'
const FavoritesPage =() => {
  const storeData = useSelector(state => state.favoriteReducer)
    const [favorites, setFavorites] = useState([])

    useEffect(()=> {
      const arr = Object.entries(storeData)
      if (arr.length) {
        const res = arr.map( item => {
          return {
            id: item[0],
            ...item[1]
          }
        })
        setFavorites(res)
      }
    },[])
    console.log(favorites)
  return (
  <>
   <PeopleList people={favorites} />
  </>
)
}

FavoritesPage.propTypes = {
text: PropTypes.string
}
export default FavoritesPage
