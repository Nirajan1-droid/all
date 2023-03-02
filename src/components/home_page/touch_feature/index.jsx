import React from "react";
import { data } from "./feature_data";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Earbud from "../../../img/features/earbud.png";
import Fingerprint from "../../../img/features/fingerprint.png";
import Hand from "../../../img/features/hand.png";
import "./style.css";
import "./mobile.css"

export default function TouchFeature() {
	useEffect(() => {
		console.log("Hello");
		let touchBox = document.querySelector(".touch__image--box");
		let touchParallexBox = document.querySelector(".touch__image--container");
		let earbudElement = document.getElementById("touch__earbud");
		let fingerprintElement = document.getElementById("touch__fingerprint");
		// let handElement = document.getElementById("touch__hand");
		let reg = /[*^0-9.]/g;
		let earbudBottomOffset = Number(getComputedStyle(earbudElement).bottom.match(reg).join(""));
		let fingerprintOffset = Number(getComputedStyle(fingerprintElement).bottom.match(reg).join(""));
		console.log(fingerprintOffset);
		// let handOffset = Number(getComputedStyle(handElement).bottom.match(reg).join(""));
		// console.log(earbudBottomOffset, fingerprintOffset, handOffset);
		// console.log(touchParallexBox);

		window.addEventListener("scroll", parallax_touch);

		function parallax_touch(e)
		{
			// console.log(window.scrollY, touchParallexBox.offsetTop - window.innerHeight);
			// console.log(window.scrollY, touchParallexBox.offsetTop + touchParallexBox.clientHeight);
			// console.log(e.scrollY, touchParallexBox.offsetY);
			// let center = window.innerHeight / 2;
			let hasReachedBottom = window.scrollY >= (touchParallexBox.offsetTop - window.innerHeight);
			let hasCrossedTop = window.scrollY >= (touchParallexBox.offsetTop + touchParallexBox.clientHeight);
			if(window.innerWidth <= 768)
			{
				console.log("Mobile View");
				if(hasReachedBottom && !hasCrossedTop)
				{
					earbudBottomOffset =+ (((touchBox.clientHeight*2 - earbudElement.clientHeight/4) - window.scrollY * 0.14));
					fingerprintOffset =+ (((touchBox.clientHeight*2 - fingerprintElement.clientHeight/4) - window.scrollY * 0.11));
					earbudElement.style.bottom = `${earbudBottomOffset}px`;
					fingerprintElement.style.bottom = `${fingerprintOffset}px`;
				}
			}
			else
			{
				console.log("Desktop View");
				if(hasReachedBottom && !hasCrossedTop)
				{
					earbudBottomOffset =+ (((touchBox.clientHeight*2 - earbudElement.clientHeight/2) - window.scrollY * 0.18));
					fingerprintOffset =+ (((touchBox.clientHeight*2 - fingerprintElement.clientHeight/2) - window.scrollY * 0.15));
					earbudElement.style.bottom = `${earbudBottomOffset}px`;
					fingerprintElement.style.bottom = `${fingerprintOffset}px`;
				}
			}
		}
	}, []);
	let touchFeatures = data.map((feature) => {
		return (
			<div
				key={nanoid()}
				className="touch__feature--box flex__col flex__center"
			>
				<div className="touch__feature--icon--box">
					<img
						src={feature.src}
						alt="Touch Feature Icon"
						className="touch__feature--icon"
					/>
				</div>
				<div className="touch__feature--info medium__paragraph--text">
					{feature.content}
				</div>
			</div>
		);
	});
	return (
		<div id="touch__id" className="touch__feature--section flex__col flex__center">
			<div className="touch__feature--title large__title--text">
				Touch Control
			</div>
			<div className="touch__feature--subtitle mini__heading--text">
				Effortlessly control your music and calls with just a touch of your earbuds.
			</div>
			<div className="touch__feature--content flex__row">
				<div className="touch__features flex__row flex__center">
					{touchFeatures}
				</div>
				<div className="touch__image--box flex__row flex__center">
					<div className="touch__image--container">
						<img
							id="touch__earbud"
							src={Earbud}
							alt="Earbud for Touch"
							className="touch__image"
						/>
						<img
							id="touch__fingerprint"
							src={Fingerprint}
							alt="Fingerprint Mark"
							className="touch__image"
						/>
						<img
							id="touch__hand"
							src={Hand}
							alt="Touch Hand"
							className="touch__image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
