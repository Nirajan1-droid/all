import React from 'react'
import speaker from "../../../img/features/speaker.png"
import "./style.css"
import "./mobile.css"

export default function Speaker()
{
	return (
		<div id='speaker__id' className="speaker__section">
			<div className="speaker__container flex__row">
				<div className="speaker__image--container">
					<img src={speaker} alt="Speaker Exploded View" className="speaker__image" />
				</div>
				<div className="speaker__line"></div>
				<div className="speaker__details flex__col flex__center">
					<div className="speaker__title large__title--text">Discover Hidden Sounds</div>
					<div className="speaker__subtitle subheading__title--text">13mm Loud Speaker</div>
					<div className="speaker__content mini__heading--text">Immersive and ultimate sound quality with a powerful 13mm speaker ensure an unforgettable audio experience.</div>
				</div>
			</div>
		</div>
	);
}