"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function LibraryPage() {
  const [playlists] = useState([
    { id: 1, name: "My Playlist #1", songCount: 15 },
    { id: 2, name: "Chill Vibes", songCount: 20 },
    { id: 3, name: "Workout Mix", songCount: 25 },
  ])

  const [albums] = useState([
    { id: 1, name: "Album 1", artist: "Artist 1" },
    { id: 2, name: "Album 2", artist: "Artist 2" },
    { id: 3, name: "Album 3", artist: "Artist 3" },
  ])

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Library</h1>
      <Tabs defaultValue="playlists">
        <TabsList>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
        </TabsList>
        <TabsContent value="playlists">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {playlists.map((playlist) => (
              <Card key={playlist.id}>
                <CardContent className="p-4">
                  <h3 className="font-medium">{playlist.name}</h3>
                  <p className="text-sm text-muted-foreground">{playlist.songCount} songs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="albums">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.map((album) => (
              <Card key={album.id}>
                <CardContent className="p-4">
                  <h3 className="font-medium">{album.name}</h3>
                  <p className="text-sm text-muted-foreground">{album.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

