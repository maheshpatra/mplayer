"use client"

import type React from "react"
import { createContext, useState, useContext, useRef, useEffect } from "react"

type MusicContextType = {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  togglePlayPause: () => void
  handleVolumeChange: (newVolume: number[]) => void
  handleSeek: (newTime: number[]) => void
  currentSong: { title: string; artist: string; cover: string }
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentSong, setCurrentSong] = useState({
    title: "Ajogyo Ami",
    artist: "Anupam Roy",
    cover: "/placeholder.svg",
  })

  useEffect(() => {
    const audio = new Audio(
      "https://webmusic.co.in/siteuploads/files/sfd1/67/Ajogyo%20Ami%20(Ajogyo)%20Anupam%20Roy-(WebMusic.Co.In).mp3",
    )
    audioRef.current = audio
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration)
    })
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime)
    })
    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
    }
  }

  const handleSeek = (newTime: number[]) => {
    const seekTime = newTime[0]
    setCurrentTime(seekTime)
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
    }
  }

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        volume,
        togglePlayPause,
        handleVolumeChange,
        handleSeek,
        currentSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export function useMusicContext() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider")
  }
  return context
}

