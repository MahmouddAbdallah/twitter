'use client'
import { useState } from "react"
import { TweetIcon } from "./Icons"
import WritePost from "./WritePost"

const TweetSection = () => {
    const [active, setActive] = useState(false)
    return (
        <div className=" block sm:hidden">
            <div className="fixed top-20 left-5 w-[500px] z-10">
                <WritePost className={active ? "block w-full" : "hidden"} />
            </div>
            {active &&
                <div
                    onClick={() => {
                        setActive(false)
                    }}
                    className=" fixed top-0 left-0 w-full h-full bg-black/50" />
            }
            <button
                className=' fixed bottom-20 right-10 '
                onClick={() => {
                    setActive(!active)
                }}
            >
                <div className=''>
                    <div className=' xl:w-full w-12 h-12 bg-primary hover:bg-hoverBtn duration-150 rounded-full flex justify-center item-center xl:p-2 xl:py-3 xl:px-5 text-white '>
                        <TweetIcon className=' w-7 xl:hidden fill-white text-transparent' />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default TweetSection