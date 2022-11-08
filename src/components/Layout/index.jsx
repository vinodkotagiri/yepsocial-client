import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'
const Layout = () => {
	return (
		<div>
			<Navbar />
			<div className='flex'>
				<LeftSidebar />
				<Outlet />
				<RightSidebar />
			</div>
		</div>
	)
}

export default Layout
