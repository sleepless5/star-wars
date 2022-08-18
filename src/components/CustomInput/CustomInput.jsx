import PropTypes from 'prop-types'
import styles from './CustomInput.module.css'
import cn from 'classnames'
import icon from './img/cross.svg'
const CustomInput =({value, handleInputChange, placeholder, classes}) => (
  <div className={cn(styles.wrapper, classes)}>
    <input 
    type="text"
    value={value}
    onChange={(e) => handleInputChange(e.target.value)}
    placeholder={placeholder}
    className={styles.input}
    />
    <img 
    onClick={() => handleInputChange('')}
    className={styles.icon}
    src={icon} alt="cancel icon"/>
  </div>
)


CustomInput.propTypes = {
value: PropTypes.string,
handleInputChange: PropTypes.func,
placeholder: PropTypes.string,
classes: PropTypes.string
}
export default CustomInput
