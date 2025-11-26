import { useCallback, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { playerStore } from '@/stores/PlayerStore'
import previous from '@assets/icons/previous.svg'
import shuffle from '@assets/icons/shuffle.svg'
import play from '@assets/icons/play.svg'
import next from '@assets/icons/next.svg'
import repeateOne from '@assets/icons/repeate-one.svg'
import volumHigh from '@assets/icons/volume-high.svg'
import './index.scss'
import { VolumeSlider } from '../VolumeSlider'

// REVIEW: по хорошему когда юзаешь mobx всю бизнес логику выносить в стор. react тогда будет чисто вьюхой.
// У тебя сейчас часть логики в компоненте часть в сторе.
// А если например текущий прогресс трека нужен будет еще где-то за пределами плеера
export const MusicPlayer = observer(() => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (audioRef.current && playerStore.track?.audio && !isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
    } else if (audioRef.current && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const onEnd = () => {
      setIsPlaying(false)
      playerStore.nextTrack()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', onEnd)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', onEnd)
    }
  }, [playerStore.track])

  const togglePlay = () => {
    // REVIEW: лучше так if (audioRef.current) return;
    // Так при увелечении проверок код не будет читать читаемость из за вложености

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }

      // REVIEW: setIsPlaying(prev => !prev);
      setIsPlaying(!isPlaying)
    }
  }

  const nextPlay = () => {
    playerStore.nextTrack()
  }

  const previousPlay = () => {
    playerStore.previousTrack()
  }

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    const audio = audioRef.current

    if (audio) {
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }, [])

  const handleVolumeChange = (newVolume: number) => {
    // REVIEW: Зачем менять стейт если у тебя например udioRef.current -> undefined
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={playerStore.track?.audio || undefined}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex flex-row items-center gap-1">
        <img
          className="cover-track"
          src={playerStore.track?.img || undefined}
        />
        <div className="flex flex-col gap-1">
          <span className="h3-bold text-[var(--white)]">
            {playerStore.track?.title}
          </span>
          <span className="h4-bold text-[var(--dark-white)]">
            {playerStore.track?.singer}
          </span>
        </div>
      </div>
      <div className="player flex flex-col items-center gap-1.5">
        <div className="flex flex-row items-center gap-2.5">
          <img
            src={shuffle}
            alt="shuffle"
          />
          <img
            src={previous}
            alt="previous"
            onClick={previousPlay}
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
            className="next"
            src={next}
            alt="next"
            onClick={nextPlay}
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
      <div className="volum-high flex flex-row items-center gap-1">
        <img
          src={volumHigh}
          alt="volumHigh"
        />
        <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
        {/* <div className="volum"></div> */}
      </div>

      <div className="player-mobile">
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
      </div>
    </div>
  )
})
