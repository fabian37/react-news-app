import styles from './HeaderLeft.module.css';

export const HeaderLeft = () => {
	return (
		<div className={styles.headerLeftContainer}>
			<a
				className={styles.socialMediaContainer}
				href='https://www.facebook.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-facebook'></i>
			</a>
			<a
				className={styles.socialMediaContainer}
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-instagram'></i>
			</a>
			<a
				className={styles.socialMediaContainer}
				href='https://www.pinterest.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-pinterest'></i>
			</a>
			<a
				className={styles.socialMediaContainer}
				href='https://twitter.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-twitter'></i>
			</a>
		</div>
	);
};
