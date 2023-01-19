import styles from './Write.module.css';
import image from '../../assets/foto1.jpeg';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const Write = () => (
	<div className={styles.container}>
		<div className={styles.writeContainer}>
			<div className={styles.write}>
				<img className={styles.writeImage} src={image} alt='cover image' />
				<form className={styles.formContainer}>
					<div className={styles.titleContainer}>
						<label className={styles.label} htmlFor='inputFile'>
							<i className='fa-solid fa-square-plus'></i>
						</label>
						<input
							className={styles.writeFile}
							type='file'
							name='inputFile'
							id='inputFile'
						/>
						<input
							className={styles.writeTitle}
							type='text'
							name='inputTitle'
							placeholder='Title'
							autoFocus
						/>
					</div>
					<textarea
						className={styles.writeDescription}
						placeholder='Tell your story...'
						name='description'
						rows='11'
					></textarea>
					<button className={styles.btn} type='submit'>
						<span>Publish</span>
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	</div>
);
