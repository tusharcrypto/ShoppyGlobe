import err from '../../Utility/Image/error.json'
import Lottie from 'lottie-react'
import '../CSS/NotFound.css'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='container'>
       <Link to="/" className="lk">
              Home
            </Link>
      <Lottie animationData={err} className='lottie'></Lottie>
      <p className='text'>Opps Page Not found</p>
    </div>
  )
}

export default NotFound
