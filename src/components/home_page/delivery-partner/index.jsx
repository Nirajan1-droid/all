import React from 'react'
import Belaima from  "../../../img/delivery_img/belaima-logo.png"
import "./style.css"
import "./mobile.css"


export default function DevileryPartner()
{
	return (
		<div className="delivery__partner--container">
				<div className="delivery__partner large__title--text">Our Delivery Partner</div>
			<div className="delivery__bg--box flex__row">
				<img src={Belaima} alt="Belaima Logo" className="delivery__bg" />
			</div>
		</div>
	);
}