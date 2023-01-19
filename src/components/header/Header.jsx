import { HeaderLeft } from './headerLeft/HeaderLeft';
import { HeaderNav } from './headerNav/HeaderNav';
import { HeaderRight } from './headerRight/HeaderRight';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<HeaderLeft />
			<HeaderNav />
			<HeaderRight />
		</header>
	);
};
