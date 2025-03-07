"use client"

import { useState, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useMusic } from "../context/MusicContext"

export default function MusicPlayer() {
  const { currentSong, isPlaying, playSong, pauseSong, nextSong, previousSong } = useMusic()
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = document.querySelector('audio')
    if (audio) {
      audio.volume = volume
      audio.onloadedmetadata = () => setDuration(audio.duration)
      audio.ontimeupdate = () => setCurrentTime(audio.currentTime)
    }
  }, [volume, currentSong])

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
  }

  const handleSeek = (newTime: number[]) => {
    const audio = document.querySelector('audio')
    if (audio) {
      audio.currentTime = newTime[0]
    }
  }

  if (!currentSong) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={currentSong.cover || "/placeholder.svg"} alt="Album cover" className="w-12 h-12 rounded-md" />
          <div>
            <h4 className="text-sm font-medium">{currentSong.title}</h4>
            <p className="text-xs text-muted-foreground">{currentSong.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground" onClick={previousSong}>
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className={`text-foreground ${isPlaying ? "animate-pulse" : ""} transition-all duration-200 transform hover:scale-110`}
            onClick={isPlaying ? pauseSong : () => playSong(currentSong)}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground" onClick={nextSong}>
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 w-1/4">
          <Volume2 className="h-5 w-5 text-foreground" />
          <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-24" />
        </div>
      </div>
      <div className="mt-4">
        <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleSeek} />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}