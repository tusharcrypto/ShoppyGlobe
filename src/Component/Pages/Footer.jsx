import '../CSS/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="first">
        <p>ShoppyGlobe</p>
        <p>Your go-to e-commerce store for daily essentials, offering quality products, great deals, and fast delivery—everything you need, just a click away!</p>
      </div>
      <div className="second">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </nav>
      </div>
      {/* <div className="third">
        <p>Help & Info</p>
        <p></p>
      </div> */}
      <div className="fourth">
        <p>Contact Us</p>
        <p>Do you have any questions or suggestions?</p>
        <p>contact@yourcompany.com</p>
      </div>
    </div>
  )
}

export default Footer
