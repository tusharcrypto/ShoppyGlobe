import ProductList from "./ProductList"
import useFetch from "../../Utility/useFetch";

const Shop = () => {
  const value = useFetch('https://dummyjson.com/products');
  return (
    <div>
     <ProductList title={'Beutiy Essence '} items={value} mul={0} ></ProductList>
     <ProductList title={'Fragrances'} items={value} mul={5} ></ProductList>
     <ProductList title={'Furnititure'} items={value} mul={10} ></ProductList>
     <ProductList title={'Groceries'} items={value} mul={15} ></ProductList>
     <ProductList title={'Groceries'} items={value} mul={20} ></ProductList>
      
    </div>
  )
}

export default Shop
