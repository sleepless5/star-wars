import PropTypes from 'prop-types'
import styles from './FailPage.module.css'
import video from './video/video.mp4'
const FailPage =() => {
  return (
    <>
        <h2> FailPage </h2>
        <video
          playbackRate={1.0}
          loop
          autoPlay
          muted
        >
          <source src={video}/>
        </video>
    </>

)
}

FailPage.propTypes = {
text: PropTypes.string
}
export default FailPage
