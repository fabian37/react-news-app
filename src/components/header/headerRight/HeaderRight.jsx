import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderRight.module.css';

export const HeaderRight = () => {
	const [logged, setLogged] = useState(true);
	const handlerLogout = () => {
		setLogged(false);
	};
	return (
		<div className={styles.headerRightContainer}>
			{logged ? (
				<>
					{' '}
					<Link className={styles.navItem} to='/settings'>
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

			<i className='fa-solid fa-magnifying-glass'></i>
		</div>
	);
};
