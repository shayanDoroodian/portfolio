import React from 'react';
import './testimonials.css';
import IMG from '../../assets/images/1.png';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review From Clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className='container testimonials__container'
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				<SwiperSlide className='testimonials'>
					<div className='client__avatar'>
						<img src={IMG} alt='name' />
					</div>

					<h5 className='client__name'>Client 1</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
						necessitatibus unde quas fugit nesciunt ullam odit! Dolore
						laudantium distinctio ea totam expedita quasi, harum ipsa aut
						provident recusandae nulla non.
					</small>
				</SwiperSlide>
				<SwiperSlide className='testimonials'>
					<div className='client__avatar'>
						<img src={IMG} alt='name' />
					</div>

					<h5 className='client__name'>Client 2</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
						necessitatibus unde quas fugit nesciunt ullam odit! Dolore
						laudantium distinctio ea totam expedita quasi, harum ipsa aut
						provident recusandae nulla non.
					</small>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Testimonials;
