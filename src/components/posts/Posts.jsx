import { useEffect, useState } from 'react';
// import posts from '../../constants/posts.json';
import { get } from '../../utils/getInfo';
import { Post } from '../post/Post';
import styles from './Posts.module.css';

export const Posts = () => {
	const [news, setNews] = useState([]);
	// const [loader, setLoader] = useState(false);

	useEffect(() => {
		// setLoader(true);
		get('all')
			.then(data => {
				setNews(data.data);
			})
			.catch(error => console.log('Error: ' + error));
	}, []);

	if (news.length === 0) {
		return 'esperando la info';
	}
	console.log(news);
	console.log(news.length);

	// console.log(news[0].author);
	return (
		<div className={styles.posts}>
			{news.map((post, index) => (
				<Post
					key={index}
					// category={post.category}
					image={post.imageUrl}
					overview={post.content}
					time={post.date}
					title={post.title}
					id={index}
				/>
			))}
			{/* {posts.map(post => (
				<Post
					key={post.id}
					category={post.category}
					image={post.image}
					overview={post.overview}
					time={post.time}
					title={post.title}
					id={post.id}
				/>
			))} */}
		</div>
	);
};
