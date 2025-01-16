import useFetch from "../../Utility/useFetch"
import Hero from "./Hero";
import ProductList from "./ProductList";
import Sale from "../Pages/Sale.jsx";
import Footer from "./Footer.jsx";
import EndBanner from "./EndBanner.jsx";


const Home = () => {
  const value = useFetch('https://dummyjson.com/products');
  // console.log(value)
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', margin: '0px', overflowX: 'hidden' }}>
     <Hero></Hero>
      <ProductList title={'NEW COLLECTIONS'} items={value} mul={0} ></ProductList>
      <Sale></Sale>
      <ProductList title={'TOP PURCHASE'} items={value} mul={5} ></ProductList>
      <EndBanner></EndBanner>
      <Footer></Footer>
    </div>
  )
}

export default Home
