import React from 'react'
import "./style.css"
import { data } from './power_data';
import {nanoid} from "nanoid"
import "./mobile.css"


export default function PowerSection()
{
	let powerFeatures = data.map(feature =>
		{
			return (
				<div key={nanoid()} className="power__feature flex__col flex__center">
					<div className="power__image--container">
						<img src={feature.src} alt="Power Feature Icon" className="power__image" />
					</div>
					<div className="power__feature--info medium__paragraph--text">{feature.content}</div>
				</div>
			);
		});
	return (
		<div id='power__id' className="power__section--container flex__col flex__center">
			<div className="power__section--title large__title--text">Long Lasting Battery. Charge in a Flash.</div>
			<div className="power__section--features flex__row">
				{powerFeatures}
			</div>
		</div>
	);
}