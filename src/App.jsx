import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
const App = () => {
	const isLoggedIn = true
	const ProtectedRoute = ({ children }) => {
		if (!isLoggedIn) return <Navigate to='/login' />
		return children
	}
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/login',
			element: <Login />,
		},
	])
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
