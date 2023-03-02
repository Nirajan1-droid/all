import React, { useEffect ,useRef, useState} from 'react'
import "./style.css"
import "./mobile.css"
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import { HashLink as Link } from 'react-router-hash-link';
import {useContext} from "react";
import {Context} from "../context/Context";
import axios from 'axios';
import LogoutButton from './logout';
export default function LoginPage()
{
	
		 
			
	const userRef = useRef();
	const passwordRef = useRef();
	const [error, setError ] = useState(false);
	const [servererr,setServererr] =useState(false)
	const [success,setSuccess] =useState(true)
  
	const {user , dispatch, isFetching } = useContext(Context);
	
  
  
  
	const handleSubmit= async (e)=>{
	  e.preventDefault();
	  dispatch({type:"LOGIN_START"});
	  
		  const res = await axios.post("http://43.206.15.162:5000/api/v1/login",{
			email : userRef.current.value,
			password : passwordRef.current.value,
		  }).then((res) => {
		 
			  res.data && (window.location.replace('/order_page') && setSuccess(true));
			  dispatch({type :"LOGIN_SUCCESS", payload:res.data});
			
			setError(false)
			setServererr(false);
			 
		}).catch((err)=>{ 
			dispatch({type:"LOGIN_FAILURE"})
			if (err.code === 401 || err.code === 403 || err.code === 404) {
			  setError(true);
			}else{//for 500 which is internal server error
			  setServererr(true);
			  setSuccess(false);
			}
		});
		 

	}
	return (
		<div id='login__id' className="login__page--container">
		
			<Navbar/>
			 {user ?
			 
			 
				(<div className="logout-button-container">
				<div className="success-message ">Successfully logged in!</div>
				<LogoutButton/>
				</div>
				
				)
				
			 
			:
				(<div className="login__page--box flex__col flex__center">
				<div className="login__page--greet medium__paragraph--text">Greeting! Sign in to your Account</div>
				<form className="login__page--form flex__col flex__center" onSubmit={handleSubmit}>
					<div className="login__email--container">
						<input type="text" className='login__identifier' ref = {userRef} placeholder='Email or Phone Number' />
						{/* <div className="login__msg login__email--message">Please enter a valid email</div> */}
					</div>
					<div className="login__pw--container">
						<input type="password" className="login__pw" ref = {passwordRef} placeholder='Password'/>
						{/* <div className=
						"login__msg login__pw--message">Please enter correct password</div> */}
					</div>
					 

					<button className="login__btn--submit" type="submit" disabled ={isFetching} >LOGIN</button>
					 
							</form>
					<div className="login__page--line"></div>
							{error && <span className="warn" style={{ color: "red", marginTop: "10px" }}>Invalid Credentials</span>}
							{servererr && <span className="warn" style={{ color: "red", marginTop: "15px" }}>Invalid</span>}
					<div className="login__page--signup--redirect flex__col flex__center medium__paragraph--text">Don't have an account? 
						<span className='signup__redirect'>
							<Link
								to={`/signin_page#signup__id`}
								className="linker nav__item--g"
								>
								<button className="login__signup--btn">SIGNUP</button>
							</Link>
						</span>
					</div>
			</div>)};
			{/* <Footer/> */}
			
		</div>
	);
}
