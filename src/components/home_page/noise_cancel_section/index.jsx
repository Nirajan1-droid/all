import React from 'react'
import ANC from "../../../img/features/ANC.jpeg"
import ENC from "../../../img/features/ENC.jpeg"
import Transparency from "../../../img/features/Transparency.jpeg"
import "./style.css"
import "./mobile.css"

export default function NoiseCancelSection()
{
	return (
		<div id='noise__id' className="noise__cancel--container">
			<div className="noise__cancel--section flex__col flex__center">
				<div className="noise__cancel--title large__title--text">Double Noise Cancel</div>
				<div className="noise__cancel--content mini__heading--text">Escape the Noise and Immerse Yourself in a World of Pure Sound</div>
				<div className="noise__cancel--features flex__row flex__center">
					<div className="anc__feature noise__cancel flex__col flex__center">
						<div className="anc__image--container">
							<img src={ANC} alt="ANC Feature" className="anc__image" />
						</div>
						<div className="anc__title subheading__title--text">ANC Mode</div>
						<div className="anc__content mini__heading--text"> With our Active Noise Cancelling (ANC) technology, you can turn off the world and achieve complete silence, no matter where you are.</div>
					</div>
					<div className="enc__feature noise__cancel flex__col flex__center">
						<div className="enc__image--container">
							<img src={ENC} alt="ENC Feature" className="enc__image" />
						</div>
						<div className="enc__title subheading__title--text">ENC Mode</div>
						<div className="enc__content mini__heading--text">Environmental Noise Cancellation (ENC) is designed to adapt to your surroundings, enhancing your audio with ultimate listening experience.</div>
					</div>
				</div>
				<div className="transparency__feature flex__row">
					<div className="transparency__line"></div>
					<div className="transparency__content flex__col flex__center">
						<div className="transparency__title subheading__title--text">Transparency Mode</div>
						<div className="transparency__info mini__heading--text">Hear what's happening around you. Our wireless earbuds are designed with your safety in mind. Transparency Mode provides the best of both worlds.</div>
					</div>
					<div className="transparency__image--box flex__row flex__center">
						<div className="transparency__image--container flex__row flex__center">
							<img id='transparency__1' src={Transparency} alt="Transparency Feature" className="transparency__image" />
							<img id='transparency__2' src={Transparency} alt="Transparency Feature" className="transparency__image" />
							<img id='transparency__3' src={Transparency} alt="Transparency Feature" className="transparency__image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}