"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would call an API here
    const mockResults = [
      { id: 1, title: "Ajogyo Ami", artist: "Anupam Roy", type: "song" },
      { id: 2, title: "Best of Anupam Roy", artist: "Anupam Roy", type: "album" },
      { id: 3, title: "Bengali Hits", artist: "Various Artists", type: "playlist" },
    ]
    setSearchResults(mockResults)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Search</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <Input
            type="search"
            placeholder="Search for songs, artists, or albums"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        {searchResults.length > 0 ? (
          <ul className="space-y-4">
            {searchResults.map((result) => (
              <li key={result.id} className="flex items-center space-x-4">
                <img src="/placeholder.svg" alt={result.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-medium">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.artist}</p>
                  <p className="text-xs text-muted-foreground capitalize">{result.type}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No results found. Try searching for something!</p>
        )}
      </div>
    </div>
  )
}

