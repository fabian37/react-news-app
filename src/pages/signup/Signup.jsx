import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

export const Signup = () => (
	<div className={styles.signup}>
		<span className={styles.signupTitle}>Sign up</span>
		<form className={styles.signupForm}>
			<label htmlFor='username'>Username</label>
			<input
				className={styles.signupInput}
				type='text'
				id='username'
				name='username'
				placeholder='Enter your username...'
			/>
			<label htmlFor='email'>Email</label>
			<input
				className={styles.signupInput}
				type='text'
				id='email'
				name='email'
				placeholder='Enter your email...'
			/>
			<label htmlFor='password'>Password</label>
			<input
				className={styles.signupInput}
				type='password'
				id='password'
				name='password'
				placeholder='Enter your password...'
			/>
			<button className={styles.signupButton}>Sign up</button>
			<Link to='/login'>
				<button className={styles.loginRegisterButton}>Log in</button>
			</Link>
		</form>
	</div>
);
