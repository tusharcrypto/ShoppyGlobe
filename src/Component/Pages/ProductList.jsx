import useFetch from '../../Utility/useFetch'
import '../CSS/ProductList.css'
import ProductItem from './ProductItem'

const ProductList = (prop) => {
  let {data,loading} = useFetch('https://dummyjson.com/products')
  if(loading){
    return <div>Loading ...</div>
  }
  let mil = prop.mul
  let cnt= mil+4;
  return (
    <div className="mainsec">
        <p className='title'>{prop.title}</p>
        <div className='Card'>
      {data.products.map((eachItem)=>{
       if(eachItem.id>mil && mil<=cnt){
        mil++;
        return <ProductItem key={eachItem.id} item={eachItem}></ProductItem>
       }
      })}
    </div>
    </div>
  )
}

export default ProductList
