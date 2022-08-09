import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				SHAYAN
			</a>

			<ul className='permalink'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experiences'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://www.linkedin.com/in/shayan-doroodian' target='_blank'>
					<BsLinkedin></BsLinkedin>
				</a>
				<a href='https://instagram.com/shayan._.dro' target='_blank'>
					<FiInstagram></FiInstagram>
				</a>
				<a href='https://twitter.com/ShayanDoroodian' target='_blank'>
					{' '}
					<IoLogoTwitter></IoLogoTwitter>{' '}
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Shayan,All rights reserved.</small>
			</div>
		</footer>
	);
};
export default Footer;
