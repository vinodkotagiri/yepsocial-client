import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import {
	MdSearch,
	MdHome,
	MdOndemandVideo,
	MdStorefront,
	MdPeopleAlt,
	MdGamepad,
	MdNotifications,
} from 'react-icons/md'
import { CgMenuGridO } from 'react-icons/cg'
import { TiMessages } from 'react-icons/ti'
import './styles.css'
import { Link } from 'react-router-dom'
const TopBar = () => {
	const [active, setActive] = useState({ home: true })
	const user = useSelector((state) => state.auth.user)
	return (
		<div className='topbar'>
			{/* LEFT SECTION */}
			<div className='left-section'>
				<img src={logo} alt='logo' className='logo' />
				<div className='input-wrapper'>
					<MdSearch className='svg-search' size={36} />
					<input className=' search-bar' type='text' placeholder='Search' />
				</div>
			</div>
			{/* LEFT SECTION END */}
			{/* CENTER SECTION */}

			<div className='center-section'>
				<Link
					to='/'
					className={active.home ? 'nav-item nav-item--active' : 'nav-item'}
					onClick={() => setActive({ home: true })}>
					<MdHome size={48} className='nav-icon' />
				</Link>
				<Link
					className={active.watch ? 'nav-item nav-item--active' : 'nav-item'}
					onClick={() => setActive({ watch: true })}>
					<MdOndemandVideo size={48} className='nav-icon' />
				</Link>
				<Link
					className={active.store ? 'nav-item nav-item--active' : 'nav-item'}
					onClick={() => setActive({ store: true })}>
					<MdStorefront size={48} className='nav-icon' />
				</Link>
				<Link
					className={active.friends ? 'nav-item nav-item--active' : 'nav-item'}
					onClick={() => setActive({ friends: true })}>
					<MdPeopleAlt size={48} className='nav-icon' />
				</Link>
				<Link
					className={active.game ? 'nav-item nav-item--active' : 'nav-item'}
					onClick={() => setActive({ game: true })}>
					<MdGamepad size={48} className='nav-icon' />
				</Link>
			</div>

			{/* CENTER SECTION END */}
			{/* RIGHT SECTION */}
			<div className='right-section'>
				<div className='right-btns-wrapper'>
					<CgMenuGridO size={32} />
					<TiMessages size={32} />
					<div>
						<div className='notification'>
							<MdNotifications size={32} />
							<div className='notification-count'>
								<small className='notification-number'>0</small>
							</div>
						</div>
					</div>
					<img src={user?.picture} alt='user-avatar' className='user-avatar' />
				</div>
			</div>
			{/* RIGHT SECTION END */}
		</div>
	)
}

export default TopBar
