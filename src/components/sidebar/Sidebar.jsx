import styles from './Sidebar.module.css';
import image from '../../assets/foto1.jpeg';

export const Sidebar = () => (
	<aside className={styles.container}>
		<span className={styles.title}>ABOUT ME</span>
		<img className={styles.image} src={image} alt='Winter' />
		<p className={styles.description}>
			Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet
			ex esse.Sunt eu ut nostrud id quis proident.
		</p>
		<span className={styles.title}>CATEGORIES</span>
		<div className={styles.categories}>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Life
			</a>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Music
			</a>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Sport
			</a>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Style
			</a>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Tech
			</a>
			<a
				className={styles.category}
				href='/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Cinema
			</a>
		</div>
		<span className={styles.title}>FOLLOW US</span>
		<div className={styles.socialMediaContainer}>
			<a
				className={styles.iconContainer}
				href='https://www.facebook.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-facebook'></i>
			</a>
			<a
				className={styles.iconContainer}
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-instagram'></i>
			</a>
			<a
				className={styles.iconContainer}
				href='https://www.pinterest.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-pinterest'></i>
			</a>
			<a
				className={styles.iconContainer}
				href='https://twitter.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa-brands fa-square-twitter'></i>
			</a>
		</div>
	</aside>
);
