import { HeaderLeft } from './headerLeft/HeaderLeft';
import { HeaderRight } from './headerRight/HeaderRight';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<HeaderLeft />
			<HeaderRight />
		</header>
	);
};
