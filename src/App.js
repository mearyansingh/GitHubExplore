import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { GithubProvider } from './Context/Github/GithubContext'
import Loader from './Components/Layout/Loader';

const Home = lazy(() => import('./Routes/Home'));
const About = lazy(() => import('./Routes/About'));
const User = lazy(() => import('./Routes/User'));
const NotFound = lazy(() => import('./Routes/NotFound'));

function App() {

	return (
		<GithubProvider>
			<Router>
				<div className='d-flex flex-column min-vh-100'>
					<Header />
					<main className='container flex-grow-1 py-3'>
						<Routes>
							<Route
								path='/'
								element={<Suspense fallback={<Loader />}><Home /></Suspense>}
							/>
							<Route
								path='/about'
								element={<Suspense fallback={<Loader />}><About /></Suspense>} />
							<Route
								path='/user/:login'
								element={<Suspense fallback={<Loader />}><User /></Suspense>}
							/>
							<Route
								path='/notfound'
								element={<Suspense fallback={<Loader />}><NotFound /></Suspense>}
							/>
							<Route
								path='*'
								element={<Suspense fallback={<Loader />}><NotFound /></Suspense>}
							/>
						</Routes>
					</main>
					<Footer />
				</div>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</Router>
		</GithubProvider>
	);
}

export default App;
