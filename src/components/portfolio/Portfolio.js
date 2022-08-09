import React from 'react';
import './portfolio.css';
import com from '../../assets/images/coming-soon.png';
import nik from '../../assets/images/Screenshot (111).png';
import pomaj from '../../assets/images/Screenshot (113).png';
const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Works</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={nik} alt='portfolio' />
					</div>
					<h3>Nikpouyan</h3>
					<div className='portfolio__item-cta'>
						<a href='/' className='btn'>
							Github
						</a>
						<a
							href='https://nikpouyan.com/'
							className='btn btn-primary'
							target='_bank'>
							Visit Site
						</a>
					</div>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={pomaj} alt='portfolio' />
					</div>
					<h3>Pomaj</h3>
					<div className='portfolio__item-cta'>
						<a href='/' className='btn'>
							Github
						</a>
						<a
							href='http://pomaj.ir/'
							className='btn btn-primary'
							target='_bank'>
							Visit Site
						</a>
					</div>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={com} alt='portfolio' />
					</div>
					<h3>Comming soon . . .</h3>
					<div className='portfolio__item-cta'>
						<a href='/' className='btn'>
							Github
						</a>
						<a href='/' className='btn btn-primary' target='_bank'>
							Visit Site
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
