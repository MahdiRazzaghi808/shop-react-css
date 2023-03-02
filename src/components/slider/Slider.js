import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import styles from './slider.module.css'
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
}


const Slideshow = ({ image }) => {
  return (
    <div className="slide-container">
      <Slide>
        {image.map((item, index) => (
          <div key={index}>
            <div className={styles.slider} style={{ ...divStyle, 'backgroundImage': `url(${item.url})` }}>

            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}


export default Slideshow