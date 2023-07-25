import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, ViewIcon } from "./Icons";

const Post = () => {
    return (
        <div className="flex gap-4 p-5 hover:bg-black/5 border-t">
            <div>
                <div className=" w-10 h-10 rounded-full bg-green-950"></div>
            </div>
            <div className="">
                <div className=" flex gap-2">
                    <div>
                        <div className=" flex gap-3">
                            <h2 className=" font-bold">Anthony</h2>
                            <span className=" text-grayColor"> @TheGalox_</span>
                        </div>
                        <div>
                            <p className=" text-sm text-grayColor">{"Snapdragon 8 Gen 2 for Galaxy "}</p>
                        </div>
                    </div>
                </div>
                <div className=" mt-2">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit pariatur perferendis vel veniam vero asperiores sunt </p>
                    </div>
                    <div className=" w-full h-72 bg-black rounded-2xl overflow-hidden">
                    </div>
                </div>
                <div>
                    <div className=" flex justify-around ml-1 mt-2">
                        <div className=" w-full ">
                            <div className="group w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/30 cursor-pointer duration-150">
                                <ReplyIcon className=" w-5 fill-grayColor text-transparent group-hover:fill-primary duration-150" />
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className="group w-8 h-8 flex items-center justify-center rounded-full hover:bg-retweetColor/30  cursor-pointer duration-150">
                                <RetweetIcon className=" w-5 fill-grayColor text-transparent group-hover:fill-retweetColor duration-150" />
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className="group w-8 h-8 flex items-center justify-center rounded-full hover:bg-likeColor/30 cursor-pointer duration-150">
                                <LikeIcon className=" w-5 fill-grayColor text-transparent group-hover:fill-likeColor duration-150" />
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className="group w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/30 cursor-pointer duration-150">
                                <ViewIcon className=" w-5 fill-grayColor text-transparent group-hover:fill-primary duration-150" />
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className="group w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/30 cursor-pointer duration-150">
                                <ShareIcon className=" w-5 fill-grayColor text-transparent group-hover:fill-primary duration-150" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;