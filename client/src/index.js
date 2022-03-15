import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { ReactQueryDevtools } from "react-query/devtools";
//Componenets
import Cart from './components/Cart/Cart'
import Item from './components/CartItem/Item'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
// Styles
import { StyledButton, Wrapper } from './pages/Cart.styles'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Info from './pages/Info'
import Seller from './pages/Seller'
import NoPage from './pages/NoPage'

const queryClient = new QueryClient();

async function fetchItems() {
  const res = await fetch('http://localhost:3001/all')
  return await res.json()
}

export function App() {

  const { data, isLoading, error } = useQuery('items', fetchItems)

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])





  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clicked) => {
    setCartItems(prev => {
      const isInCart = prev.find(item => item.id === clicked.id)
      if (isInCart) {
        return prev.map(item => (
          item.id === clicked.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }

      return [...prev, { ...clicked, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [])
    ))
  }




  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="upload" element={<Upload />} />
            <Route path="info/*" element={<InfoParent />} />
            <Route path="seller" element={<Seller />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>

      </Wrapper>
    </>


  );
}




function InfoParent(props) {


  return (
    <>
      <Routes>
        <Route path='/' element={
          <form action='info/1'>
            <input></input>
            <input type="submit" value="Submit"></input>
          </form>
        } />
        <Route path='/:id' element={<Info />} />
      </Routes>

    </>

  )
}

ReactDOM.render(<QueryClientProvider client={queryClient}><App /><ReactQueryDevtools initialIsOpen /></QueryClientProvider>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
