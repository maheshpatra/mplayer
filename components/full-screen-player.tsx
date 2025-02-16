"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2 } from "lucide-react"
import { useMusicContext } from "./music-context"

export function FullScreenPlayer() {
  const { isPlaying, currentTime, duration, volume, togglePlayPause, handleVolumeChange, handleSeek, currentSong } =
    useMusicContext()

  const [isOpen, setIsOpen] = useState(false)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Maximize2 className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <div className="flex flex-col items-center space-y-6 p-6">
          <img
            src={currentSong.cover || "/placeholder.svg"}
            alt="Album cover"
            className="w-64 h-64 rounded-lg shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">{currentSong.title}</h2>
            <p className="text-lg text-muted-foreground">{currentSong.artist}</p>
          </div>
          <div className="w-full max-w-md">
            <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleSeek} className="w-full" />
            <div className="flex justify-between mt-2">
              <span className="text-sm">{formatTime(currentTime)}</span>
              <span className="text-sm">{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <SkipBack className="h-6 w-6" />
            </Button>
            <Button onClick={togglePlayPause} size="icon" variant="ghost">
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 w-full max-w-xs">
            <Volume2 className="h-5 w-5" />
            <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-full" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

