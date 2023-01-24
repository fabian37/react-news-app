import styles from './About.module.css';
import image from '../../assets/about-me.jpeg';

export const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				<img className={styles.aboutImage} src={image} alt='selfie' />
				<p className={styles.description}>
					Hi there, I&apos;m Gomez, I from Colombia, right now I&apos;m a
					frontend developer and this app was created using React.
				</p>
				<span className={styles.follow}>Follow me on social media</span>
				<div className={styles.socialMedia}>
					<a
						href='https://github.com/fabian37/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-square-github'></i>
					</a>

					<a
						href='https://www.linkedin.com/in/fabian37/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-linkedin'></i>
					</a>

					<a
						href='https://www.instagram.com/fabian.g37/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-square-instagram'></i>
					</a>
				</div>
			</div>
		</div>
	);
};
