import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export const Login = () => (
	<div className={styles.login}>
		<span className={styles.loginTitle}>Log in</span>
		<form className={styles.loginForm}>
			<label htmlFor='email'>Email</label>
			<input
				className={styles.loginInput}
				type='text'
				id='email'
				name='email'
				placeholder='Enter your email...'
			/>
			<label htmlFor='password'>Password</label>
			<input
				className={styles.loginInput}
				type='password'
				id='password'
				name='password'
				placeholder='Enter your password...'
			/>
			<button className={styles.loginButton}>Log in</button>
			<Link to='/signup'>
				<button className={styles.loginRegisterButton}>Sign up</button>
			</Link>
		</form>
	</div>
);
