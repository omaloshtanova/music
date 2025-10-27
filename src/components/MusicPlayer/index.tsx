import './index.scss'
import cover3 from '../../assets/cover3.png'
import previous from '../../assets/previous.svg'
import shuffle from '../../assets/shuffle.svg'
import play from '../../assets/play.svg'
import next from '../../assets/next.svg'
import repeateOne from '../../assets/repeate-one.svg'
import volumHigh from '../../assets/volume-high.svg'
import { useCallback, useEffect, useRef, useState } from 'react'

import { tracksStore } from '../../stores/Tracks'

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    tracksStore.fetchTrack()

    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const onEnd = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', onEnd)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    const audio = audioRef.current

    if (audio) {
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }, [])

  return (
    <>
      <div className="music-player">
        <audio
          ref={audioRef}
          src={tracksStore.track.audio!}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex flex-row items-center gap-[13px]">
          <img src={cover3} />
          <div className="flex flex-col gap-[3px]">
            <span className="h3-bold text-[var(--white)]">Худи</span>
            <span className="h4-bold text-[var(--dark-white)]">
              Джиган feat Artik & Asti, Niletto
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[27px]">
          <div className="flex flex-row gap-[42px]">
            <img
              src={shuffle}
              alt="shuffle"
            />
            <img
              src={previous}
              alt="previous"
            />
            <div
              className="play"
              onClick={togglePlay}
            >
              <img
                src={play}
                alt="play"
              />
            </div>

            <img
              src={next}
              alt="next"
            />
            <img
              src={repeateOne}
              alt="repeateOne"
            />
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="time-line"
          />
        </div>
        <div className="flex flex-row items-center gap-[6px]">
          <img
            src={volumHigh}
            alt="volumHigh"
          />
          <div className="volum"></div>
        </div>
      </div>
    </>
  )
}
