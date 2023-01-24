import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import { Detail } from './pages/detail/Detail';
import { Settings } from './pages/settings/Settings';
import './App.css';
import { get } from './utils/getInfo';
import { Contact } from './pages/contact/Contact';

export const context = createContext();

const App = () => {
	const [user, setUser] = useState(false);
	console.log(user);
	const [category, setCategory] = useState('all');
	const [news, setNews] = useState([]);
	const [search, setSearch] = useState(false);
	console.log(news);

	useEffect(() => {
		setNews([]);
		get(category)
			.then(data => {
				setNews(data.data);
			})
			.catch(error => console.log('something went wrong: ' + error));
	}, [category]);

	return (
		<BrowserRouter>
			<context.Provider
				value={{
					user,
					setUser,
					category,
					setCategory,
					news,
					setNews,
					search,
					setSearch,
				}}
			>
				<Header />
				<Routes>
					<Route path='/' element={user ? <Home /> : <Login />} />
					<Route path='/about' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={user ? <Home /> : <Login />} />
					<Route path='/signup' element={user ? <Home /> : <Signup />} />
					<Route path='/post/:id' element={<Detail />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</context.Provider>
		</BrowserRouter>
	);
};
export default App;
