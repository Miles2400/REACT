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
				<div className="gpt3__navbar-links-container">
					<p> <a href="#home">Home</a> </p>
					<p> <a href="#wgpt3">What is GPT3?</a> </p>
					<p> <a href="#possibility">Open AI</a> </p>
					<p> <a href="#blog">Library</a> </p>
				</div>
			</div>
		</div>
	)
}

export default Navbar