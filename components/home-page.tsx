import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const trendingSongs = [
    { title: "Song 1", artist: "Artist 1", cover: "/placeholder.svg" },
    { title: "Song 2", artist: "Artist 2", cover: "/placeholder.svg" },
    { title: "Song 3", artist: "Artist 3", cover: "/placeholder.svg" },
    { title: "Song 4", artist: "Artist 4", cover: "/placeholder.svg" },
  ]

  const topPlaylists = [
    { title: "Playlist 1", description: "Description 1", cover: "/placeholder.svg" },
    { title: "Playlist 2", description: "Description 2", cover: "/placeholder.svg" },
    { title: "Playlist 3", description: "Description 3", cover: "/placeholder.svg" },
    { title: "Playlist 4", description: "Description 4", cover: "/placeholder.svg" },
  ]

  const newReleases = [
    { title: "Album 1", artist: "Artist 1", cover: "/placeholder.svg" },
    { title: "Album 2", artist: "Artist 2", cover: "/placeholder.svg" },
    { title: "Album 3", artist: "Artist 3", cover: "/placeholder.svg" },
    { title: "Album 4", artist: "Artist 4", cover: "/placeholder.svg" },
  ]

  return (
    <div className="container mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Songs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingSongs.map((song, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={song.cover || "/placeholder.svg"}
                  alt={song.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="font-medium">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topPlaylists.map((playlist, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={playlist.cover || "/placeholder.svg"}
                  alt={playlist.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="font-medium">{playlist.title}</h3>
                <p className="text-sm text-muted-foreground">{playlist.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newReleases.map((album, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="font-medium">{album.title}</h3>
                <p className="text-sm text-muted-foreground">{album.artist}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

