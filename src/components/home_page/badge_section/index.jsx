import React from 'react'
import "./style.css"
import "./mobile.css"
import Delivery from "../../../img/badge_img/delivery.png"
import Satisfaction from "../../../img/badge_img/satisfaction.png"
import Service from "../../../img/badge_img/service.png"

export default function BadgeSection()
{
	return (
		<div className="badge__section--box flex__col flex__center">
			<div className="badge__line"></div>
			<div className="badge__section--container flex__row">
				<div className="fast__delivery flex__col flex__center">
					<div className="fast__delivery--badge">
						<img src={Delivery} alt="Fast Delivery Icon" className="fast__delivery--image" />
					</div>
					<div className="fast__delivery--content paragraph__heading">Fast Delivery Guarenteed</div>
				</div>
				<div className="satisfaction__guarentee flex__col flex__center">
					<div className="satisfaction__guarentee--badge">
						<img src={Satisfaction} alt="Satisfaction Guarentee Icon" className="satisfaction__guarentee--image" />
					</div>
					<div className="satisfaction__guarentee--content paragraph__heading">Satisfaction Guarenteed</div>
				</div>
				<div className="customer__service flex__col flex__center">
					<div className="customer__service--badge">
						<img src={Service} alt="Customer Service Icon" className="customer__service--image" />
					</div>
					<div className="customer__service--content paragraph__heading">Great Customer Service</div>
				</div>
			</div>
			<div className="badge__line"></div>
		</div>
	);
}