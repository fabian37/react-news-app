import { Hero } from '../../components/hero/Hero';
import { Posts } from '../../components/posts/Posts';
import { Sidebar } from '../../components/sidebar/Sidebar';
import styles from './Home.module.css';

export const Home = () => (
	<main>
		<Hero />
		<section className={styles.infoContainer}>
			<Posts />
			<Sidebar />
		</section>
	</main>
);
