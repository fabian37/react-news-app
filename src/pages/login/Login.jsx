import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { context } from '../../App';
import { useContext } from 'react';

export const Login = () => {
	const { setUser } = useContext(context);

	const handlerLogin = e => {
		e.preventDefault();
		setUser(true);
	};

	return (
		<div className={styles.login}>
			<span onClick={handlerLogin} className={styles.loginTitle}>
				Log in
			</span>
			<form onSubmit={handlerLogin} className={styles.loginForm}>
				<label htmlFor='email'>Email</label>
				<input
					className={styles.loginInput}
					type='text'
					id='email'
					name='email'
					placeholder='Enter your email...'
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					className={styles.loginInput}
					type='password'
					id='password'
					name='password'
					placeholder='Enter your password...'
					required
				/>
				<button type='submit' className={styles.loginButton}>
					Log in
				</button>
				<Link to='/signup'>
					<button className={styles.loginRegisterButton}>Sign up</button>
				</Link>
			</form>
		</div>
	);
};
