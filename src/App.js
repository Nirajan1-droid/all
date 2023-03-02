import React, { useContext } from 'react'
import './App.css'
import Home from "./components/home_page"
import LoginPage from './components/login_page'
import SigninPage from './components/signin_page'
import BuyPage from "./components/buy_page"
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import OrderPage from "./components/order_page"
import CartPage from './components/cart_page'
import { useConstant } from '@react-spring/shared'
import { Context } from './components/context/Context'

function App() {
	const { user}= useContext(Context);
	let [qty, setQty] = useState({buyQty: 1, cartQty: 1, orderQty: 1});
	function updateBuyQty(increment)
	{
		if(increment) setQty(prevQty => ({...prevQty, buyQty: prevQty.buyQty + 1}));
		else setQty(prevQty => ({...prevQty, buyQty: prevQty.buyQty - 1}));
	}
	function updateCartQty(increment)
	{
		if(increment) setQty(prevQty => ({...prevQty, cartQty: prevQty.cartQty + 1}));
		else setQty(prevQty => ({...prevQty, cartQty: prevQty.cartQty - 1}));
	}
	function updateOrderQty(increment)
	{
		if(increment) setQty(prevQty => ({...prevQty, orderQty: prevQty.orderQty + 1}));
		else setQty(prevQty => ({...prevQty, orderQty: prevQty.orderQty - 1}));
	}
	function setCart(qty) {setQty(prevQty => ({...prevQty, cartQty: qty}));}
	function setOrder(qty) {setQty(prevQty => ({...prevQty, orderQty: qty}));}
	return (
		<div id='app__id' className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login_page" element={<LoginPage />} />
				<Route path="/signin_page" element={user?<LoginPage/>:<SigninPage />} />
				<Route path="/buy_page" element={<BuyPage amount={qty.buyQty} updateQty={updateBuyQty} updateCart={setCart}/>} />
				<Route path="/cart_page" element={<CartPage amount={qty.cartQty} updateQty={updateCartQty}/>} />
				<Route path="/order_page" element={<OrderPage amount={qty.orderQty} updateQty={updateOrderQty} updateOrder={setOrder}/>} />
				{/* <Route path="/"  element={<BuyPage/>}/> */}
				{/* <Route path="/"  element={<LoginPage/>}/> */}
				{/* <Route path="/"  element={<SigninPage/>}/> */}
				{/* <Route path="/"  element={<CartPage/>}/> */}
				{/* <Route path="/"  element={<OrderPage/>}/> */}
			</Routes>
		</div>
	)
}

export default App