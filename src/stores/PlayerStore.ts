import { makeAutoObservable } from "mobx"
// import type { ITrackModelConstrcutData } from "./interfaces/ITrackModelConstrcutData"
import type { TrackModel } from "./models/TrackModel"

class PlayerStore {

    track: TrackModel | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setTrack = (newTrack: TrackModel) => {
        this.track = newTrack
    }

    nextTrack() {
        if (!this.track?.album) return
        
        const tracks = this.track.album.tracks
        const currentIndex = tracks.findIndex(track => track.id === this.track?.id)
        
        if (currentIndex < tracks.length - 1) {
            this.setTrack(tracks[currentIndex + 1])
        } else {
            this.setTrack(tracks[0])
        }
    }
  
    previousTrack() {
        if (!this.track?.album) return
        
        const tracks = this.track.album.tracks
        const currentIndex = tracks.findIndex(track => track.id === this.track?.id)
        
        if (currentIndex > 0) {
            this.setTrack(tracks[currentIndex - 1])
        } else {
            this.setTrack(tracks[tracks.length - 1])
        }
    }
}

export const playerStore = new PlayerStore()