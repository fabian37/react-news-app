import { Sidebar } from '../../components/sidebar/Sidebar';
import styles from './Detail.module.css';
import posts from '../../constants/posts.json';
import { useParams } from 'react-router-dom';

export const Detail = () => {
	const { id } = useParams();
	return (
		<div className={styles.detailContainer}>
			<div className={styles.detail}>
				<img
					className={styles.detailImage}
					src={posts[id].image}
					alt={posts[id].title}
				/>
				<div className={styles.detailTitleContainer}>
					<h1 className={styles.detailTitle}>{posts[id].title}</h1>
					<div className={styles.detailIcon}>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</div>
				<div className={styles.detailInfo}>
					<p>
						Author: <strong>{posts[id].author}</strong>
					</p>
					<p>{posts[id].time}</p>
				</div>
				<p className={styles.detailDescription}>{posts[id].post_body}</p>
			</div>
			<Sidebar />
		</div>
	);
};
