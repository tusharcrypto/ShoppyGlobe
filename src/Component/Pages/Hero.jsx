import '../CSS/Hero.css'
import mode12 from '../../Utility/Image/model2.png'
function Hero(){
  return <>
  <div className="HeroBar">
    {/* <p>Arrow</p> */}
   <div className="Left-Side">
    <p>Summer Collection</p>
    <p>Fall-Winter</p>
    <p>Collections 2025</p>
    <p>A specialist creating essentials.Ethically crafted with unwavening commiting to exception quality</p>
    <button className='shpbtn'>SHOP NOW</button>
   </div>
   <div className="Right-side">
    <img src={mode12}></img>
   </div>
   {/* <p>Arrow</p> */}
  </div>
  
  </>
}

export default Hero