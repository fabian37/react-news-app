import styles from './HeaderLeft.module.css';
import image from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const HeaderLeft = () => {
	return (
		<div className={styles.headerLeftContainer}>
			<Link to='/'>
				<img className={styles.logo} src={image} alt='logo' />
			</Link>
		</div>
	);
};
