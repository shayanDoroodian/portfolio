import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
	return (
		<section id='experiences'>
			<h5>What Skills Do I Have???</h5>
			<h2>My Experiences</h2>
			<div className='container experoence__container'>
				<div className='experience__frontend'>
					<h3>Front-End Development</h3>
					<div className='experience__content'>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>HTML5</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>CSS3</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>JAVA SCRIPT</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>BOOTSTRAP</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>REACT.JS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>JQUERY</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className='experience__backtend'>
					<h3>Back-End Development</h3>
					<div className='experience__content'>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>MONGO DB</h4>
								<small className='text-light'>Entry-Eevel</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>PHP</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>MYSQL</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>PYTHON</h4>
								<small className='text-light'>Intermediate </small>
							</div>
						</article>
						<article className='experienceDetail'>
							<BsPatchCheckFill className='experince__detail-icon'></BsPatchCheckFill>
							<div>
								<h4>DJANGO</h4>
								<small className='text-light'>Entry-Eevel</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
