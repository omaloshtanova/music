import { makeAutoObservable } from "mobx"
import type { ITrackModelConstrcutData } from "./interfaces/ITrackModelConstrcutData"

class PlayerStore {
  track: ITrackModelConstrcutData = {
        id: 0,
        audio: null,
        title: null,
        singer: null,
        type: null,
        time: null,
        img: null,
        like: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    setTrack = (newTrack: ITrackModelConstrcutData ) => {
        this.track = newTrack
    }
}

export const playerStore = new PlayerStore()