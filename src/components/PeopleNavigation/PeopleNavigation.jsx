import PropTypes from 'prop-types'
import styles from './PeopleNavigation.module.css'
import { API_PEOPLE } from '../../constants/api'
import { Link } from 'react-router-dom'
const PeopleNavigation =({currentPage, nextPage, prevPage, getApiPeople}) => {

  const handlePrev = () => {
    getApiPeople(prevPage)
  }
  const handleNext = () => {
         getApiPeople(nextPage)
  }
  return (
   <div className={styles.container}>
     <Link to={`/people/?page=${currentPage -1}`}>
       <button 
       disabled={!prevPage}
       onClick={handlePrev}>
        Prev
      </button>
     </Link>
      <Link to={`/people/?page=${currentPage+1}`}>
          <button
          disabled={!nextPage}
          onClick={handleNext}>
        next
      </button>
      </Link>
    
   </div>
)
}

PeopleNavigation.propTypes = {
text: PropTypes.string
}
export default PeopleNavigation
