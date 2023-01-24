import styles from './Detail.module.css';
import { useParams, Link } from 'react-router-dom';
import { context } from '../../App';
import { useContext, useState } from 'react';

export const Detail = () => {
	const { id } = useParams();
	const { news } = useContext(context);
	const [state] = useState(news.filter(index => index.id === id));

	return (
		<div className={styles.detailContainer}>
			<div className={styles.detail}>
				<img
					className={styles.detailImage}
					src={state[0].imageUrl}
					alt={state[0].title}
				/>
				<div className={styles.detailInfo}>
					<p>
						Author: <strong>{state[0].author}</strong>
					</p>
					<p>{state[0].date}</p>
				</div>
				<h1 className={styles.detailTitle}>{state[0].title}</h1>
				<p className={styles.detailDescription}>{state[0].content}</p>
				<Link to='/'>
					<button className={styles.btnSearch}>
						{' '}
						Back to home
						<div className={styles.icon}>
							<svg
								height='24'
								width='24'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M0 0h24v24H0z' fill='none'></path>
								<path
									d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
									fill='currentColor'
								></path>
							</svg>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
};
