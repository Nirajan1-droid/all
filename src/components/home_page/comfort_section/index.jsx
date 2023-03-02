import React from 'react'
import Runner from "../../../img/features/runner.jpeg"
import "./style.css"
import "./mobile.css"

export default function ComfortSection()
{
	return (
		<div className="comfort__section--container flex__col">
			<div className="comfort__section--title large__title--text flex__col flex__center">Get the comfort and control.</div>
			<div className="comfort__features flex__row">
				<div className="comfort__image--container">
					<img src={Runner} alt="Running Girl with Earbud On" className="comfort__image" />
				</div>
				<div className="comfort__content flex__col flex__center">
					<div className="sweat__proof--feature flex__col flex__center">
						<div className="sweat__proof--title subheading__title--text">Sweat Proof</div>
						<div className="sweat__proof--info mini__heading--text">No more worrying about sweat ruining your listening experience. Our IPx5 rated sweat-proof earbuds are the perfect companion for your active lifestyle.</div>
					</div>
					<div className="light__weight--feature flex__col flex__center">
						<div className="light__weight--title subheading__title--text">Light as Feather</div>
						<div className="light__weight--info mini__heading--text">Our lightweight and comfortable wireless earbuds lets you enjoy premium sound quality with all-day comfort.</div>
					</div>
				</div>
			</div>
		</div>
	);
}