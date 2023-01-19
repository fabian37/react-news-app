import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Write } from './pages/write/Write';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import { Detail } from './pages/detail/Detail';
import { Settings } from './pages/settings/Settings';
import './App.css';

const App = () => {
	const logged = false;
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<Home />} />
				<Route path='/contact' element={<Home />} />
				<Route path='/write' element={logged ? <Write /> : <Login />} />
				<Route path='/login' element={logged ? <Home /> : <Login />} />
				<Route path='/signup' element={logged ? <Home /> : <Signup />} />
				<Route path='/post/:id' element={<Detail />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
