'use client'
import { CommunitieIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, Notification, NotificationFilled, ProfileIcon, ProfileIconFill, SearchIcon, TweetIcon, TwitterLogo, VerifiedIcon } from './Icons'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathname = usePathname()

    const navItems = [
        {
            Icon: <HomeIcon className=' w-7' />,
            title: "Home"
        },
        {
            Icon: <SearchIcon className=' w-7' />,
            title: "Explore"
        },
        {
            Icon: pathname === "/notifications" ?
                <NotificationFilled className=' w-7' /> :
                <Notification className=' w-7 ' />,
            title: "Notifications"
        },
        {
            Icon: <MessageIcon className=' w-7' />,
            title: "Messages"
        },
        {
            Icon: <ListIcon className=' w-7 ' />,
            title: "List",
            smallScreen: "hidden sm:block"
        },
        {
            Icon: <CommunitieIcon className=' w-7 ' />,
            title: "Communities",
            smallScreen: "hidden sm:block"

        },
        {
            Icon: <VerifiedIcon className=' w-7 ' />,
            title: "Verified",
            smallScreen: "hidden sm:block"
        },
        {
            Icon: pathname === "/profile" ?
                <ProfileIconFill className=' w-7' /> :
                <ProfileIcon className=' w-7 ' />,
            title: "Profile",
            smallScreen: "hidden sm:block"
        },
        {
            Icon: <MoreIcon className=' w-7 hidden sm:block' />,
            title: "More",
            smallScreen: "hidden sm:block"

        },
    ]
    return (
        <div className=' w-24 xl:w-80 pt-2 sm:flex sm:flex-col sm:gap-2 sm:items-center xl:items-start fixed bottom-16  sm:static '>
            <div className=' fixed w-full sm:w-fit bg-white overflow-y-scroll h-full scrollbar-hide py-4'>
                <Link href={"/"}>
                    <div className=' p-2 hover:bg-black/10 duration-150 rounded-full sm:flex items-center gap-3 ml-2 hidden '>
                        <TwitterLogo className=' w-8 text-transparent fill-primary' />
                    </div>
                </Link>
                <div className=' flex w-full sm:flex-col gap-2 justify-around sm:items-center xl:items-start '>
                    {
                        navItems.map((item) =>
                            <Link
                                key={item.title}
                                href={`/${item.title.toLocaleLowerCase()}`}
                                className={`${item.smallScreen}`}
                            >
                                <div className=' xl:py-3 xl:px-5 p-2 hover:bg-black/10 duration-150 rounded-full flex items-center gap-3'>
                                    <div>
                                        {item.Icon}
                                    </div>
                                    <span className=' text-xl hidden xl:block'>{item.title}</span>
                                </div>
                            </Link>)
                    }
                    <div className='w-full hidden sm:block'>
                        <button
                            className=' hidden sm:block w-full'
                        >
                            <div className=''>
                                <div className=' xl:w-full w-12 h-12 bg-primary hover:bg-hoverBtn duration-150 rounded-full flex justify-center item-center xl:p-2 xl:py-3 xl:px-5 text-white '>
                                    <TweetIcon className=' w-7 xl:hidden fill-white text-transparent' />
                                    <span className=' text-xl hidden xl:block'>Tweet</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;