import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export const Post = ({ category, image, overview, time, title, id }) => (
	<div className={styles.post}>
		<img className={styles.postImage} src={image} alt={title} />
		{/* <div className={styles.postCategories}>
			{category.map((category, index) => (
				<a
					className={styles.postCategory}
					key={index}
					href='/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{category}
				</a>
			))}
		</div> */}
		<Link className={styles.postTitle} to={`post/${id}`}>
			{title}
		</Link>
		<span className={styles.postTime}>{time}</span>
		<p className={styles.postDescription}>{overview}</p>
	</div>
);
