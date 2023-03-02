import React from 'react'
import "./style.css"
import "./mobile.css"
import Logo from "../../../img/navbar_img/unicorn.png"
import CartIcon from "../../../img/navbar_img/cart.svg"
import UserIcon from "../../../img/navbar_img/user.svg"
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar()
{
	return (
		<div className="navbar__section nav__heading--text">
			<div className="flex__row navbar__container">
				<Link
					to={`/#home__id`}
					className="linker nav__item--g"
				>
					<div className="unicorn__logo--container">
						<img src={Logo} alt="Unicorn Brand Logo" className="unicorn__logo" />
					</div>
				</Link>
				<ul className="navbar__menu flex__row">
					
										<li className="navbar__menu--item flex__row flex__center">
						<Link
							to={`/cart_page#cart__id`}
							className="linker nav__item--g"
						>
							<img src={CartIcon} alt="Cart Icon" className="cart__icon" />
						</Link>
					</li>
					<li className="navbar__menu--item flex__row flex__center">
						<Link
							to={`/login_page`}
							className="linker nav__item--g"
						>
							<img src={UserIcon} alt="User Icon" className="user__icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
