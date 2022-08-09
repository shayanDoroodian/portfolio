import React from 'react';
import './about.css';
import Me from '../../assets/images/3.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me </h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={Me} alt='me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon'></FaAward>
							<h5>Experinces</h5>
							<small>3+ Years Of Working</small>
						</article>
						<article className='about__card'>
							<FiUser className='about__icon'></FiUser>
							<h5>Clients</h5>
							<small>50+ World Wide</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon'></VscFolderLibrary>
							<h5>Projects</h5>
							<small>15+ Compilited</small>
						</article>
					</div>
					<p>
						I am a talented, ambitious and hardworking individual, with broad
						skills and experience in Front-End Development, Back-End Development
						and App Development. Furthermore, I am adept at handling multiple
						tasks on a daily basis competently and at working well under
						pressure. A key strength is communication; building strong
						relationships with people in order to deliver the best results.
						Recently, I started learning some Back-End technologies, including
						Python and Django.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
