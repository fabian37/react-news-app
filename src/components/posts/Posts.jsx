import { useContext } from 'react';
import { context } from '../../App';
import { Loader } from '../loader/Loader';
import { Post } from '../post/Post';
import styles from './Posts.module.css';

export const Posts = () => {
	const { news } = useContext(context);
	if (news.length === 0) {
		return <Loader />;
	}
	return (
		<div className={styles.posts}>
			{news.map(post => (
				<Post
					key={post.id}
					image={post.imageUrl}
					content={post.content}
					date={post.date}
					title={post.title}
					id={post.id}
				/>
			))}
		</div>
	);
};
