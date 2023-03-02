import React from 'react'
import "./style.css"
import "./mobile.css"
import { HashLink as Link } from "react-router-hash-link";


export default function FeatureIcon(props)
{
	return (
		<div className="feature__icon--container flex__col flex__center">
			<Link
				to={`/#${props.value.gotoID}`}
				className="linker nav__item--g"
			>
				<div className="feature__icon--box">
					<img src={props.value.src} alt="Feature Icon" className="feature__icon" />
				</div>
			</Link>
			<div className="feature__info medium__paragraph--text">{props.value.content}</div>
		</div>
	);
}