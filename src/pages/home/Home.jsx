import { useContext } from 'react';
import { context } from '../../App';
import { Categories } from '../../components/categories/Categories';
import { Hero } from '../../components/hero/Hero';
import { Posts } from '../../components/posts/Posts';
import styles from './Home.module.css';

export const Home = () => {
	const { search, setSearch } = useContext(context);
	const handlerSearch = () => {
		setSearch(true);
	};

	return (
		<main className={styles.homeContainer}>
			{search ? <Categories /> : <Hero />}
			<button
				className={search ? styles.btnSearchOff : styles.btnSearch}
				onClick={handlerSearch}
			>
				{' '}
				Search by category
				<div className={styles.icon}>
					<svg
						height='24'
						width='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M0 0h24v24H0z' fill='none'></path>
						<path
							d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
							fill='currentColor'
						></path>
					</svg>
				</div>
			</button>
			<section className={styles.infoContainer}>
				<Posts />
			</section>
		</main>
	);
};
