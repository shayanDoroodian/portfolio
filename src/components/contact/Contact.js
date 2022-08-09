import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiTelegramLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_ynd6w0s',
				'template_jdodglq',
				form.current,
				'3bwffOsK9mM67i0TO'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section id='contact'>
			<h5>Keep in Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__conatiner'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
						<h4>Email</h4>
						<h5>doroodianshayan64@gmail.com</h5>
						<a href='mailto:doroodianshayan64@gmail.com' target='_blank'>
							Send Message
						</a>
					</article>
					<article className='contact__option'>
						<RiTelegramLine className='contact__option-icon'></RiTelegramLine>
						<h4>Telegram</h4>
						<h5>shyn_d</h5>
						<a href='https://t.me/shyn_d' target='_blank'>
							Send Message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon'></BsWhatsapp>
						<h4>Whtasapp</h4>
						<h5>+905338455765</h5>
						<a
							href='https://api.whatsapp.com/send?phone=00989335250526'
							target='_blank'>
							Send Message
						</a>
					</article>
				</div>
				<form action='' ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='your full name'
						required
					/>
					<input type='email' name='email' placeholder='your email' required />
					<textarea
						name='message'
						placeholder='Your Message . . .'
						rows='7'
						required></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
