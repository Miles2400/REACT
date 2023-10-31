import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

const Navbar = () => {
	return (
		<div claasName="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links-logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
		</div>
	)
}

export default Navbar