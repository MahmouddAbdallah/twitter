import Header from './component/Header'
import WritePost from './component/WritePost'
import Post from './component/Post'
import RightSidebar from './component/RightSideBar'
import TweetSection from './component/TweetSection'

export default function Home() {
  return (
    <div className=' flex'>
      <main className=' flex flex-col  justify-center w-full  md:w-[600px] h-full  border-x'>
        <Header />
        <div className=' flex flex-col w-full'>
          <WritePost className={" hidden sm:block"} />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div>
        </div>
      </main>
      {/* RightSidbar */}
      <RightSidebar />
      <TweetSection />
    </div>
  )
}
