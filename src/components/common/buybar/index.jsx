import React from 'react'
import "./style.css"
import "./mobile.css"
import { HashLink as Link } from "react-router-hash-link";


export default function BuyBar()
{
	return (
		<div className="buy__bar--section">
			<div className="buy__bar--container paragraph__heading--text flex__row">
				<div className="buy__heading subheading__title--text">Unicorn Earbuds</div>
				<div className="buy__motive">Don't miss out. Grab your pairs before it's too late.</div>
					<div className="buy__btn flex__row paragraph--text">
						<Link
							to={`/buy_page#buy__id`}
							className="linker nav__item--g"
						>
							<button className='flex__row flex__center'>
								Buy Now
							</button>
						</Link>
					</div>
			</div>
		</div>
	);
}