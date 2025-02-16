import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import MusicPlayer from "@/components/music-player"
import HomePage from "@/components/home-page"

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <HomePage />
      </main>
      <MusicPlayer />
    </div>
  )
}

