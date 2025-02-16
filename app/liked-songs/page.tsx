"use client"

import { useState } from "react"
import { Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LikedSongsPage() {
  const [likedSongs] = useState([
    { id: 1, title: "Ajogyo Ami", artist: "Anupam Roy", duration: "4:30" },
    { id: 2, title: "Song 2", artist: "Artist 2", duration: "3:45" },
    { id: 3, title: "Song 3", artist: "Artist 3", duration: "5:15" },
  ])

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Liked Songs</h1>
        <Button>
          <Play className="mr-2 h-4 w-4" /> Play All
        </Button>
      </div>
      <ul className="space-y-4">
        {likedSongs.map((song) => (
          <li key={song.id} className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg" alt={song.title} className="w-12 h-12 object-cover rounded" />
              <div>
                <h3 className="font-medium">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{song.duration}</span>
              <Button variant="ghost" size="icon">
                <Heart className="h-4 w-4 fill-current" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

