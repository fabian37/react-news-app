import { useContext } from 'react';
import { context } from '../../App';
import styles from './Categories.module.css';

export const Categories = () => {
	const { setCategory } = useContext(context);
	const handlerAuto = () => {
		setCategory('automobile');
	};
	const handlerBusiness = () => {
		setCategory('business');
	};
	const handlerWorld = () => {
		setCategory('world');
	};
	const handlerStartup = () => {
		setCategory('startup');
	};
	const handlerScience = () => {
		setCategory('science');
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>CATEGORIES</h2>
			<p className={styles.subtitle}>Choose a category</p>
			<div className={styles.categoriesContainer}>
				<button className={styles.category} onClick={handlerAuto}>
					AUTOMOBILE
				</button>
				<button className={styles.category} onClick={handlerBusiness}>
					BUSINESS
				</button>
				<button className={styles.category} onClick={handlerWorld}>
					WORLD
				</button>
				<button className={styles.category} onClick={handlerStartup}>
					STARTUP
				</button>
				<button className={styles.category} onClick={handlerScience}>
					SCIENCE
				</button>
			</div>
		</div>
	);
};
