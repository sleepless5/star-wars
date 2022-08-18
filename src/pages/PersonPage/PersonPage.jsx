import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import styles from './PersonPage.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import { getApiResource } from '../../utils/network'
import {API_PEOPLE} from '../../constants/api'
import { useEffect, useState } from 'react'
import { withErrorApi } from '../../hoc/withErrorApi'
import { getPeopleImg } from '../../services/getPeopleData'
import Loader from '../../components/Loader/img/Loader'
import favoriteIcon from './img/favorite.png'
import yellowFavoriteIcon from './img/yellow.png'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite, removeFavorite } from '../../store/actions'
const PersonFilms = React.lazy(()=> import('../../components/PersonFilms/PersonFilms'))




const PersonPage =({setErrorApi}) => {
  const storeData = useSelector(state =>state.favoriteReducer)
  const dispatch=useDispatch()
  const {id} = useParams()
  const [personName, setPersonName] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const navigate = useNavigate()

  const dispatchFavorite = () => {
    if (personFavorite) {
      dispatch(removeFavorite(id))
      setPersonFavorite(false)
    } else {
      dispatch(setFavorite({
        [id]: {
          name: personName,
          img: personPhoto
        }
      }))
      setPersonFavorite(true)
    }
  }

  useEffect(()=> {
    (async ()=> {
      const res = await getApiResource(API_PEOPLE+'/'+id)
      storeData[id] ? setPersonFavorite(true)
                    : setPersonFavorite(false)
      if (res){
        setErrorApi(false)
        setPersonName(res?.name)
        setPersonInfo([
            {title: "height", data: res.height},
            {title: "mass" , data: res.mass},
            {title: "hair_color", data: res.hair_color},
            {title: "skin_color", data: res.skin_color},
            {title: "birth year", data: res.birth_year},
            {title: "gender", data: res.gender}
        ])
        setPersonPhoto(getPeopleImg(id))
        res.films.length && setPersonFilms(res.films)
      } else {
        setErrorApi(true)
      }
    })()
  },[])
console.log(storeData)
  return (
    <>
    <div className={styles.nav__container}>
      <a href="#" 
      onClick={(e) => {
        e.preventDefault();
        navigate(-1)
      }}
      className={styles.back__link}
      >
       go back 
      </a> <br/><br/>
      

    
          {/* <p>{personInfo[0]?.data}</p> */}
    </div>
    <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <div className={styles.photo__container}>
          <img src={personPhoto} alt={personName} 
            className={styles.person__photo}
          />
             <img className={styles.icon} src={personFavorite ? yellowFavoriteIcon : favoriteIcon} alt=""
             onClick={dispatchFavorite}
             />
          </div>
       
        <div className={styles.info__container}>
          {
            personInfo?.map(({title, data}) => (
              <p className={styles.info__text}><span className={styles.info__title}>{title}:</span>{data}</p>
            ))
          }
        </div>
        {
          personFilms && (
          <Suspense fallback={<Loader/>}>
                    <PersonFilms personFilms={personFilms}/>
          </Suspense>

          )
    
        }
    </div>
            </div>
      </>
)
}

PersonPage.propTypes = {
text: PropTypes.string
}
export default withErrorApi(PersonPage)
