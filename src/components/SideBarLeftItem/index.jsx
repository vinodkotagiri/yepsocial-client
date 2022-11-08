import React from 'react'

const SidebarLeftItem = ({ Icon, title }) => {
	return (
		<div className='flex gap-3 items-center m-1 text-gray-600'>
			<Icon className='h-6' />
			<p className='text-md mx-1 font-semibold'>{title}</p>
		</div>
	)
}

export default SidebarLeftItem
