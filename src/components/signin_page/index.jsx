import React from 'react'
import "./style.css"
import "./mobile.css"
import { useEffect } from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import Google from "../../img/icons/google.png"
import { HashLink as Link } from 'react-router-hash-link';
import { districts } from "./districts"
import axios from 'axios';
import { useState } from 'react';

export default function SignupPage() {
	let agreeBox = React.createElement('input', { type: 'checkbox', defaultChecked: true, className: "signup__subscription", id: "signup__check" });
	let districtOption = districts.map((district) => {
		return (
			<option value={district}>{district}</option>
		);
	});


	const [emailIsValid, setEmailIsValid] = useState(false);
	const [pwIsValid, setPwIsValid] = useState(false);
	const [nameIsValid, setNameIsValid] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [Phone, setPhonenumber] = useState("");
	const [Address, setAddress] = useState("");
	const [Street, setStreet] = useState("");
	const [Gender, setGender] = useState("");
	const [error, setError] = useState(false);
	const [servererr, setServererr] = useState(false);

	let emailMessage = document.querySelector(".email__message");
	let pwMessage = document.querySelector(".pw__message");
	let nameMessage = document.querySelector(".fullname__message");

	const regName = /(^[A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/g;
	const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/g;
	 
	function handleEmailChange(e) {
		const emailValue = e.target.value;
		setEmail(emailValue);

		if (emailValue.match(regMail)) {
			setEmailIsValid(true);
			// emailMessage.classList.remove("show");
		} else {
			// emailMessage.classList.add("show");
			setEmailIsValid(false);
		}
	}

	function handlePasswordChange(e) {
		const passwordValue = e.target.value;
		setPassword(passwordValue);

		if (passwordValue.match(regPassword)) {
			setPwIsValid(true);
			pwMessage.classList.remove("show");
		} else {
			pwMessage.classList.add("show");
			setPwIsValid(false);
		}
	}

	function handleFullnameChange(e) {
		const fullnameValue = e.target.value;
		setFullname(fullnameValue);

		if (fullnameValue.match(regName)) {
			setNameIsValid(true);
			nameMessage.classList.remove("show");

		} else {
			nameMessage.classList.add("show");

			setNameIsValid(false);
		}
	}

	const handleSignup = async (e) => {
		e.preventDefault();


		if (emailIsValid && pwIsValid && nameIsValid) {
			setServererr(false);

			// Submit form
			const res = await axios
				.post("http://localhost:5000/api/v1/register", {
					email: email,
					password: password,
					name: fullname,
					Phone,
					Street,
					Address,
					Gender
				})
				.then(async (response) => {
					console.log("Form submitted successfully!");
					console.log(response.data);
					 await axios.post("http://localhost:5000/api/v1/subscribe",{
					 
					userEmail:email,
					passwordveri:password,
					  }).then((res)=>{
						  res.send();
						  
						  
						}).catch((err)=>{
							console.log("subscription failed. Please fix errors and try again.");
						})
				})
				.catch((error) => {
					console.log("Form submission failed. Please try again.");
					console.log(error);

					if (error.code === 500) {
						// Duplicate key error
						// You can log the error or handle it in any other way you want
						console.error("Duplicate key error:", error);
						// setEmailerror(true);
					} else if (error.code === 500 || 301 || 400) {
						setServererr(true);

					}

					else {
						setServererr(true);

						console.log("Form submission failed. Please fix errors and try again.");

					}
				});
				
		}else {
			setServererr(true);

			console.log("Form submission failed. Please fix errors and try again.");

		}};




		useEffect(() => {
			console.log("Component mounted");
		}, []);


		return (
			<div id='signup__id' className="signup__page--container">
				<Navbar />
				<div className="signup__page--box flex__col flex__center">
					<div className="signup__page--greet medium__paragrapg--text">Create your new Account</div>
					<div className="signup__page--signup--redirect medium__paragrapg--text">Already have an account?
						<span className='signup__redirect'>
							<Link
								to={`/login_page#login__id`}
								className="linker nav__item--g"
							>
								&nbsp; Login &nbsp;
							</Link>
						</span>
						from here
					</div>
					<div className="signup__page flex__col flex__center">
						<form action="/login_page" onSubmit={handleSignup}>
							<div className="email__container flex__col"  >
								<input name='email' type="email" className='signup__identifier' placeholder='Email Address *' value={email} onChange={handleEmailChange} required />
								<div className="signin__msg email__message">Please enter a valid email</div>
							</div>
							<div className="password__fullname--field flex__row">
								<div className="pw__container flex__col">
									<input name='password' type="password" className="signup__pw" placeholder='Password *' value={password} onChange={handlePasswordChange} required />
									<div className="signin__msg pw__message">Password must contain at least 6 characters</div>
								</div>
								<div className="fullname__container flex__col">
									<input name='fullname' type="text" className="signup__name" placeholder='Full Name *' value={fullname} onChange={handleFullnameChange} required />
									<div className="signin__msg fullname__message">Name must've at least 2 characters</div>
								</div>
							</div>
							<div className="signup__phone--address flex__row">
								<input type="number" className="signup__phone" placeholder='Phone No. *' onChange={(e) => setPhonenumber(e.target.value)} required />
								<select name="districts" id='districts' className='district__selector' onChange={(e) => setAddress(e.target.value)} required>
									<option value="none" selected disabled hidden className='district__select--placeholder'  >Select a District *</option>
									{districtOption}
								</select>
							</div>
							<div className="street__gender--field flex__row">
								<input type="text" className="signup__address" onChange={(e) => setStreet(e.target.value)} placeholder='Street Address' />
								<select name="gender" id='gender' className='gender__selector' onChange={(e) => setGender(e.target.value)} required>
									<option value="none" selected disabled hidden className='gender__select--placeholder' >Gender</option>
									<option value="Male" className='gender__select--option'>Male</option>
									<option value="Female" className='gender__select--option'>Female</option>
								</select>
							</div>
							<div className="signup__agreement flex__row flex__center footer__paragraph--text">
								{/* <input id='signup__check' type="checkbox" className='signup__subscription' checked/> */}
								{agreeBox}
								<label htmlFor="signup__check" className='signup__agreement--label'>I'd like to recieve updates via email</label>
							</div>
							<button className="signup__btn--submit paragraph--text --submit" type="submit"  >REGISTER</button>
						</form>
						<div className="signup__option footer__paragraph--text">Or,</div>
						<button className="signup__btn--google flex__row flex__center paragraph--text">
							<img src={Google} alt="Google Icon" className="google__icon" />
							Sign up with Google
						</button>
						{error && <span className="warn" style={{ color: "red", marginTop: "10px" }}>Already Used Email/Name</span>}
					</div>

					{servererr && <span className="warn" style={{ color: "red", marginTop: "15px" }}>Invalid Credentials/duplicate data</span>}


				</div>
				<Footer />
			</div>
		);
	};