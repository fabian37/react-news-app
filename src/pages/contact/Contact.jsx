import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = () => {
	const form = useRef();
	const submitHandler = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_6gpsp38',
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_ID
			)
			.then(
				result => {
					console.log(result);
				},
				error => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className={styles.contact}>
			<span className={styles.contactTitle}>Contact me</span>
			<form ref={form} className={styles.contactForm} onSubmit={submitHandler}>
				<label htmlFor='username'>Name</label>
				<input
					className={styles.contactInput}
					type='text'
					id='user_name'
					name='user_name'
					placeholder='Enter your name...'
					required
				/>
				<label htmlFor='email'>Email</label>
				<input
					className={styles.contactInput}
					type='text'
					id='email'
					name='email'
					placeholder='Enter your email...'
					required
				/>
				<label htmlFor='message'>Message</label>
				<textarea
					className={styles.contactMessage}
					id='message'
					name='message'
					placeholder='Enter your message...'
					required
				></textarea>
				<button type='submit' className={styles.contactButton}>
					Send
				</button>
			</form>
		</div>
	);
};
