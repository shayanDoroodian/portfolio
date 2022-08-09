import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer?</h5>
			<h2>Services</h2>

			<div className='container services__conatiner'>
				<article className='service'>
					<div className='service__head'>
						<h3>UI/UX Design</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Design and implement creative websites</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Fully responsive design</p>
						</li>

						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Designed based on customer needs</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>User-friendly view</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Cover all types of websites</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>Full-Stack</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Attractive admin panel for managment</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>RESTful API architectural style</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Super fast Technologies</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>High security system</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Design single page application</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Easy to customize admin panel</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Manage all parts of your website</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>React.js</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Reactive Design is fastest</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Single Page Application no need to refresh</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Data requests and update UI quickely</p>
						</li>
						<li>
							<BiCheck className='services__container-icon'></BiCheck>
							<p>Easy to handle data with RESTful Api</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
