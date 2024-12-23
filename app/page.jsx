import DotMatrixMusicPlayer from '../components/DotMatrixMusicPlayer'
import LibraryPane from '../components/LibraryPane'
import QueuePane from '../components/QueuePane'

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 bg-primary-black">
      <div className="grid grid-cols-12 gap-4 sm:gap-6 h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] max-w-[2000px] mx-auto">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 hidden md:block overflow-y-auto">
          <LibraryPane />
        </div>
        
        <div className="col-span-12 md:col-span-4 lg:col-span-6 overflow-y-auto">
          <DotMatrixMusicPlayer />
        </div>
        
        <div className="col-span-12 md:col-span-4 lg:col-span-3 hidden md:block overflow-y-auto">
          <QueuePane />
        </div>
      </div>
    </div>
  )
}


