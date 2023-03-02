import React from 'react'
import "./style.css"
import "./mobile.css"
import Devices from "../../../img/features/devices.jpeg"
import { HashLink as Link } from "react-router-hash-link";



export default function ConnectivitySection()
{
	return (
		<div className="connectivity__section--container flex__col flex__center">
			<div className="connectivity__title large__title--text">Seamless Connectivity</div>
			<div className="connectivity__subtitle subheading__title--text">Bluetooth v5.2</div>
			<div className="connectivity__info mini__heading--text">Fast and stable connections with laptop, tablet or phone. Supports both Android and iOS.</div>
			<div className="connectivity__compatibility">
				<img src={Devices} alt="Multiple Devices" className="compatibility__image" />
			</div>
			<Link
				to={`/buy_page#buy__id`}
				className="linker nav__item--g"
			>
				<div className="connectivity__buy--btn">Buy</div>
			</Link>
		</div>
	);
}