import { useState, useRef, useEffect } from 'react'
import './index.scss'

interface IVolumeSliderProps {
  volume: number
  onVolumeChange: (volume: number) => void
}

// REVIEW: для тач устройств будет фигово работать, а с нуля все поведения реализовывать такое себе для них
// Можно заюзать https://dndkit.com/
export const VolumeSlider = ({
  volume,
  onVolumeChange,
}: IVolumeSliderProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    updateVolume(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateVolume(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateVolume = (clientX: number) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const width = rect.width
    const newVolume = Math.max(0, Math.min(1, x / width))

    onVolumeChange(newVolume)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  return (
    <>
      <div
        ref={sliderRef}
        className="volume-slider"
        onMouseDown={handleMouseDown}
      >
        <div
          className="volume-slider-fill"
          style={{
            width: `${volume * 100}%`,
          }}
        />
      </div>
    </>
  )
}
