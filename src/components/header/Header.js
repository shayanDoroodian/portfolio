import React from 'react';
import CTA from './CTA';
import Me from '../../assets/images/2.png';
import Socials from './Socials';
import './header.css';
const Header = () => {
	return (
		<header>
			<section className='container header__container'>
				<h5>HELLO I'm</h5>
				<h1>Shayan Doroodian</h1>
				<h5 className='text-light'>a Front-End Developer</h5>
				<CTA></CTA>
				<div className='me'>
					<img src={Me} alt='shayan' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
				<Socials></Socials>
			</section>
		</header>
	);
};

export default Header;
