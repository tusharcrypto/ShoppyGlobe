import '../CSS/endbanner.css'
import ecm from '../../Utility/Image/ecomme.json'
import Lottie from 'lottie-react'
const EndBanner = () => {
  return (
    <div className='banner'>
      <Lottie animationData={ecm} className='Lottie'></Lottie>
      <p> 
      At ShoppyGlobe, we make shopping easy and affordable. From groceries to essentials, we deliver quality products and great deals right to your doorstep. Your convenience is our priority!
</p>
      
    </div>
  )
}

export default EndBanner
