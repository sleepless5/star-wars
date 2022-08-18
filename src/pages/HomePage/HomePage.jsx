import PropTypes from 'prop-types'
import styles from './HomePage.module.css'
import ChooseSide from '../../components/ChooseSide'
const HomePage =() => {
  return (
 <>
 <ChooseSide/>
 </>
)
}

HomePage.propTypes = {
text: PropTypes.string
}
export default HomePage
