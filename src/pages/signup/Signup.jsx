import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../App';

export const Signup = () => {
	const { setUser } = useContext(context);

	const handlerSignup = e => {
		e.preventDefault();
		setUser(true);
	};

	return (
		<div className={styles.signup}>
			<span className={styles.signupTitle}>Sign up</span>
			<form onSubmit={handlerSignup} className={styles.signupForm}>
				<label htmlFor='username'>Username</label>
				<input
					className={styles.signupInput}
					type='text'
					id='username'
					name='username'
					placeholder='Enter your username...'
					required
				/>
				<label htmlFor='email'>Email</label>
				<input
					className={styles.signupInput}
					type='text'
					id='email'
					name='email'
					placeholder='Enter your email...'
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					className={styles.signupInput}
					type='password'
					id='password'
					name='password'
					placeholder='Enter your password...'
					required
				/>
				<button type='submit' className={styles.signupButton}>
					Sign up
				</button>
				<Link to='/login'>
					<button className={styles.loginRegisterButton}>Log in</button>
				</Link>
			</form>
		</div>
	);
};
