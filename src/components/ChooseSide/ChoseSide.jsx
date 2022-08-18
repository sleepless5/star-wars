import PropTypes from 'prop-types'
import styles from './ChooseSide.module.css'
import { useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL
} from '../../context/ThemeProvider'
import DarkSideImg from './img/dark-side.jpg'
import LightSideImg from './img/light-side.jpg'
import NeutralSideImg from './img/falcon.jpg'
import cn from 'classnames'

const ChooseSideItem = ({
    theme,
    text,
    img,
    classes
}) => {
  const isTheme = useTheme()
  return (
    <div className={cn(styles.item, classes)}
      onClick={()=> isTheme.change(theme)}>
        <div className={styles.item__header}>{text}
        </div>
        <img src={img} className={styles.item__img}> 
        </img>
    </div>
  )
}
ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string

}

const ChooseSide =() => {
    const elements = [
    {
      theme: THEME_LIGHT,
      text: "light side",
      img: LightSideImg,
      classes: styles.item__light
    },
        {
      theme: THEME_DARK,
      text: "dark side",
      img: DarkSideImg,
     classes: styles.item__dark
    },
        {
      theme: THEME_NEUTRAL,
      text: "neutral side",
      img: NeutralSideImg,
      classes: styles.item__neutral
    },
  ]

  return (
    <div className={styles.container}>

      {
        elements.map((item, i) => (
          <ChooseSideItem 
              key={i}
              theme={item.theme} 
              text={item.text}
              img={item.img}
              classes={item.classes}
              />
        ))
      }
      </div>
  )
  
  }


ChooseSide.propTypes = {
text: PropTypes.string
}
export default ChooseSide
