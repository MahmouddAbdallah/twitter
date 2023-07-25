'use client'
import Link from "next/link";
import { useState } from "react";
import { TwitterLogo } from "./Icons";

const Header = () => {
    const [active, setActive] = useState(1)
    return (
        <header className=" w-full sticky -top-16 sm:top-0 bg-headerBG">
            <div className="  bg-headerBG w-full flex flex-col justify-start">
                <div className=" flex items-center sm:hidden">
                    <div className=" flex">
                        <Link href={'/profile'}>
                            <div className=" w-10 h-10 bg-green-900 rounded-full ml-5"></div>
                        </Link>
                    </div>
                    <div className=" flex-1">
                        <div className=" w-full flex justify-center items-center  ">
                            <Link href={"/"}>
                                <div className=' p-2 hover:bg-black/10 duration-150 rounded-full flex items-center gap-3 ml-2'>
                                    <TwitterLogo className=' w-9 text-transparent fill-primary' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href={"/"}
                    className='hidden sm:block'>
                    <h1 className=" font-[700] text-2xl p-3">
                        Home
                    </h1>
                </Link>
                <div className=" flex w-full justify-between ">
                    <a href={"#"}
                        onClick={() => {
                            setActive(1)
                        }}
                        className={`${active == 1 ? "text-black" : "text-grayColor"} 2xl:text-lg font-[700] flex justify-center w-full hover:bg-black/5 py-5 duration-150`}>
                        <span>
                            For you
                        </span>
                    </a>
                    <a href={"#"}
                        onClick={() => {
                            setActive(2)
                        }}
                        className={`${active == 2 ? "text-black" : "text-grayColor"} 2xl:text-lg font-[700] flex justify-center w-full hover:bg-black/5 py-5 duration-150`}>
                        <span>
                            Following
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}


export default Header;