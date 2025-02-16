"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CreatePlaylistPage() {
  const [playlistName, setPlaylistName] = useState("")
  const [playlistDescription, setPlaylistDescription] = useState("")

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would call an API to create the playlist
    console.log("Creating playlist:", { name: playlistName, description: playlistDescription })
    // Reset form
    setPlaylistName("")
    setPlaylistDescription("")
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Playlist</h1>
      <form onSubmit={handleCreatePlaylist} className="space-y-4">
        <div>
          <label htmlFor="playlist-name" className="block text-sm font-medium mb-1">
            Playlist Name
          </label>
          <Input
            id="playlist-name"
            type="text"
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="playlist-description" className="block text-sm font-medium mb-1">
            Description (optional)
          </label>
          <Textarea
            id="playlist-description"
            placeholder="Enter playlist description"
            value={playlistDescription}
            onChange={(e) => setPlaylistDescription(e.target.value)}
            rows={4}
          />
        </div>
        <Button type="submit">
          <PlusCircle className="mr-2 h-4 w-4" /> Create Playlist
        </Button>
      </form>
    </div>
  )
}

