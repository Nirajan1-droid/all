import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import "./style.css"
import Earbud from "../../img/earbud/buy_earbud.png"
import { HashLink as Link } from 'react-router-hash-link'

export default function CartPage(props) 
{
	// Pass a "hasItem" as prop from buy_page to show eitehr EmptyCart or FilledCart
	// Creating a custom component inside a component
	function increment() {
		if (props.amount < 10) {
			props.updateQty(true);
		}
	}
	function decrement() {
		if (props.amount > 1) {
			props.updateQty(false);
		}
	}
	// function deleteFromCart()
	// {
	// 	props.updateQty(false);
	// 	// alert("Product has been removed from your cart.");
		
	// }

	let EmptyCart = ()=>
	{
		return (
			<div className="empty__cart--container flex__col flex__center">
				<div className="empty__cart--title subheading__title--text">Nothing has been added</div>
				<div className="empty__cart--action medium__paragraph--text">Please click below</div>
				<Link to={'/buy_page'}><button className="empty__cart--btn" style={{cursor: 'pointer'}}>Buy</button></Link>
			</div>
		);
	}
	let FilledCart = () =>
	{
		return (
			<div className="filled__cart--container flex__row">
				<img src={Earbud} alt="Earbud Front View" className="item__image" />
				<div className="item--content flex__row">
					<div className="item__name medium__paragraph--text">Unicorn Earbud</div>
					<div className="buy__page--quantity flex__row">
						<div className="quantity__title medium__paragraph--text">Qty:</div>
						<div class="qty__wrapper">
							<span class="minus" onClick={decrement}>
								-
							</span>
							<span class="num">{props.amount ? props.amount : 1}</span>
							<span class="plus" onClick={increment}>
								+
							</span>
						</div>
					</div>
					<div className="item__price medium__paragraph--text">Rs. 2999</div>
					<div className="item--action flex__row">
						<Link
							to={`/order_page#order__id`}
							className="linker nav__item--g"
							state={{
								from: "cart",
								amount: props.amount,
							}}
						>
							<button className="item--order">Order Now</button>
						</Link>
						<button className="item--delete">Delete</button>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
		<div id='cart__id' className="cart__page--container flex__col">
			<Navbar/>
			{props.amount ?
				 
				 (<div className="cart__page--box" style={{height: 'auto'}} >
					

				<div className="cart__page--title subheading__title--text">Your Cart: </div>
					 
				<FilledCart/></div> )
				: 
				<EmptyCart/>}
			 
		</div>
			<Footer/>
				</>
	);
}