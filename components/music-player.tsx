"use client"

import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useMusicContext } from "./music-context"
import { FullScreenPlayer } from "./full-screen-player"

export default function MusicPlayer() {
  const { isPlaying, currentTime, duration, volume, togglePlayPause, handleVolumeChange, handleSeek, currentSong } =
    useMusicContext()

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={currentSong.cover || "/placeholder.svg"} alt="Album cover" className="w-12 h-12 rounded-md" />
          <div>
            <h4 className="text-sm font-medium">{currentSong.title}</h4>
            <p className="text-xs text-muted-foreground">{currentSong.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button onClick={togglePlayPause} size="icon" variant="ghost">
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 w-1/4">
          <Volume2 className="h-5 w-5" />
          <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-24" />
          <FullScreenPlayer />
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <span className="text-xs">{formatTime(currentTime)}</span>
        <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleSeek} className="flex-grow" />
        <span className="text-xs">{formatTime(duration)}</span>
      </div>
    </div>
  )
}

