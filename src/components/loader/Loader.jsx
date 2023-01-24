import styles from './Loader.module.css';

export const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.myProgress}>
				<div className={styles.myBar}></div>
			</div>
		</div>
	);
};
