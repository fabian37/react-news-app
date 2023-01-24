import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../../App';
import styles from './HeaderRight.module.css';

export const HeaderRight = () => {
	const { user, setUser } = useContext(context);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(styles.responsive);
	};

	const handlerLogout = () => {
		showNavbar();
		setUser(false);
	};

	return (
		<>
			<nav ref={navRef} className={styles.navContainer}>
				<Link className={styles.navItem} to='/' onClick={showNavbar}>
					HOME
				</Link>
				<Link className={styles.navItem} to='/about' onClick={showNavbar}>
					ABOUT
				</Link>
				<Link className={styles.navItem} to='/contact' onClick={showNavbar}>
					CONTACT
				</Link>
				{user ? (
					<>
						<Link
							className={styles.navItem}
							to='/settings'
							onClick={showNavbar}
						>
							<img
								className={styles.avatar}
								src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
								alt=''
							/>
						</Link>
						<button onClick={handlerLogout} className={styles.logout}>
							LOG OUT
						</button>
					</>
				) : (
					<>
						<Link className={styles.navItem} to='/login'>
							LOG IN
						</Link>
						<Link className={styles.navItem} to='/signup'>
							SING UP
						</Link>
					</>
				)}
				<button
					onClick={showNavbar}
					className={`${styles.navBtn} ${styles.navCloseBtn}`}
				>
					<i className='fa-solid fa-xmark'></i>
				</button>
			</nav>
			<button onClick={showNavbar} className={styles.navBtn}>
				<i className='fa-solid fa-bars'></i>
			</button>
		</>
	);
};
