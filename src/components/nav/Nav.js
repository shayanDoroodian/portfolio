import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
	const [nav, setNav] = useState('#');
	return (
		<nav>
			<a
				href='#'
				onClick={() => setNav('#')}
				className={nav === '#' ? 'active' : ''}>
				<AiOutlineHome></AiOutlineHome>
			</a>
			<a
				href='#about'
				onClick={() => setNav('about')}
				className={nav === 'about' ? 'active' : ''}>
				<AiOutlineUser></AiOutlineUser>
			</a>
			<a
				href='#experiences'
				onClick={() => setNav('experiences')}
				className={nav === 'experiences' ? 'active' : ''}>
				<BiBook></BiBook>
			</a>
			<a
				href='#services'
				onClick={() => setNav('services')}
				className={nav === 'services' ? 'active' : ''}>
				<RiServiceLine></RiServiceLine>
			</a>
			<a
				href='#contact'
				onClick={() => setNav('contact')}
				className={nav === 'contact' ? 'active' : ''}>
				<BiMessageSquareDetail></BiMessageSquareDetail>
			</a>
		</nav>
	);
};

export default Nav;
