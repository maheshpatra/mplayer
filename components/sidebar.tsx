import Link from "next/link"
import { Home, Search, Library, PlusCircle, Heart } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card text-card-foreground p-6 hidden md:block">
      <nav className="space-y-6">
        <div className="space-y-3">
          <Link href="/" className="flex items-center space-x-3 text-primary hover:text-primary/80">
            <Home />
            <span>Home</span>
          </Link>
          <Link href="/search" className="flex items-center space-x-3 text-primary hover:text-primary/80">
            <Search />
            <span>Search</span>
          </Link>
          <Link href="/library" className="flex items-center space-x-3 text-primary hover:text-primary/80">
            <Library />
            <span>Your Library</span>
          </Link>
        </div>
        <div className="space-y-3">
          <Link href="/create-playlist" className="flex items-center space-x-3 text-primary hover:text-primary/80">
            <PlusCircle />
            <span>Create Playlist</span>
          </Link>
          <Link href="/liked-songs" className="flex items-center space-x-3 text-primary hover:text-primary/80">
            <Heart />
            <span>Liked Songs</span>
          </Link>
        </div>
        <div className="border-t border-border pt-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                My Playlist #1
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Chill Vibes
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Workout Mix
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

