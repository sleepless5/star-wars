import PropTypes from 'prop-types'
import styles from './SearchResults.module.css'
import { Link } from 'react-router-dom'
const SearchResults =({people}) => {
  return (
  <div>
    {
      people?.length
        ? (
          <ul className={styles.container}>
            {people.map(({id, name, img}) => {
              return (
                  <li key={id} className={styles.list__item}>
                    <Link to={`/people/${id}`}
                     className={styles.link}
                    >
                 
                  <img
                    className={styles.list__img}
                  src={img} alt={name}/>
                  <p className={styles.list__name}>{name}</p>
                     </Link>
              </li>
              )
            
            })}
          </ul>
        )
        : <h2>  no results</h2>

    }
  </div>
)
}

SearchResults.propTypes = {
text: PropTypes.string
}
export default SearchResults
