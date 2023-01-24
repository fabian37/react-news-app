import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export const Post = ({ image, content, date, title, id }) => (
	<div className={styles.post}>
		<img className={styles.postImage} src={image} alt={title} />
		<Link className={styles.postTitle} to={`post/${id}`}>
			{title}
		</Link>
		<span className={styles.postTime}>{date}</span>
		<p className={styles.postDescription}>{content}</p>
	</div>
);
