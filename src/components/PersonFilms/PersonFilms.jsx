import PropTypes from 'prop-types'
import styles from './PersonFilms.module.css'
import { makeConcurrentRequests, changeHTTP } from '../../utils/network'
import { useState, useEffect } from 'react'
const PersonFilms =({personFilms}) => {
  const [filmsName, setFilmsName] = useState([])


  useEffect(()=> {
    (async() => {
      const filmsHTTP = personFilms.map( url => changeHTTP(url))
      const response = await makeConcurrentRequests(filmsHTTP)
      setFilmsName(response)
    })()
  },[])
  console.log(filmsName)
  return (
  <div className={styles.wrapper}>
    <ul className={styles.films__list}>
      { filmsName && 
          filmsName
            .sort((a,b) => a.episode_id - b.episode_id)
            .map(({title, episode_id})=> (
              <li className={styles.film__item} key={episode_id}>
                  <span className={styles.film__episode}>Episode: {episode_id}</span>
                  <span>{title}</span>
              </li>
            ))
        
      }
    </ul>
  </div>
)
}

PersonFilms.propTypes = {
text: PropTypes.string
}
export default PersonFilms
