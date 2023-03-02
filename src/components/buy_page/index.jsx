import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import BadgeSection from '../home_page/badge_section';
import Earbud from "../../img/earbud/buy_earbud.jpeg"
import { useState } from "react";
import { HashLink as Link} from 'react-router-hash-link';
import ReactImageZoom from "react-image-zoom";
import "./style.css"

export default function BuyPage(prop)
{
	let stock = 50;
	const props = {
		width: 200,
		zoomWidth: 300,
		img: Earbud,
		scale: 1.5,
		offset: {
			vertical: 0, 
			horizontal: 40
		},
		zoomStyle: "width: 400px; height: 300px; transform: translate(100%, -30px); filter: drop-shadow(0 0 5px var(--grey-bg)); background-color: white;",
		zoomLensStyle: "background-color: var(--primary); opacity: 0.2;"
	  };
	function increment() {
		if (prop.amount < 10) {
			prop.updateQty(true);
		}
	}
	function decrement() {
		if (prop.amount > 1) {
			prop.updateQty(false);
		}
	}
	function addToCart()
	{
		// if (prop.amount < 10) {
		// 	prop.updateQty(true);
		// 	alert("Product has been added to your cart.");
		// }
		// props.amount = props.amount;
		// updateCart(props.amount);
	}
	// On, Order Now click, Render Order Page by passing amount, increment() and decrement() as props
	return (
		<div id='buy__id' className="buy__page--container">
			<Navbar/>
			<div className="buy__page--box flex__row flex__center">
				<div className="buy__page--earbud">
					{/* <img src={Earbud} alt="Earbud Front View" className="buy__page--image" /> */}
					<ReactImageZoom {...props} className="buy__page--image" />
				</div>
				<div className="buy__page--info">
					<div className="buy__page--title subheading__title--text">Unicorn Earbuds</div>
					<div className="buy__page--bud--color medium__paragraph--text">White</div>
					<div className="buy__page--rate">
						<div className="buy__page--price mini__heading--text">Rs. 2999</div>
						<div className="buy__page--quantity flex__row">
							<div className="quantity__title">Qty:</div>
							<div class="qty__wrapper">
								<span class="minus" onClick={decrement}>
									-
								</span>
								<span class="num">{prop.amount}</span>
								<span class="plus" onClick={increment}>
									+
								</span>
							</div>
						</div>
					</div>
					<div className="buy__page--action flex__row">
					<Link
							to={`/order_page`}
							className="linker nav__item--g"
							state={{
								from: "buy",
								amount: prop.amount,
							}}
					>
						<button className="buy__page--order">Order Now</button>
					</Link>
						<button className="buy__page--cart" onClick={addToCart}>Add to Cart</button>
					</div>
					<div className="buy__page--stock--cost">
						<div className="buy__page--stock footer__paragraph--text">{`In Stock: ${stock}`}</div>
						<div className="buy__page--cost footer__paragraph--text">Min Shipping Cost: Rs. 110</div>
					</div>
				</div>
			</div>
			<BadgeSection/>
			<Footer/>
		</div>
	);
}
