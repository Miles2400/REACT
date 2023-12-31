import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar mb-20" >
			<a href="#home">
				<img src={logo} alt="logo" className='w-[124px] h-[32px]' />
			</a>

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}>
						<a href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className="flex sm:hidden flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu} alt="menu"
					className='w-[28px] object-contain h-[28px]'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient top-20 right-0 absolute mx-4 my-2 min-w-[130px] rounded-xl sidebar`}>
					<ul className="list-none flex justify-end items-center flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} hover:bg-slate-600 w-[100%] text-center rounded-[6px] p-1`}>
								<a href={`#${nav.id}`}>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar