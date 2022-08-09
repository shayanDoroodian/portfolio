import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Socials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/shayan-doroodian'
				target='_blank'
				rel='noreferrer'>
				<BsLinkedin></BsLinkedin>
			</a>
			<a
				href='https://github.com/shayanDoroodian'
				target='_blank'
				rel='noreferrer'>
				<FaGithub></FaGithub>
			</a>
			<a
				href='https://instagram.com/shayan._.dro'
				target='_blank'
				rel='noreferrer'>
				<FiInstagram></FiInstagram>
			</a>
		</div>
	);
};

export default Socials;
