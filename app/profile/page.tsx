import React from 'react'
import RightSidebar from './conponent/RightSideBar'

const page = () => {
    return (
        <div className=' flex'>
            <main className=' flex flex-col  justify-center w-full  md:w-[600px] h-full  border-x'>
                <div className=' h-[5000px]'></div>
            </main>
            <RightSidebar />
        </div>
    )
}

export default page