import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</Fragment>
	)
}

export default App
