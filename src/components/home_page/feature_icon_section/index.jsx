import React from 'react'
import FeatureIcon from "./feature_icon"
import {nanoid} from "nanoid"
import {data} from "./feature_data"
import "./style.css"
import "./mobile.css"

export default function FeatureIconSection()
{
	let featureElements = data.map(feature =>
		{
			return (
				<FeatureIcon key={nanoid()} value={feature}/>
			);
		});
	return (
		<div className="feature__icon--section flex__row">
				{featureElements}
		</div>
	);
}


