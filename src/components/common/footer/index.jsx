import React,{memo} from "react";
import "./style.css";
import "./mobile.css";
import { contactData, socialData } from "./sample_data";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Unicorn from "../../../img/navbar_img/unicorn.png"
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
export default memo(Footer)
 function Footer() {
	useEffect(()=>
	{

		// Regex for email validation
		let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		let subscriptionMsg = document.querySelector(".subscription__message");
		subscriptionMsg.innerHTML = "Subscription Status";
		let emailInput  = document.querySelector(".email__input");
		let subscribeBtn  = document.querySelector(".subscribe__btn");
		
		async function subscribeSubmit()
		{
			// console.log("Subscribed!");
			let userEmail = emailInput.value;
			if(userEmail.match(reg))
			{
				// console.log("Valid Email");
				console.log("sending ..");
				
				// Form Value to store in database
				console.log(userEmail);
				await axios.post("/api/v1/subscribe",{
					 
					userEmail:userEmail,
						  }).then((res)=>{
							alert("Subscription added Sucessfully");
							   subscriptionMsg.innerHTML = "You have successfully subscribed!"
							  subscriptionMsg.classList.remove("show", "subscription__failure");
				subscriptionMsg.classList.add("subscription__success", "show");
				setTimeout(() =>
				{
					subscriptionMsg.classList.remove("show", "subscription__success");
					subscriptionMsg.innerHTML = "Subscription Status";
				}, 5000);
							}).catch((err)=>{
alert("Already added");
								});	
							 
						
			}
			else
			{ 
alert("Validation failed, provide authentic email");
subscriptionMsg.innerHTML = "Please try again."
                                subscriptionMsg.classList.remove("show", "subscription__success");
                                subscriptionMsg.classList.add("subscription__failure", "show");
                                setTimeout(() =>
                                {
                                        subscriptionMsg.classList.remove("show", "subscription__failure");
                                        subscriptionMsg.innerHTML = "Subscription Status";
                                }, 5000);
                                                      
				alert("Invalid Email");
				
			}
		}
		subscribeBtn.addEventListener("click", subscribeSubmit);

	}, []);
	let contactElem = contactData.map((contact) => {
		return (
			<div key={nanoid()} className="contact__data">
				<object
					data={contact.url}
					type="image/svg+xml"
					className="contact__icon"
					// onLoad={populate_svg}
				>
					SVG Icon
				</object>
				<div className="contact__content">{contact.content}</div>
			</div>
		);
	});
	let socialElem = socialData.map((social) => {
		return (
			<li key={nanoid()} className="social__media">
				<object
					data={social.url}
					type="image/svg+xml"
					className="social__icon"
					// onLoad={populate_svg}
				>
					SVG Icon
				</object>
				<div className="social__name"><a href={social.link} target="_blank" className="social__anchor--link">{social.content}</a></div>
			</li>
		);
	});
	return (
		<div id="footer__id" className="footer__section">
			<div className="footer__links footer__paragraph--text">
				<div className="email__subscription flex__col">
					<Link
						to={`/#home__id`}
						className="linker nav__item--g"
					>
						<div className="footer__unicorn--logo--container">
							<img src={Unicorn} alt="Unicorn Logo" className="footer__unicorn--logo" />
						</div>
					</Link>
					<div className="footer__mail--subscribe">
						<div className="mail__subscribe--title">Get notified. No spam, we promise!</div>
						<div className="mail__subscribe flex__row">
							<input type="email" className="email__input" placeholder="Email Address" />
							<button className="subscribe__btn">Subscribe</button>
						</div>
					</div>
					<div className="subscription__message"></div>
				</div>
				<div className="contact__info--footer">
					<div className="contact__info--title footer__heading--text">
						Contact Information
					</div>
					{contactElem}
				</div>
				<div className="quick__link">
					<div className="quick__link--title footer__heading--text">Quick Links</div>
					<ul className="link__list">
						{/* <Link to="/overview#overview__page" className="linker"> */}
							<li className="link__list--item">Specs</li>
						{/* </Link> */}
						{/* <Link to="/products#product__page" className="linker"> */}
							<li className="link__list--item">Support</li>
						{/* </Link> */}
					</ul>
				</div>
				<div className="social__contacts">
					<div className="social__contacts--title footer__heading--text">
						Social Contacts
					</div>
					<ul className="social__list">{socialElem}</ul>
				</div>
			</div>
			<div className="policy__section footer__paragraph--text">
				<div className="line"></div>
				<div className="policies">
					<div className="copyright">
						Copyright © 2023 Unicorn Lifestyles. All rights reserved.
					</div>
					<ul className="policy__list">
						<li>
							<p className="policy">Return Policy</p>
						</li>
						<li>
							<p className="policy">Terms of Use</p>
						</li>
						<li>
							<p className="policy">Privacy Policy</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
