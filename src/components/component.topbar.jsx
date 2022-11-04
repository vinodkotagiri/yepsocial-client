import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Topbar = () => {
	return (
		<Fragment>
			<div>Topbar</div>
			<Outlet />
		</Fragment>
	)
}

export default Topbar
