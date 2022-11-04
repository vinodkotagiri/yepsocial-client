import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import { Toaster } from 'react-hot-toast'
import Activate from './pages/activate'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/auth'
import TopNav from './components/topbar'
import { useWindowWidth } from '@react-hook/window-size'

const App = () => {
	const screenWidth = useWindowWidth()
	const dispatch = useDispatch()
	useEffect(() => {
		if (localStorage.getItem('auth')) {
			const auth = JSON.parse(localStorage.getItem('auth'))
			dispatch(login(auth))
		}
	}, [])
	return (
		<>
			{screenWidth > 1200 ? (
				<div>
					<Routes>
						<Route path='/' element={<TopNav />}>
							<Route index element={<Home />} />
							<Route path='profile' element={<Profile />} />
						</Route>
						<Route path='/login' element={<Login />} />
						<Route path='/activate/:token' element={<Activate />} />
					</Routes>
					<Toaster position='top-right' reverseOrder={false} />
				</div>
			) : (
				<div
					className='d-flex justify-content-center flex-column align-items-center p-5 text-justify'
					style={{ height: '100vh' }}>
					<h1>😥</h1>
					<h1 className='text-muted' style={{ fontWeight: 200 }}>
						Available only on screen width greater than 1200px.
					</h1>
				</div>
			)}
		</>
	)
}

export default App
