import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const PeopleList =({people}) => {
  return (
    <div className={styles.people__container}>
      { people.map(({name, id, img}) => (

        <div key={id} className={styles.people__card}>
          <Link to={`/people/${id}`}>
            <img src={img} className={styles.people__img} alt={name} />
            <p className={styles.people__name}>{name}</p>
          </Link>
          </div>

      ))}
    </div>
 

)
}

PeopleList.propTypes = {
text: PropTypes.string
}
export default PeopleList


// 1: {name: 'Luke Skywalker', img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'}
// 5: {name: 'Leia Organa', img: 'https://starwars-visualgui
