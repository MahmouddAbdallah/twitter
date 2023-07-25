import { MoreTIcon, SearchIcon } from "@/app/component/Icons";


const RightSidebar = () => {
    return (
        <div className='w-80 ml-8 pt-1 hidden lg:block '>
            <div className=' flex flex-col h-full'>
                <div className=" sticky top-1 z-10">
                    <form className=' w-full bg-white'>
                        <div className=' relative flex items-center group'>
                            <input
                                className=' bg-black/5 w-full rounded-full py-2 pl-10 focus:outline-none focus:border focus:border-primary peer'
                                type="text"
                                placeholder='Search Twitter' />
                            <SearchIcon className='w-5 absolute ml-3 text-transparent fill-grayColor  peer-focus:fill-primary' />
                        </div>
                    </form>
                </div>
                <div className=' mt-1  bg-grayBg  rounded-xl  sticky top-0'>
                    <h1 className='px-5 font-bold text-2xl my-5'>
                        Who to follow
                    </h1>
                    <SomeOne />
                    <SomeOne />
                    <SomeOne />
                    <SomeOne />
                    <div className=" w-full hover:bg-black/5 py-4 cursor-pointer rounded-b-xl">
                        <span className=" text-primary px-5 py-2"> Show More</span>
                    </div>
                </div>
                <div className=' mt-10  bg-grayBg  rounded-xl sticky top-[420px]'>
                    <h1 className='px-5 font-bold text-2xl my-5'>What is happening</h1>
                    <Section trend={"Trending in Egypt"} title={"hello my body"} />
                    <Section trend={"Trending in Egypt"} title={"hello my body"} />
                    <Section trend={"Trending in Egypt"} title={"hello my body"} />
                    <div className=" w-full hover:bg-black/5 py-4 cursor-pointer rounded-b-xl">
                        <span className=" text-primary px-5 py-2"> Show More</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default RightSidebar;

interface sectionProps {
    trend: string,
    title: string
}
const Section: React.FC<sectionProps> = ({ trend, title }) => {
    return (
        <div className=' py-2 px-5 cursor-pointer hover:bg-black/5 duration-150'>
            <div className=' flex justify-between'>
                <span className='text-xs text-grayColor '>{trend}</span>
                <div className=' group w-8 h-8 rounded-full hover:bg-primary/20 duration-150 flex items-center justify-center -mt-1'>
                    <MoreTIcon className=' text-transparent fill-black w-5 group-hover:fill-primary duration-150' />
                </div>
            </div>
            <h1 className=' font-bold text-lg'>{title}</h1>
        </div>
    )
}
interface someoneProps {
    name: string,
    imageSrc: any,
    description?: string
}

const SomeOne = () => {
    return (
        <div className=" flex justify-between items-center py-2 px-3 cursor-pointer hover:bg-black/5 duration-150">
            <div className=" flex gap-3">
                <div>
                    <div className=" w-12 h-12 bg-green-900 rounded-full"></div>
                </div>
                <div>
                    <h3 className=" font-bold ">
                        Jude Bellingham
                    </h3>
                    <span className=" text-grayColor">
                        @BellinghamJude
                    </span>
                </div>
            </div>
            <div>
                <button className=" bg-black text-white font-bold px-4 py-1 rounded-full">
                    Follow
                </button>
            </div>
        </div>
    );
}
