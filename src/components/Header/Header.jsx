import PropTypes from 'prop-types'
import styles from './Header.module.css'
import { NavLink, Link } from 'react-router-dom'
import DarkLogo from './img/darth-vader.png'
import LightLogo from './img/light-saber.png'
import NeutralLogo from './img/r2d2.png'
import favoriteTab from './img/favoriteTab.png'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL
 } from '../../context/ThemeProvider'
const Header =() => {
  const storeData = useSelector( state => state.favoriteReducer)
  const isTheme = useTheme()
  const [count, setCount] = useState("")
  const [logoIcon, setLogoIcon] = useState(LightLogo)
  
  useEffect(()=> {
     const length = Object.keys(storeData).length;
     setCount(length)
  })

  useEffect(()=> {
    switch (isTheme.theme) {
      case THEME_DARK:
        setLogoIcon(DarkLogo)
        break;

      case THEME_LIGHT:
      setLogoIcon(LightLogo)
      break; 
      
      case THEME_NEUTRAL:
      setLogoIcon(NeutralLogo)
      break;

      default:
            setLogoIcon(DarkLogo)
        break;
    }
  },[isTheme])
  return (
   <header className={styles.header}>
     <div className={styles.logo__container}>
        <img src={logoIcon} className={styles.logo} alt="" />
     </div>
     <nav>
       <ul className={styles.header__menu}>
         <li>
           <NavLink to="/">
              Home
           </NavLink>
         </li>
          <li>
           <NavLink to="/people/?page=1">
             People
           </NavLink>
         </li>
          <li>
           <NavLink to="/search">
             Search
           </NavLink>
         </li>
             <li>
           <NavLink to="/fail">
             Fail
           </NavLink>
         </li>
       </ul>
     </nav>

     <Link to='/favorites' className={styles.favorites__link}>
       <div className={styles.favorite__container}>
     
       
         <img src={favoriteTab} alt="" className={styles.favorite__icon} />
         <span className={styles.counter}> {count && count}
        </span>
     </div>
     </Link>
   
    
   </header>
)
}

Header.propTypes = {
text: PropTypes.string
}
export default Header
