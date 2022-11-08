import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import {
	MagnifyingGlassIcon,
	ChatBubbleLeftRightIcon,
	EllipsisVerticalIcon,
	UserCircleIcon,
	BellIcon,
	SunIcon,
	MoonIcon,
} from '@heroicons/react/24/solid'
const Navbar = () => {
	const [darkmode, setDarkMode] = useState(false)
	return (
		<div className='w-screen h-16 flex gap-3 items-center shadow-lg'>
			<div className='p-3'>
				<img src={logo} alt='logo' className='h-14' />
			</div>
			<div className='flex flex-1'>
				<div className='flex items-center bg-gray-100 p-2 text-gray-700 border-l-2 border-b-2 border-t-2  rounded-l-md cursor-pointer hover:bg-gray-200'>
					<MagnifyingGlassIcon className='h-6' />
				</div>
				<div className='border-2 w-full rounded-r-md'>
					<input className='p-2 w-full outline-none' placeholder='Search' />
				</div>
			</div>
			<div className='flex gap-3 mr-3 text-gray-600 items-center'>
				<UserCircleIcon className='h-12' />
				<ChatBubbleLeftRightIcon className='h-10' />
				<BellIcon className='h-10' />
				<EllipsisVerticalIcon className='h-10' />
				{darkmode ? (
					<MoonIcon className='h-10 cursor-pointer' onClick={() => setDarkMode(!darkmode)} />
				) : (
					<SunIcon className='h-10 cursor-pointer' onClick={() => setDarkMode(!darkmode)} />
				)}
			</div>
		</div>
	)
}

export default Navbar
