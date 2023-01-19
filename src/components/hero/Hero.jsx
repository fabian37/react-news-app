import styles from './Hero.module.css';
import image from '../../assets/foto6.webp';

export const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<div className={styles.titleContainer}>
				<h1 className={styles.firstTitle}>React & Node</h1>
				<h2 className={styles.secondTitle}>BLOG</h2>
			</div>
			<img className={styles.img} src={image} alt='flowers and sunset' />
		</section>
	);
};
