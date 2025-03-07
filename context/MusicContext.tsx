"use client"

import React, { createContext, useContext, useState, useRef } from 'react'

type Song = {
  id: string
  title: string
  artist: string
  cover: string
  audioSrc: string
}

type MusicContextType = {
  currentSong: Song | null
  isPlaying: boolean
  playSong: (song: Song) => void
  pauseSong: () => void
  nextSong: () => void
  previousSong: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSong = (song: Song) => {
    setCurrentSong(song)
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.src = song.audioSrc
      audioRef.current.play()
    }
  }

  const pauseSong = () => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  const nextSong = () => {
    // Implement logic to play next song
  }

  const previousSong = () => {
    // Implement logic to play previous song
  }

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playSong, pauseSong, nextSong, previousSong }}>
      {children}
      <audio ref={audioRef} />
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}