import React from 'react'
import SidebarLeftItem from '../SideBarLeftItem'
import { ReactComponent as userIcon } from '../../assets/images/user_icon.svg'
import { ReactComponent as friendsIcon } from '../../assets/images/friends_icon.svg'
import { ReactComponent as groupsIcon } from '../../assets/images/groups_icon.svg'
import { ReactComponent as marketplaceIcon } from '../../assets/images/market_place_icon.svg'
import { ReactComponent as watchIcon } from '../../assets/images/watch_icon.svg'
import { ReactComponent as memoriesIcon } from '../../assets/images/memories_icon.svg'
import { ReactComponent as eventsIcon } from '../../assets/images/events_icon.svg'
import { ReactComponent as gamingIcon } from '../../assets/images/gaming_icon.svg'
import { ReactComponent as galleryIcon } from '../../assets/images/gallery_icon.svg'
import { ReactComponent as videosIcon } from '../../assets/images/videos_icon.svg'
import { ReactComponent as messagesIcon } from '../../assets/images/messages_icon.svg'
import { ReactComponent as charityIcon } from '../../assets/images/charity_icon.svg'
import { ReactComponent as bloodIcon } from '../../assets/images/blood_icon.svg'
import { ReactComponent as tutorialIcon } from '../../assets/images/tutorial_icon.svg'
import { ReactComponent as coursesIcon } from '../../assets/images/courses_icon.svg'

const LeftSidebar = () => {
	return (
		<div className='flex flex-col w-content p-6'>
			<SidebarLeftItem Icon={userIcon} title='Vinod' />
			<SidebarLeftItem Icon={friendsIcon} title='Friends' />
			<SidebarLeftItem Icon={groupsIcon} title='Groups' />
			<SidebarLeftItem Icon={marketplaceIcon} title='Marketplace' />
			<SidebarLeftItem Icon={watchIcon} title='Watch' />
			<SidebarLeftItem Icon={memoriesIcon} title='Memories' />
			<hr className='mt-6 mb-3' />
			<p className='my-3 text-gray-600'>Your Shortcuts</p>
			<SidebarLeftItem Icon={eventsIcon} title='Events' />
			<SidebarLeftItem Icon={gamingIcon} title='Gaming' />
			<SidebarLeftItem Icon={galleryIcon} title='Gallery' />
			<SidebarLeftItem Icon={videosIcon} title='Videos' />
			<SidebarLeftItem Icon={messagesIcon} title='Messages' />
			<hr className='my-6' />
			<p className='my-3 text-gray-600'>Others</p>
			<SidebarLeftItem Icon={charityIcon} title='Charity' />
			<SidebarLeftItem Icon={bloodIcon} title='Blood Donation' />
			<SidebarLeftItem Icon={tutorialIcon} title='Tutorials' />
			<SidebarLeftItem Icon={coursesIcon} title='Courses' />
		</div>
	)
}

export default LeftSidebar
