import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Pages/Home.jsx'
import ProductList from './Component/Pages/ProductList.jsx'
import Cart from './Component/Pages/Cart.jsx'
import CartItem from './Component/Pages/CartItem.jsx'
import ProductDetail from './Component/Pages/ProductDetail.jsx'
import ProductItem from './Component/Pages/ProductItem.jsx'
import AppLayout from './Component/Pages/AppLayout.jsx'
import Shop from './Component/Pages/Shop.jsx'
import NotFound from './Component/Pages/NotFound.jsx'

function App() {

const approutes = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout></AppLayout>,
    children:[
      {
      path:'',
      element:<Home></Home>
    },{
      path:'shop',
      element:<Shop></Shop>
    },
      {
        path:'productList',
        element:<ProductList></ProductList>
      }, {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'cartItem',
        element:<CartItem></CartItem>
      },
      {
        path:'productDetails/:title',
        element:<ProductDetail></ProductDetail>
      },
      {
        path:'productItem',
        element:<ProductItem></ProductItem>
      },
    ],
    errorElement:<NotFound></NotFound>
  }
])
  return (
    <>
    <RouterProvider router={approutes} ></RouterProvider>
    </>
  )
}

export default App;
