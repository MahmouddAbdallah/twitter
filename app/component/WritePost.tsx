'use client'

import { useState } from "react";
import { AtIcon, EarthIcon, EmojiIcon, FollowingYOuIcon, GIFIcon, LocationIcon, PhotoPostIcon } from "./Icons";
interface WritePostProps {
    className: string,
}
const WritePost: React.FC<WritePostProps> = ({ className }) => {
    const [btn, setBtn] = useState({
        icon: <EarthIcon className={` w-5 fill-primary text-transparent `} />,
        title: "Everyone"
    })
    const [active, setActive] = useState(false)
    return (
        <div className={`bg-white rounded-lg p-2 ${className}`}>
            <div className=" flex  gap-3 m-5">
                <div>
                    <div className=" w-12 h-12 bg-green-900 rounded-full"></div>
                </div>
                <div className=" flex flex-col w-full">
                    <form className=" border-b pb-2 flex flex-col w-full">
                        <select className=" border px-3 rounded-full text-primary font-[600] text-[17px] w-fit">
                            <option value="">Everone</option>
                        </select>
                        <textarea
                            className=" mt-5 text-xl text-grayColor 
                        py-3 focus:outline-none w-full h-fit"
                            placeholder="What is happening?!"
                        />
                        <div className=" relative">
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    setActive(!active)
                                }}
                                className=" flex items-center gap-2">
                                <div className="  flex items-center justify-center rounded-full">
                                    {
                                        btn.icon
                                    }
                                </div>
                                <span className=" font-[600] text-primary">
                                    {
                                        btn.title
                                    }
                                </span>
                            </button>
                            {
                                active &&
                                <div className=" w-[340px] shadow-lg border rounded-lg p-5 absolute bg-white z-10 ">
                                    <h2 className=" text-lg font-[600] pt-2">Who can reply?</h2>
                                    <p className=" text-grayColor">Choose who can reply to this Tweet. Anyone mentioned can always reply.</p>
                                    <div className=" flex flex-col gap-5 mt-5">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setBtn({
                                                    title: " Everyone",
                                                    icon: <EarthIcon className=" w-5 fill-primary text-transparent" />
                                                })
                                                setActive(false)
                                            }}
                                            className=" flex items-center gap-5">
                                            <div className=" bg-primary w-10 h-10 flex items-center justify-center rounded-full">
                                                <EarthIcon className=" w-6  fill-white text-transparent" />
                                            </div>
                                            <span className=" font-[600]"> Everyone</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setBtn({
                                                    title: " People you follow",
                                                    icon: <FollowingYOuIcon className=" w-5 fill-primary text-transparent" />
                                                })
                                                setActive(false)
                                            }}
                                            className=" flex items-center gap-5">
                                            <div className=" bg-primary w-10 h-10 flex items-center justify-center rounded-full">
                                                <FollowingYOuIcon className=" w-6  fill-white text-transparent" />
                                            </div>
                                            <span className=" font-[600]"> People you follow</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setBtn({
                                                    title: " Only people you mention",
                                                    icon: <AtIcon className=" w-5 fill-primary text-transparent" />
                                                })
                                                setActive(false)
                                            }}
                                            className=" flex items-center gap-5">
                                            <div className=" bg-primary w-10 h-10 flex items-center justify-center rounded-full">
                                                <AtIcon className=" w-6  fill-white text-transparent" />
                                            </div>
                                            <span className=" font-[600]"> Only people you mention</span>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                    <div className=" pt-5 flex justify-between items-center">
                        <div className=" flex gap-5">
                            {
                                [
                                    { icon: <PhotoPostIcon className=" w-6 fill-primary text-transparent" /> },
                                    { icon: <GIFIcon className=" w-6 fill-primary text-transparent" /> },
                                    { icon: <EmojiIcon className=" w-6 fill-primary text-transparent" /> },
                                    { icon: <LocationIcon className=" w-6 fill-primary text-transparent" /> }
                                ].map(((ele, index) =>
                                    <div key={index}>
                                        {ele.icon}
                                    </div>
                                ))}
                        </div>
                        <button className=" px-6 py-2 bg-primary text-white font-bold rounded-full">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WritePost;