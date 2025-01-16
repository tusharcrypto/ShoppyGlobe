import  { useState } from "react";
import { Link } from "react-router";
import "../CSS/Header.css";
import bar from "../../Utility/Image/bars.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const len = useSelector((store)=> store.cart.items.length)
  return (
    <div>
      <nav className="Navbar">
        <p className="logo">ShoopyGlobe</p>
        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="lk">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="lk">
              Shop
            </Link>
          </li>
          <li>
          <Link to="/cart" className="lk cart-link">
              Cart
              <span className="cart-count">{len}</span>
            </Link>
          </li>
        </ul>
        <img
          src={bar}
          className="bar"
          alt="Menu"
          onClick={toggleMenu} // Add click event
        />
      </nav>
    </div>
  );
};

export default Header;
